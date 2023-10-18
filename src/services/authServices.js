import { PATIENT_LOGIN, PATIENT_REGISTER } from 'utils/apiUrls';
import http from './httpService';

export const login = async data => {
  const result = http
    .post(PATIENT_LOGIN, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      //   swal.showAlert('Oops!', 'An error occured', 'Ok', alertType.SERVER_ERROR);/
    });

  return result;
};

export const register = async data => {
  const result = http
    .post(PATIENT_REGISTER, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
      //   swal.showAlert('Oops!', 'An error occured', 'Ok', alertType.SERVER_ERROR);/
    });

  return result;
};
