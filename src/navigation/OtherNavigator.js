import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../screens/Home/Categories';
import Products from '../screens/Home/Products';
import ProductDetail from '../screens/Home/ProductDetail';

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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
