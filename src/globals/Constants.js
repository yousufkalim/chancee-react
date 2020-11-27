// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = 'http://localhost:5000/api/v1/';

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + 'auth/login',
  PROFILE: BASE_URL + 'user/get-user-by-token',
  PASSWORD_RECOVER: BASE_URL + 'auth/reset',
  // User
  REGISTER_USER: BASE_URL + 'user/create-deliveryman',
  USER_STEP1: BASE_URL + 'user/update-personalinfo',
  USER_STEP2: BASE_URL + 'user/vehicle-info',
  // Company
  REGISTER_COMPANY: BASE_URL + 'user/create-company',
  COMPANY_STEP1: BASE_URL + 'company/update-companyinfo',
};

export default endpoints;
