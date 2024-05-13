import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import BellIcon from '../assets/svgs/bellIcon.svg';
import BasketIcon from '../assets/svgs/basketLarge.svg';

import Button from './Button';

const Empty = ({ icon = 'Bell', title, button }) => {
  const icons = {
    Bell: <BellIcon width={getRW(170)} height={getRH(170)} />,
    Basket: <BasketIcon width={getRW(100)} height={getRH(100)} />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {icons[icon]}
        <Text style={styles.innerContainerText}>{title}</Text>
      </View>
      <Button
        title={button.title}
        onPress={button.onPress}
        containerStyles={styles.button}
      />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(204),
  },
  innerContainerText: {
    fontSize: Fonts.size(34),
    fontWeight: '400',
    marginTop: getRH(24),
  },
  button: {
    marginHorizontal: getRW(102),
  },
});
