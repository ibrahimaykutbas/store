import client from './client';

const login = async (username, password) => {
  const params = {
    username,
    password,
  };

  return await client.post('/auth/login', params);
};

const register = async (firstname, lastname, email, username, password) => {

  const address = {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  };
  
  const phone = { phone: '1-570-236-7033' };

  const params = {
    email,
    username,
    password,
    name: {
      firstname,
      lastname,
    },
    address,
    phone,
  };

  return await client.post('/users', params);
};

export default {
  login,
  register,
};
