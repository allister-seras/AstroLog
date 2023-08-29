import decode from 'jwt-decode';

class AuthService {
    // returns user info if logged in
  getProfile() {
    return decode(this.getToken());
  }

  // checks for token and if user is logged in
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // checks if token expiration date is passed the current time and removes if so
  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  // grabs token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // sets token to local storage and sends user to home 
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // removes token from local storage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
