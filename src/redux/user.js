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

const addressesStorage = storage.getString('addresses');
const addresses = addressesStorage && JSON.parse(addressesStorage);

const paymentsStorage = storage.getString('payments');
const payments = paymentsStorage && JSON.parse(paymentsStorage);

const initialState = {
  username: username || '',
  token: token || '',
  isLogged: isLogged || false,
  favoriteList: favoriteList || [],
  basket: basket || [],
  addresses: addresses || [],
  payments: payments || [],
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

      storage.set('username', state.username);
      storage.set('token', state.token);
      storage.set('isLogged', state.isLogged);
    },
    logOut: state => {
      state.username = '';
      state.token = '';
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
    removeFromBasket: (state, action) => {
      const product = action.payload;
      const isExist = state.basket.find(item => item.id === product.id);
      if (isExist && isExist.quantity > 1) {
        state.basket = state.basket.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        const newBasket = state.basket.filter(item => item.id !== product.id);
        state.basket = newBasket;
      }

      return storage.set('basket', JSON.stringify(state.basket));
    },
    clearBasket: state => {
      state.basket = [];
      return storage.set('basket', JSON.stringify(state.basket));
    },
    addAddress: (state, action) => {
      const address = action.payload;
      const isExist = state.addresses.find(item => item.id === address.id);

      if (isExist) {
        state.addresses = state.addresses.map(item =>
          item.id === address.id ? address : item,
        );
      } else {
        state.addresses.push(address);
      }

      return storage.set('addresses', JSON.stringify(state.addresses));
    },
    removeAddress: (state, action) => {
      const id = action.payload;
      const newAddresses = state.addresses.filter(item => item.id !== id);
      state.addresses = newAddresses;

      return storage.set('addresses', JSON.stringify(state.addresses));
    },
    /*  */
    addPayment: (state, action) => {
      const payments = action.payload;
      const isExist = state.payments.find(item => item.id == payments.id);

      if (isExist) {
        state.payments = state.payments.map(item =>
          item.id == payments.id ? payments : item,
        );
      } else {
        state.payments.push(payments);
      }

      return storage.set('payments', JSON.stringify(state.payments));
    },
    removePayment: (state, action) => {
      const id = action.payload;
      const newPayments = state.payments.filter(item => item.id !== id);
      state.payments = newPayments;

      return storage.set('payments', JSON.stringify(state.payments));
    },
  },
});

export const {
  login,
  logOut,
  changeFavoriteList,
  addToBasket,
  removeFromBasket,
  clearBasket,
  addAddress,
  removeAddress,
  addPayment,
  removePayment,
} = user.actions;

export default user.reducer;
