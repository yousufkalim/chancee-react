// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = 'http://localhost:5000';

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + '/api/v1/auth/login',
  PASSWORD_RECOVER: BASE_URL + '/api/v1/auth/reset',
  PROFILE: BASE_URL + '/api/v1/user/get-user-by-token',
  // User
  REGISTER_USER: BASE_URL + '/api/v1/user/create-deliveryman',
  USER_STEP1: BASE_URL + '/api/v1/user/update-personalinfo',
  USER_STEP2: BASE_URL + '/api/v1/user/vehicle-info',
  GET_OFFERS: BASE_URL + '/api/v1/user/offers',
  GET_INVITATIONS: BASE_URL + '/api/v1/user/invitations',
  ACCEPT_INVITE: BASE_URL + '/api/v1/user/accept',
  REJECT_INVITE: BASE_URL + '/api/v1/user/reject',
  RATE_OFFER: BASE_URL + '/api/v1/user/rate-offer',
  // Company
  REGISTER_COMPANY: BASE_URL + '/api/v1/company/create-company',
  COMPANY_STEP1: BASE_URL + '/api/v1/company/update-companyinfo',
  GET_COMPANY_OFFERS: BASE_URL + '/api/v1/all-offers',
  RATE_USER: BASE_URL + '/api/v1/company/rate-user',
  SEARCH: BASE_URL + '/api/v1/company/search',
  // Admin
  REGISTER_ADMIN: BASE_URL + '/api/v1/admin',
  DELETE_USER: BASE_URL + '/api/v1/admin/delete-user',
  GET_COMPANIES: BASE_URL + '/api/v1/admin/all-companies',
  GET_USERS: BASE_URL + '/api/v1/admin/all-users',
  GET_USER: BASE_URL + '/api/v1/admin/get-user',
  VERIFY_USER: BASE_URL + '/api/v1/admin/verify',
  REJECT_USER: BASE_URL + '/api/v1/admin/reject',
  BLOCK_USER: BASE_URL + '/api/v1/admin/block',
  UNBLOCK_USER: BASE_URL + '/api/v1/admin/unblock',
};

export default endpoints;
