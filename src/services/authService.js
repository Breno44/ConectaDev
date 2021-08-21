import axios from '../utils/axios';

class AuthService {
  signIn(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/home/login', { email, password })
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const authService = new AuthService();

export default authService;
