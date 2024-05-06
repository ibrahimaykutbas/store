import { createSlice } from '@reduxjs/toolkit';

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const username = storage.getString('username');
const token = storage.getString('token');
const isLogged = storage.getBoolean('isLogged');

const initialState = {
  username: username || '',
  token: token || '',
  isLogged: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Giriş işlemi başarılı olduğunda tetiklenir.
    login: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLogged = true;

      storage.set('username', action.payload.username);
      storage.set('token', action.payload.token);
      storage.set('isLogged', true);
    },
  },
});

export const { login } = user.actions;

export default user.reducer;
