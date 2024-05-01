import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

const Button = ({ title, onPress, containerStyles, titleStyles }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyles,
      }}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={{
          ...styles.title,
          ...titleStyles,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

export const styles = StyleSheet.create({
  container: {
    height: getRH(56),
    backgroundColor: Colors.PURPLE,
    borderRadius: getRW(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(24),
  },
  title: {
    color: Colors.WHITE,
    fontSize: Fonts.size(16),
    fontWeight: '500',
  },
});
