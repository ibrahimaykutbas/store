import { createSlice } from '@reduxjs/toolkit';

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const name = storage.getString('name');

const favorites = storage.getString('favorites');
const favoritesParse = favorites && JSON.parse(favorites);

const initialState = {
  name: name || '',
  isLogged: false,

  favorites: favoritesParse || [],
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // İsim Değiştirme
    changeName: (state, action) => {
      state.name = action.payload;
      storage.set('name', state.name);
    },
  },
});

export const { changeName } = user.actions;

export default user.reducer;
