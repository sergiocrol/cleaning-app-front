/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

import FormInput from '../../components/form-input/form-input.component';

import { AuthContext } from '../../contexts/auth-context';
import { UserContext } from '../../contexts/user-context';

const currentDate = () => {
  let currentDate = new Date();
  const hour = currentDate.getHours() + 1;
  const minute = currentDate.getMinutes();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
  currentDate = yyyy + '-' + mm + '-' + dd;
  return [currentDate, hour, minute];
}

const NewJobPage = (props) => {
  const { register, handleSubmit, errors, setError } = useForm();
  const { user: { addresses, jobs } } = useContext(AuthContext);
  const { createJob } = useContext(UserContext);

  const [pickedAddress, setSelectedAddress] = useState({ selectedAddress: null, selectedIndex: 0 });
  const [isPrivate, setIsPrivate] = useState(true);
  const [jobData, setJobData] = useState({
    selectedDate: currentDate()[0],
    selectedHour: currentDate()[1],
    selectedMinute: currentDate()[2],
    room: 0,
    kitchen: 0,
    bathroom: 0,
    terrace: 0
  });

  const { selectedDate, selectedHour, selectedMinute, kitchen, room, bathroom, terrace } = jobData;
  const { selectedAddress, selectedIndex } = pickedAddress;

  useEffect(() => {
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
    console.log(!isPrivate);
    setIsPrivate(!isPrivate);
  }

  const onSubmit = () => {
    const [year, month, day] = selectedDate.split('-');
    const saveDate = new Date(year, month - 1, day, selectedHour, selectedMinute);
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
      date: saveDate,
      duration: 120,
      rooms,
      status: 'pending'
    }
    createJob(job)
      .then(res => {
        alert('Yuhuuu');
      })
      .catch(error => {
        error.response.status === 409
          ? setError('duplicated', 'alreadyExists', 'You already have a job for this date. Please, select another one')
          : console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name='selectedAddress' onChange={handleAddressChange}>
          {
            addresses && addresses.length > 0
              ? addresses.map((address, idx) => <option key={idx} value={address.name}>{address.name}</option>)
              : <option value={'Add your address'}>{selectedAddress}</option>
          }
        </select>
        <FormInput
          register={register}
          type='date'
          name='selectedDate'
          defaultValue={selectedDate}
          onChange={handleChange}
          validate={
            value => {
              return (
                value >= currentDate()[0] || 'date cannot be before today'
              )
            }
          }
          error={errors.selectedDate && errors.selectedDate.message}
        />
        <FormInput
          onChange={handleChange}
          name='selectedHour'
          register={register}
          width='30px'
          defaultValue={selectedHour}
        /> :
        <FormInput
          onChange={handleChange}
          name='selectedMinute'
          register={register}
          width='30px'
          defaultValue={selectedMinute}
        />
        <div>
          <span>kitchen <FormInput onChange={handleChange} name='kitchen' register={register} width='30px' value={kitchen} /></span>
          <span>room <FormInput onChange={handleChange} name='room' register={register} width='30px' value={room} /></span>
          <span>bathroom <FormInput onChange={handleChange} name='bathroom' register={register} width='30px' value={bathroom} /></span>
          <span>terrace <FormInput onChange={handleChange} name='terrace' register={register} width='30px' value={terrace} /></span>
        </div>
        <div>
          <label>
            <input type="radio" name="isPrivate" onChange={handleTypeChange} checked={isPrivate} />
            <span>PRIVATE</span>
          </label>

          <label>
            <input type="radio" name="isPrivate" onChange={handleTypeChange} checked={!isPrivate} />
            <span>PUBLIC</span>
          </label>
        </div>
        <p>{errors.duplicated && errors.duplicated.message}</p>
        <button type='submit'>click me</button>
      </form>
    </div>
  );
}

export default NewJobPage;