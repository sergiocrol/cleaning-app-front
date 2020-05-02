import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4001',
      withCredentials: true
    });
  }

  me() {
    return this.auth.get('/auth/me')
      .then(response => response.data)
  }

  login(user) {
    const { email, password } = user;
    return this.auth.post('/auth/login', { email, password })
      .then(({ data }) => data);
  }

  signup(user) {
    const { email, password, firstName, lastName, fee, city, isCleaner } = user;
    return this.auth.post('/auth/signup', { email, password, firstName, lastName, fee, city, isCleaner })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

}

const authService = new AuthService();

export default authService;