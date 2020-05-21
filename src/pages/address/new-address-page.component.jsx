/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleApiWrapper } from 'google-maps-react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormSelect from '../../components/form-select/form-select.component';
import Spinner from '../../components/spinner/spinner.component';
import SpinnerButton from '../../components/spinner-button/spinner-button.component';
import { ReactComponent as KitchenIcon } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BathroomIcon } from '../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as BedroomIcon } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Kids } from '../../assets/new-job/baby-icon.svg';
import { ReactComponent as Pets } from '../../assets/new-job/pet-icon.svg';
import { ReactComponent as MapIcon } from '../../assets/new-address/locate.svg';

import { uploadImageFirebase } from '../../helpers/save-image-firebase';
import { getMapImage } from '../../helpers/get-map-image';
import { calculateTotalDuration, calculateRoomDuration } from '../../helpers/calculate-duration';

import { AuthContext } from '../../contexts/auth-context';
import { UserContext } from '../../contexts/user-context';

import {
  NewAddressPageContainer,
  NewAddressPageHeader,
  NewAddressPageForm,
  TwoFieldLine,
  RoomsLine,
  OthersLine,
  LinkMap,
  AddressInput
} from './new-address-page.styles';

const NewAddressPage = ({ google, ...otherProps }) => {
  const [formFields, setFormFields] = useState({
    addressName: '',
    addressStreet: '',
    addressNumber: '',
    squareMeters: '',
    city: '',
    zipCode: '',
    image: '',
    lat: '',
    lng: ''
  });
  const [rooms, setRooms] = useState({ kitchen: 0, room: 0, bathroom: 0, terrace: 0 });
  const [others, setOthers] = useState({ pets: false, kids: false });
  const [isLoading, setLoading] = useState(false);
  const { addressName, addressStreet, addressNumber, squareMeters, city, zipCode, lat, lng, image } = formFields;
  const { user, update } = useContext(AuthContext);
  const { createAddress, editAddress } = useContext(UserContext);
  const addressId = otherProps.location.state ? otherProps.location.state._id : null;

  const { register, handleSubmit, errors, setError } = useForm();

  const setAddressFields = addressId => {
    const address = user.addresses.filter(address => address._id === addressId)[0];
    const { name, rooms, pets, kids, long, mapImage } = address;
    const addressRooms = {};
    rooms.forEach(({ type, number }) => {
      addressRooms[type] = number;
    });
    setFormFields({ ...address, addressName: name, lng: long, image: mapImage });
    setRooms({ kitchen: addressRooms.kitchen, room: addressRooms.room, bathroom: addressRooms.bathroom, terrace: addressRooms.terrace });
    setOthers({ pets, kids });
  }

  useEffect(() => {
    if (otherProps.location.state) {
      addressId && user.addresses && user.addresses.length
        ? setAddressFields(addressId)
        : setFields(otherProps.location.state)
    };
  }, []);

  const setFields = (fields) => {
    const { street_number, route, locality, postal_code, image, lat, lng } = fields;
    setFormFields({ ...formFields, addressStreet: route + ', ' + street_number, city: locality, zipCode: postal_code, image, lat, lng });
  }

  const handleInput = event => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleAddress = event => {
    setFormFields({ ...formFields, addressStreet: event.target.value, lat: '', lng: '' });
  }

  const formInputOptions = (selected) => {
    const options = [];
    for (let i = 0; i <= 5; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options;
  }

  const onChange = event => {
    const { value, name } = event.target;
    setRooms({ ...rooms, [name]: value * 1 });
  }

  const onChangeOthers = event => {
    const { name } = event.target;
    setOthers({ ...others, [name]: !others[name] });
  }

  const saveImageFirebase = async () => {
    const url = await uploadImageFirebase({ lat, lng, image, userId: user._id });
    return url;
  }

  const onSubmit = event => {
    const roomsGreaterThanZero = rooms.kitchen + rooms.room + rooms.bathroom + rooms.terrace;
    if (!roomsGreaterThanZero) {
      setError('emptyRooms', 'notEmpty', 'Please, add at least one room to your house');
    } else {
      const roomsDuration = calculateRoomDuration(rooms, others, squareMeters);
      const totalDuration = calculateTotalDuration(roomsDuration);
      console.log(lat, lng)
      if (lat && lng) {
        setLoading(true);
        if (addressId) {
          const address = {
            name: addressName,
            addressStreet,
            addressNumber,
            city,
            zipCode,
            squareMeters,
            rooms: roomsDuration,
            duration: totalDuration,
            lat,
            long: lng,
            mapImage: image,
            pets: others.pets,
            kids: others.kids
          }
          editAddress(addressId, address)
            .then(address => {
              setLoading(false);
              update();
              alert('Address edited!');
            })
            .catch(error => {
              console.log(error);
              setLoading(false);
            })
        } else {
          saveImageFirebase()
            .then(url => {
              const address = {
                name: addressName,
                addressStreet,
                addressNumber,
                city,
                zipCode,
                squareMeters,
                rooms: roomsDuration,
                duration: totalDuration,
                lat,
                long: lng,
                mapImage: url,
                pets: others.pets,
                kids: others.kids
              }
              createAddress(address)
                .then(address => {
                  setLoading(false);
                  update();
                  alert('Address added!');
                })
                .catch(error => {
                  console.log(error);
                  setLoading(false);
                })
            });
        }
      } else {
        const address = `${addressStreet}, ${city}`;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
          if (status === 'OK') {
            const address = results[0].address_components;
            if (address) {
              const location = results[0].geometry.location;
              const lat = location.lat();
              const lng = location.lng();
              getFields(address, lat, lng);
              setLoading(true);
              saveImageFirebase()
                .then(url => {
                  const address = {
                    name: addressName,
                    addressStreet,
                    addressNumber,
                    city,
                    zipCode,
                    squareMeters,
                    rooms: roomsDuration,
                    duration: totalDuration,
                    lat,
                    long: lng,
                    mapImage: url,
                    pets: others.pets,
                    kids: others.kids
                  }
                  if (addressId) {
                    editAddress(addressId, address)
                      .then(address => {
                        setLoading(false);
                        update();
                        alert('Address edited!');
                      })
                      .catch(error => {
                        console.log(error);
                        setLoading(false);
                      })
                  } else {
                    createAddress(address)
                      .then(address => {
                        setLoading(false);
                        update();
                        alert('Address added!');
                      })
                  }
                });
            }
          } else {
            setLoading(true);
            if (addressId) {
              const address = {
                name: addressName,
                addressStreet,
                addressNumber,
                city,
                zipCode,
                squareMeters,
                mapImage: image,
                rooms: roomsDuration,
                duration: totalDuration,
                pets: others.pets,
                kids: others.kids
              }
              editAddress(addressId, address)
                .then(address => {
                  setLoading(false);
                  update();
                  alert('Address edited!');
                })
                .catch(error => {
                  console.log(error);
                  setLoading(false);
                })
            } else {
              saveImageFirebase()
                .then(url => {
                  const address = {
                    name: addressName,
                    addressStreet,
                    addressNumber,
                    city,
                    zipCode,
                    squareMeters,
                    rooms: roomsDuration,
                    duration: totalDuration,
                    pets: others.pets,
                    kids: others.kids
                  }
                  createAddress(address)
                    .then(address => {
                      setLoading(false);
                      update();
                      alert('Address added!');
                    })
                });
            }
          }
        });
      }
    }
  }

  const renderAutoComplete = () => {
    const input = document.getElementById('locationInput');
    const options = {
      types: ['geocode'],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);

    autocomplete.addListener('place_changed', () => {
      const addressObject = autocomplete.getPlace();
      const address = addressObject.address_components;

      if (address) {
        const location = addressObject.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        getFields(address, lat, lng)
      }
    });
  }

  const getFields = (address, lat, lng) => {
    let fields = {
      street_number: '',
      route: '',
      locality: '',
      postal_code: ''
    }
    for (let i = 0; i < address.length; i++) {
      const addressType = address[i].types[0];
      const val = address[i]['short_name'];
      fields[addressType] = val;
    }
    if (!fields.route) fields.route = addressStreet;
    fields = { ...fields, lat, lng };
    getMapImage(lat, lng)
      .then(image => setFields({ ...fields, image }));
  }

  return (
    <NewAddressPageContainer>
      <NewAddressPageHeader>
        <h2>{addressId ? 'Edit your house' : 'Add your house'}</h2>
        <span>Add detailed info about your house, so that we can manage your services in the best way</span>
      </NewAddressPageHeader>
      <NewAddressPageForm onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <FormInput
          name='addressName'
          onChange={handleInput}
          placeholder='My house'
          defaultValue={addressName}
          register={register}
          required='*this field is required'
          error={errors.name && errors.name.message}
        />
        <TwoFieldLine>
          <AddressInput
            name='googleSearch'
            onChange={handleAddress}
            placeholder='Plaça Catalunya, 31'
            width='187px'
            defaultValue={addressStreet}
            id='locationInput'
            onFocus={renderAutoComplete}
          />
          <LinkMap to='/user/new-address/map'><MapIcon style={{ width: '20px', height: '20px', stroke: 'white ', marginRight: '3px' }} />map</LinkMap>
        </TwoFieldLine>
        <TwoFieldLine>
          <FormInput
            name='addressNumber'
            onChange={handleInput}
            placeholder='2º 3'
            register={register}
            defaultValue={addressNumber}
            width='187px'
          />
          <FormInput
            name='squareMeters'
            onChange={handleInput}
            placeholder='m2'
            defaultValue={squareMeters}
            register={register}
            required='*required'
            error={errors.squareMeters && errors.squareMeters.message}
            width='80px'
          />
        </TwoFieldLine>
        <TwoFieldLine>
          <FormInput
            name='city'
            onChange={handleInput}
            placeholder='Barcelona'
            register={register}
            required='*this field is required'
            error={errors.city && errors.city.message}
            width='187px'
            defaultValue={city}
          />
          <FormInput
            name='zipCode'
            onChange={handleInput}
            placeholder='08024'
            register={register}
            required='*required'
            error={errors.zipCode && errors.zipCode.message}
            width='80px'
            defaultValue={zipCode}
          />
        </TwoFieldLine>
        <h2>rooms</h2>
        <RoomsLine>
          <span><KitchenIcon /> <FormSelect value={rooms.kitchen} width='40' name='kitchen' register={register} onChange={onChange}>{formInputOptions()}</FormSelect></span>
          <span><BedroomIcon /> <FormSelect value={rooms.room} width='40' name='room' register={register} onChange={onChange}>{formInputOptions()}</FormSelect></span>
          <span><BathroomIcon /> <FormSelect value={rooms.bathroom} width='40' name='bathroom' register={register} onChange={onChange}>{formInputOptions()}</FormSelect></span>
          <span><LivingroomIcon /> <FormSelect value={rooms.terrace} width='40' name='terrace' register={register} onChange={onChange}>{formInputOptions()}</FormSelect></span>
        </RoomsLine>
        <h2>others</h2>
        <OthersLine>
          <span>
            <Kids />
            <FormSelect value={others.kids} width='50' name='kids' register={register} onChange={onChangeOthers}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </FormSelect>
          </span>
          <span>
            <Pets />
            <FormSelect value={others.pets} width='50' name='pets' register={register} onChange={onChangeOthers}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </FormSelect>
          </span>
        </OthersLine>
        <p>{errors.emptyRooms && errors.emptyRooms.message}</p>
        <CustomButton width='150' fontweight='lighter' type='submit' disabled={isLoading}>
          {isLoading ? <SpinnerButton /> : addressId ? 'Edit Address' : 'Add Address'}
        </CustomButton>
      </NewAddressPageForm>
    </NewAddressPageContainer>
  );
}

export default GoogleApiWrapper({
  // apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // libraries: ['places'],
  LoadingContainer: Spinner
})(NewAddressPage);