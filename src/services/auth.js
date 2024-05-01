import client from './client';

const login = async (username, password) => {
  const params = {
    username,
    password,
  };

  return await client.post('/auth/login', params);
};


export default {
  login,
};
