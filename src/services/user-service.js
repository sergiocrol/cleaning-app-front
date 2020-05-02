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

  jobs(_id) {
    return this.user.get(`/job/`)
      .then(({ data }) => data)
  }

  createJob(job) {
    return this.user.post('/job/create', job)
      .then(({ data }) => data)
  }

}

const userService = new UserService();

export default userService;