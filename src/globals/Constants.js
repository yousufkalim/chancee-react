// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = 'http://localhost:5000/api/v1/';

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + 'auth/login',
  PROFILE: BASE_URL + 'user/get-user-by-token',
  PASSWORD_RECOVER: BASE_URL + 'auth/reset',
  REGISTER_USER: BASE_URL + 'user/create-deliveryman',
  REGISTER_COMPANY: BASE_URL + 'user/create-company',
};

export default endpoints;
