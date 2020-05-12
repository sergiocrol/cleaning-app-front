import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormSelect from '../../components/form-select/form-select.component';
import { ReactComponent as KitchenIcon } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BathroomIcon } from '../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as BedroomIcon } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Kids } from '../../assets/new-job/baby-icon.svg';
import { ReactComponent as Pets } from '../../assets/new-job/pet-icon.svg';

import {
  NewAddressPageContainer,
  NewAddressPageHeader,
  NewAddressPageForm,
  TwoFieldLine,
  RoomsLine,
  OthersLine
} from './new-address-page.styles';

const NewAddressPage = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    addressStreet: '',
    addressNumber: '',
    squareMeters: '',
    city: '',
    zipCode: ''
  })
  const { register, handleSubmit, errors, setError, getValues } = useForm();

  const handleInput = event => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const formInputOptions = (selected) => {
    const options = [];
    for (let i = 0; i <= 5; i++) {
      options.push(<option selected={selected === i} key={i} value={i}>{i}</option>)
    }
    return options;
  }

  return (
    <NewAddressPageContainer>
      <NewAddressPageHeader>
        <h2>Add your house</h2>
        <span>Add detailed info about your house, so that we can manage your services in the best way</span>
      </NewAddressPageHeader>
      <NewAddressPageForm>
        <FormInput
          name='name'
          onChange={handleInput}
          placeholder='My house'
          register={register}
          required='this field is required'
          error={errors.name && errors.name.message}
        />
        <FormInput
          name='addressStreet'
          onChange={handleInput}
          placeholder='Plaça Catalunya, 31'
          register={register}
          required='this field is required'
          error={errors.addressStreet && errors.addressStreet.message}
        />
        <TwoFieldLine>
          <FormInput
            name='addressNumber'
            onChange={handleInput}
            placeholder='2º 3'
            register={register}
            required='this field is required'
            error={errors.addressNumber && errors.addressNumber.message}
            width='187px'
          />
          <FormInput
            name='squareMeters'
            onChange={handleInput}
            placeholder='m2'
            register={register}
            required='this field is required'
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
            required='this field is required'
            error={errors.city && errors.city.message}
            width='187px'
          />
          <FormInput
            name='zipCode'
            onChange={handleInput}
            placeholder='08024'
            register={register}
            required='this field is required'
            error={errors.zipCode && errors.zipCode.message}
            width='80px'
          />
        </TwoFieldLine>
        <h2>rooms</h2>
        <RoomsLine>
          <span><KitchenIcon /> <FormSelect width='40' name='kitchen' register={register} >{formInputOptions()}</FormSelect></span>
          <span><BedroomIcon /> <FormSelect width='40' name='room' register={register} >{formInputOptions()}</FormSelect></span>
          <span><BathroomIcon /> <FormSelect width='40' name='bathroom' register={register} >{formInputOptions()}</FormSelect></span>
          <span><LivingroomIcon /> <FormSelect width='40' name='terrace' register={register} >{formInputOptions()}</FormSelect></span>
        </RoomsLine>
        <h2>others</h2>
        <OthersLine>
          <span><Kids /> <FormSelect width='40' name='kids' register={register} >{formInputOptions()}</FormSelect></span>
          <span><Pets /> <FormSelect width='40' name='pets' register={register} >{formInputOptions()}</FormSelect></span>
        </OthersLine>
        <CustomButton width='150' fontweight='lighter'>Add Address</CustomButton>
      </NewAddressPageForm>
    </NewAddressPageContainer>
  );
}

export default NewAddressPage;