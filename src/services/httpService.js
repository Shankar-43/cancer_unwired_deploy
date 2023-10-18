import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  //   headers: { 'Token': 'foobar' },  token can be used here for jwt auth
});

http.interceptors.response.use(null, error => {
  // null is for the responses from 200-300 and error is for 400-500 errors
  if (error.message.localeCompare('Network Error') && !error.response) {
    console.log('Oops!', 'Network error occurred', 'Ok'); // when the server is completely down
    // swal.showAlert('Oops!', 'Network error occurred', 'Ok', alertType.NET_ERROR);
    return;
  }
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (expectedError) {
    let errorMessage = 'An Unexpected error occurred';
    // let errorType = '';
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage = "It's a bad request";
        // errorType = alertType.ERROR;
      } else if (error.response.status === 401) {
        errorMessage = 'You are not authorized. Please login again';
        // errorType = alertType.UNAUTH_ERROR;
      } else if (error.response.status === 403) {
        errorMessage = 'Access is forbidden';
        // errorType = alertType.FORBID_ERROR;
      } else if (error.response.status === 404) {
        errorMessage = 'Not found';
        // errorType = alertType.SERVER_ERROR;
      } else if (error.response.status === 500) {
        errorMessage = 'Internal server error occurred.';
        // errorType = alertType.SERVER_ERROR;
      }
    } else {
      errorMessage = 'Network error occurred.';
      //   errorType = alertType.SERVER_ERROR;
    }
    console.log(errorMessage);
    // swal.showAlert('Oops!', errorMessage, 'Ok', errorType);
    // eslint-disable-next-line consistent-return
    return Promise.reject(error);
  }
});
export default http;
