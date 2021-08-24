import axios from '../utils/axios';

class AuthService {
  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/home/me')
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
  };

  setToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  getToken = () => localStorage.getItem('accessToken');

  isAuthenticated = () => {
    return !!this.getToken();
  };
}

const authService = new AuthService();

export default authService;
