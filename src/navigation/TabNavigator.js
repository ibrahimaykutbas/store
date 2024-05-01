import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getRW } from '../theme/Units';
import Colors from '../theme/Colors';

import routes from './routes';

import Home from '../screens/Home/Home';
import Notification from '../screens/Notifications/Notifications';
import Orders from '../screens/Orders/Orders';
import Profile from '../screens/Profile/Profile';

import HomeIcon from '../assets/svgs/home.svg';
import HomeFillIcon from '../assets/svgs/home-fill.svg';
import NotificationsIcon from '../assets/svgs/notifications.svg';
import NotificationsFillIcon from '../assets/svgs/notifications-fill.svg';
import OrdersIcon from '../assets/svgs/orders.svg';
import OrdersFillIcon from '../assets/svgs/orders-fill.svg';
import ProfileIcon from '../assets/svgs/profile.svg';
import ProfileFillIcon from '../assets/svgs/profile-fill.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const iconList = {
    home: HomeIcon,
    homeFill: HomeFillIcon,
    notifications: NotificationsIcon,
    notificationsFill: NotificationsFillIcon,
    orders: OrdersIcon,
    ordersFill: OrdersFillIcon,
    profile: ProfileIcon,
    profileFill: ProfileFillIcon,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderColor: Colors.WHITE,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let Icon;

          if (route.name === routes.HOME) {
            Icon = focused ? iconList?.homeFill : iconList?.home;
          } else if (route.name === routes.NOTIFICATION) {
            Icon = focused
              ? iconList?.notificationsFill
              : iconList?.notifications;
          } else if (route.name === routes.ORDERS) {
            Icon = focused ? iconList?.ordersFill : iconList?.orders;
          } else if (route.name === routes.PROFILE) {
            Icon = focused ? iconList?.profileFill : iconList?.profile;
          }

          return <Icon width={getRW(20)} height={getRW(20)} />;
        },
      })}>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.NOTIFICATION} component={Notification} />
      <Tab.Screen name={routes.ORDERS} component={Orders} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
