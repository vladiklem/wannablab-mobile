import { Alert } from 'react-native';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.info('email: ', re.test(String(email).toLowerCase()));

  return re.test(String(email).toLowerCase());
}

export const isValidEmailCheck = email => validateEmail(email);

export const isValidPasswordCheck = password => password.trim().length >= 8;
