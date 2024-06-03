import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../screens/Home/Categories';
import Products from '../screens/Home/Products';
import ProductDetail from '../screens/Home/ProductDetail';
import OrderDetail from '../screens/Orders/OrderDetail';
import Address from '../screens/Profile/Address';
import Payment from '../screens/Profile/Payment';
import Wishlist from '../screens/Profile/Wishlist';
import Basket from '../screens/Home/Basket';
import AddAddress from '../screens/Profile/AddAddress';
import AddPayment from '../screens/Profile/AddPayment';
import Favorites from '../screens/Profile/Favorites';
import CheckOut from '../screens/Home/CheckOut';


import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.CATEGORIES} component={Categories} />
      <Stack.Screen name={routes.PRODUCTS} component={Products} />
      <Stack.Screen name={routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={routes.ORDER_DETAIL} component={OrderDetail} />
      <Stack.Screen name={routes.ADDRESS} component={Address} />
      <Stack.Screen name={routes.PAYMENT} component={Payment} />
      <Stack.Screen name={routes.WISHLIST} component={Wishlist} />
      <Stack.Screen name={routes.BASKET} component={Basket} />
      <Stack.Screen name={routes.ADD_ADDRESS} component={AddAddress} />
      <Stack.Screen name={routes.ADD_PAYMENT} component={AddPayment} />
      <Stack.Screen name={routes.FAVORITES} component={Favorites} />
      <Stack.Screen name={routes.CHECKOUT} component={CheckOut} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
