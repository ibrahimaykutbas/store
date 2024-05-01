import { View, Text } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from './routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.NOTIFICATION} component={Notification} />
      <Tab.Screen name={routes.ORDER} component={Order} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
