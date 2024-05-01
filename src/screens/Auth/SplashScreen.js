import { SafeAreaView, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import Colors from '../../theme/Colors';
import { getRW, getRH } from '../../theme/Units';

import Logo from '../../assets/svgs/logo.svg';

import routes from '../../navigation/routes';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.LOGIN);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={getRW(175)} height={getRH(80)} />
    </SafeAreaView>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
