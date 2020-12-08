// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = 'http://192.168.18.8:5000';

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + '/api/v1/auth/login',
  PASSWORD_RECOVER: BASE_URL + '/api/v1/auth/reset',
  PROFILE: BASE_URL + '/api/v1/user/get-user-by-token',
  // User
  REGISTER_USER: BASE_URL + '/api/v1/user/create-deliveryman',
  USER_STEP1: BASE_URL + '/api/v1/user/update-personalinfo',
  USER_STEP2: BASE_URL + '/api/v1/user/vehicle-info',
  UPDATE_PROFILE: BASE_URL + '/api/v1/user/update',
  GET_OFFERS: BASE_URL + '/api/v1/user/offers',
  GET_INVITATIONS: BASE_URL + '/api/v1/user/invites',
  ACCEPT_INVITE: BASE_URL + '/api/v1/user/accept',
  REJECT_INVITE: BASE_URL + '/api/v1/user/reject',
  CANCEL_OFFER: BASE_URL + '/api/v1/offer/cancel',
  RATE_COMPANY: BASE_URL + '/api/v1/user/rate-user',
  // Company
  REGISTER_COMPANY: BASE_URL + '/api/v1/company/create-company',
  COMPANY_STEP1: BASE_URL + '/api/v1/company/update-companyinfo',
  UPDATE_COMPANY_PROFILE: BASE_URL + '/api/v1/company/update',
  GET_COMPANY_OFFERS: BASE_URL + '/api/v1/company/all-offers',
  GET_COMPANY_USER: BASE_URL + '/api/v1/company/get-user',
  RATE_USER: BASE_URL + '/api/v1/company/rate-user',
  SEND_INVITE: BASE_URL + '/api/v1/offer/invite',
  SEARCH: BASE_URL + '/api/v1/offer/new-offer',
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
