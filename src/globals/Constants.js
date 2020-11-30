// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = 'http://localhost:5000';

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + '/api/v1/auth/login',
  PROFILE: BASE_URL + '/api/v1/user/get-user-by-token',
  PASSWORD_RECOVER: BASE_URL + '/api/v1/auth/reset',
  // User
  REGISTER_USER: BASE_URL + '/api/v1/user/create-deliveryman',
  USER_STEP1: BASE_URL + '/api/v1/user/update-personalinfo',
  USER_STEP2: BASE_URL + '/api/v1/user/vehicle-info',
  // Company
  REGISTER_COMPANY: BASE_URL + '/api/v1/user/create-company',
  COMPANY_STEP1: BASE_URL + '/api/v1/company/update-companyinfo',
};

export default endpoints;
