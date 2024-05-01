import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

import routes from './routes';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.AUTH_NAVIGATOR} component={AuthNavigator} />
        {/* <Stack.Screen name={routes.TAB_NAVIGATOR} component={TabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
