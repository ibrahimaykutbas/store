import { createSlice } from '@reduxjs/toolkit';

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const username = storage.getString('username');
const token = storage.getString('token');
const isLogged = storage.getBoolean('isLogged');

const favoriteListStorage = storage.getString('favoriteList');
const favoriteList = favoriteListStorage && JSON.parse(favoriteListStorage);

const basketStorage = storage.getString('basket');
const basket = basketStorage && JSON.parse(basketStorage);

const initialState = {
  username: username || '',
  token: token || '',
  isLogged: isLogged || false,
  favoriteList: favoriteList || [],
  basket: basket || [],
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
    logOut:(state) => {
      state.username = ''
      state.token = ''
      state.isLogged = false;

      storage.set('username', state.username);
      storage.set('token', state.token);
      storage.set('isLogged', state.isLogged);
    },
    changeFavoriteList: (state, action) => {
      const product = action.payload;
      const isFavorite = state.favoriteList.find(
        item => item.id === product.id,
      );

      if (isFavorite) {
        state.favoriteList = state.favoriteList.filter(
          item => item.id !== product.id,
        );
      } else {
        state.favoriteList.push(product);
      }

      return storage.set('favoriteList', JSON.stringify(state.favoriteList));
    },
    addToBasket: (state, action) => {
      const product = action.payload;
      const isExist = state.basket.find(item => item.id === product.id);
      if (isExist) {
        state.basket = state.basket.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        state.basket.push({ ...product, quantity: 1 });
      }

      return storage.set('basket', JSON.stringify(state.basket));
    },
    // Sepetten ürünü çıkartma veya azaltma işlemi eklenecek.
    
  },
});

export const { login, logOut, changeFavoriteList, addToBasket } = user.actions;

export default user.reducer;
