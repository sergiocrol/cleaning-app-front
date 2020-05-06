import axios from 'axios';

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: 'http://localhost:4001',
      withCredentials: true
    });
  }

  cleanersByCity(city) {
    return this.user.get(`/cleaner/city/${city}`)
      .then(({ data }) => data)
  }

  jobs() {
    return this.user.get(`/job/`)
      .then(({ data }) => data)
  }

  createJob(job) {
    return this.user.post('/job/create', job)
      .then(({ data }) => data)
  }

  cleaner(cleanerId) {
    return this.user.get(`/cleaner/${cleanerId}`)
      .then(({ data }) => data)
  }

  cancelRequest(jobId, requestId) {
    return this.user.patch(`/request/cancel/${jobId}/user`, { requestId })
      .then(({ data }) => data)
  }

  sendRequest(jobId, cleanerId) {
    return this.user.patch(`/user/${jobId}/request`, { cleanerId })
      .then(({ data }) => data)
  }

}

const userService = new UserService();

export default userService;