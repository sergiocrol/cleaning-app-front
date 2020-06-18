import axios from 'axios';

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    });
  }

  cleanersByCity(city) {
    return this.user.get(`/cleaner/city/${city}`).then(({ data }) => data);
  }

  jobs() {
    return this.user.get(`/job/`).then(({ data }) => data);
  }

  createJob(job) {
    return this.user.post('/job/create', job).then(({ data }) => data);
  }

  cleaner(cleanerId) {
    return this.user.get(`/cleaner/${cleanerId}`).then(({ data }) => data);
  }

  cancelRequest(jobId, requestId) {
    return this.user
      .patch(`/request/cancel/${jobId}/user`, { requestId })
      .then(({ data }) => data);
  }

  sendRequest(jobId, cleanerId) {
    return this.user
      .patch(`/user/${jobId}/request`, { cleanerId })
      .then(({ data }) => data);
  }

  confirmRequest(jobId, requestId) {
    return this.user
      .patch(`/user/${jobId}/confirm`, { requestId })
      .then(({ data }) => data);
  }

  createAddress(address) {
    return this.user.post('/address/add', address).then(({ data }) => data);
  }

  editAddress(addressId, address) {
    return this.user
      .put(`/address/edit/${addressId}`, address)
      .then(({ data }) => data);
  }

  deleteAddress(addressId) {
    return this.user
      .delete(`/address/delete/${addressId}`)
      .then(({ data }) => data);
  }

  editUser(picture) {
    return this.user.put('/user/edit', { picture }).then(({ data }) => data);
  }
}

const userService = new UserService();

export default userService;
