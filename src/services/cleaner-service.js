import axios from 'axios';

class CleanerService {
  constructor() {
    this.cleaner = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    });
  }

  removeRejectedJob(jobId) {
    return this.cleaner
      .patch(`/cleaner/${jobId}/rejected`)
      .then(({ data }) => data);
  }

  cancelJob(jobId, requestId) {
    return this.cleaner
      .patch(`/request/cancel/${jobId}/cleaner`, { requestId })
      .then(({ data }) => data);
  }

  confirmJob(jobId, requestId) {
    return this.cleaner
      .patch(`/cleaner/${jobId}/confirm`, { requestId })
      .then(({ data }) => data);
  }

  getNearJobs(location) {
    return this.cleaner.get(`/job/city/${location}`).then(({ data }) => data);
  }

  sendRequest(jobId) {
    return this.cleaner
      .patch(`/cleaner/${jobId}/request`)
      .then(({ data }) => data);
  }

  deleteAddress(addressId) {
    return this.cleaner
      .delete(`/address/delete/${addressId}`)
      .then(({ data }) => data);
  }

  createAddress(address) {
    return this.cleaner.post('/address/add', address).then(({ data }) => data);
  }

  editAddress(addressId, address) {
    return this.cleaner
      .put(`/address/edit/${addressId}`, address)
      .then(({ data }) => data);
  }

  editCleaner(picture) {
    return this.cleaner
      .put('/cleaner/edit', { picture })
      .then(({ data }) => data);
  }
}

const cleanerService = new CleanerService();

export default cleanerService;
