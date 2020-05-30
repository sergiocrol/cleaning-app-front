import axios from 'axios';

class CleanerService {
  constructor() {
    this.cleaner = axios.create({
      baseURL: 'http://localhost:4001',
      withCredentials: true
    });
  }

  removeRejectedJob(jobId) {
    return this.cleaner.patch(`/cleaner/${jobId}/rejected`)
      .then(({ data }) => data)
  }

  cancelJob(jobId, requestId) {
    return this.cleaner.patch(`/request/cancel/${jobId}/cleaner`, { requestId })
      .then(({ data }) => data)
  }

  confirmJob(jobId, requestId) {
    return this.cleaner.patch(`/cleaner/${jobId}/confirm`, { requestId })
      .then(({ data }) => data)
  }

  getNearJobs(location) {
    return this.cleaner.get(`/job/city/${location}`)
      .then(({ data }) => data)
  }

  sendRequest(jobId) {
    return this.cleaner.patch(`/cleaner/${jobId}/request`)
      .then(({ data }) => data)
  }

}

const cleanerService = new CleanerService();

export default cleanerService;