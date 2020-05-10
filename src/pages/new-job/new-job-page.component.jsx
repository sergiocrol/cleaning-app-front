/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { setMinutes, setHours } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { ReactComponent as HouseIcon } from '../../assets/new-job/house-icon.svg';
import { ReactComponent as KitchenIcon } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BathroomIcon } from '../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as BedroomIcon } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as DateBookingError } from '../../assets/new-job/date-error.svg';
import Calendar from '../../assets/new-job/calendar-icon.png';
import bcg from '../../assets/backgrounds/bg1-alpha.svg';

import { AuthContext } from '../../contexts/auth-context';
import { UserContext } from '../../contexts/user-context';

import {
  NewJobContainer,
  NewJobTitle,
  MessageBlock,
  PrivatePublicIcon,
  Path,
  PublicButtonContainer,
  PublicMessage,
  Form,
  AddressLine,
  RoomsLine,
  AddAddressIcon,
  NewJobSubtitle
} from './new-job.styles';
import './date-picker.styles.scss';

const NewJobPage = (props) => {
  const cleaner = props.location.state ? props.location.state.cleaner : '';
  const { register, handleSubmit, errors, setError } = useForm();
  const { user: { addresses, jobs }, update } = useContext(AuthContext);
  const { createJob } = useContext(UserContext);

  const [pickedAddress, setSelectedAddress] = useState({ selectedAddress: null, selectedIndex: 0 });
  const [isPrivate, setIsPrivate] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(null);
  const [isDateError, setDateError] = useState(false);
  const [message, setMessage] = useState('');
  const [jobData, setJobData] = useState({
    selectedDate: new Date(),
    room: 0,
    kitchen: 0,
    bathroom: 0,
    terrace: 0
  });

  const { selectedDate, kitchen, room, bathroom, terrace } = jobData;
  const { selectedIndex } = pickedAddress;

  useEffect(() => {
    if (!message) {
      configureMessage(true)
    }
    if (addresses && addresses.length > 0) {
      const rooms = { kitchen: 0, room: 0, bathroom: 0, terrace: 0 };
      const address = addresses[selectedIndex];
      const jobsAddress = jobs.filter(job => job.address === address._id);
      jobsAddress.length > 0 && jobsAddress[jobsAddress.length - 1].rooms.forEach(room => rooms[room.type] = room.number);
      setJobData({ ...jobData, ...rooms });
    }
  }, [selectedIndex]);

  const handleChange = event => {
    const { value, name } = event.target;
    setJobData({ ...jobData, [name]: value });
  }

  const handleAddressChange = event => {
    const { value, options: { selectedIndex } } = event.target;
    setSelectedAddress({ ...pickedAddress, selectedAddress: value, selectedIndex: selectedIndex });
  }

  const handleTypeChange = () => {
    setIsPrivate(!isPrivate);
    configureMessage(!isPrivate);
    setToggleIcon(!isPrivate);
  }

  const onSubmit = () => {
    if (!addresses.length) {
      setError('emptyAddress', 'notEmpty', 'Please, add an address before to follow');
    } else {
      const rooms = [
        { type: 'kitchen', duration: 60, number: kitchen },
        { type: 'room', duration: 15, number: room },
        { type: 'bathroom', duration: 30, number: bathroom },
        { type: 'terrace', duration: 15, number: terrace }
      ]

      const job = {
        address: addresses[selectedIndex]._id,
        city: addresses[selectedIndex].city,
        isPrivate,
        date: selectedDate,
        duration: 120,
        rooms,
        status: 'pending'
      }
      createJob(job)
        .then(res => {
          alert('Yuhuuu');
          update();
        })
        .catch(error => {
          error.response.status === 409
            ? setDateError(!isDateError)
            // ? setError('duplicated', 'alreadyExists', 'You already have a job for this date. Please, select another one')
            : console.log(error)
        })
    }
  }

  const minTime = () => {
    return selectedDate.getDay() === (new Date()).getDay()
      ? setHours(setMinutes(new Date(), (new Date()).getMinutes()), (new Date()).getHours())
      : setHours(setMinutes(new Date(), 0), 0)
  }

  const configureMessage = (isPrivate) => {
    let text = '';

    if (isPrivate) {
      const isName = cleaner
        ? ` for ${cleaner.name || cleaner.firstName}, 
      it can only by seen by the cleaner, but you can change this whenever you want`
        : '. You can send requests to any cleaner you want, but only them can see your offer';
      text = isName;
    } else {
      const isName = cleaner
        ? `, you will send a request to ${cleaner.name || cleaner.firstName}, but other cleaners can also see your offer`
        : ', any cleaner will be able to see your offer and contact you';
      text = isName;
    }
    setMessage(text);
  }

  return (
    <NewJobContainer>
      {isDateError
        ? <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(7, 0, 0, 0.77)', position: 'absolute', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '80%', height: '400px', backgroundColor: 'white', borderRadius: '10px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${bcg})`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}>
            <span onClick={() => setDateError(!isDateError)} style={{ position: 'absolute', width: '40px', height: '40px', top: '-15px', right: '-15px', backgroundColor: '#4672ed', color: 'white', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>x</span>
            <DateBookingError style={{ width: '70%', height: 'auto' }} />
            <p style={{ width: '80%', fontSize: '1rem', textAlign: 'center' }}>Oops! It seems you already have a job scheduled for the same time. Please, select another time or cancel your current job in your profile.</p>
          </div>{errors.duplicated && errors.duplicated.message}
        </div>
        : null
      }
      <NewJobTitle>Create a new job</NewJobTitle>
      <MessageBlock>
        <h3>This is a <span>{isPrivate ? 'private' : 'public'}</span> request{message}</h3>
        <PublicButtonContainer onClick={handleTypeChange} >
          <PrivatePublicIcon xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
            <path fill='white' d='M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z' />
            <path fill='white' d='M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z' />
            <Path isvisible={toggleIcon} d='M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z' />
            <Path isvisible={toggleIcon} d='M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z' />
          </PrivatePublicIcon>
          <PublicMessage>Make it {isPrivate ? 'public' : 'private'}</PublicMessage>
        </PublicButtonContainer>
      </MessageBlock>
      <NewJobSubtitle>What do you need</NewJobSubtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AddressLine>
          <HouseIcon style={{ width: '25px', marginRight: '10px' }} />
          <FormSelect width='200' name='selectedAddress' onChange={handleAddressChange}>
            {
              addresses && addresses.length > 0
                ? addresses.map((address, idx) => <option key={idx} value={address.name}>{address.name}</option>)
                : <option value={'Add your address'}>Add your address</option>
            }
          </FormSelect>
          <AddAddressIcon />
        </AddressLine>
        <AddressLine>
          <img src={Calendar} style={{ width: '25px', marginRight: '10px' }} alt="calendar" />
          <DatePicker
            selected={selectedDate}
            onChange={date => setJobData({ ...jobData, selectedDate: date })}
            showTimeSelect
            minDate={new Date()}
            minTime={minTime()}
            maxTime={setHours(setMinutes(new Date(), 55), 23)}
            timeFormat="HH:mm"
            timeIntervals={5}
            timeCaption="time"
            dateFormat="dd-MM-yyyy hh:mm"
            className="red-border"
            popperPlacement="bottom"
            popperModifiers={{
              flip: {
                enabled: false
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false
              }
            }}
          />
        </AddressLine>
        <RoomsLine>
          <span><KitchenIcon /> <FormInput onChange={handleChange} name='kitchen' register={register} width='30px' value={kitchen} /></span>
          <span><BedroomIcon /> <FormInput onChange={handleChange} name='room' register={register} width='30px' value={room} /></span>
          <span><BathroomIcon /> <FormInput onChange={handleChange} name='bathroom' register={register} width='30px' value={bathroom} /></span>
          <span><LivingroomIcon /> <FormInput onChange={handleChange} name='terrace' register={register} width='30px' value={terrace} /></span>
        </RoomsLine>
        <p>{errors.duplicated && errors.duplicated.message}</p>
        <p>{errors.emptyAddress && errors.emptyAddress.message}</p>
        <CustomButton width='100' type='submit'>create</CustomButton>
      </Form>
    </NewJobContainer >
  );
}

export default NewJobPage;