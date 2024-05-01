import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import AppleIcon from '../assets/svgs/apple.svg';
import GoogleIcon from '../assets/svgs/google.svg';
import FacebookIcon from '../assets/svgs/facebook.svg';

const Button = ({
  title,
  onPress,
  containerStyles,
  titleStyles,
  disabled,
  icon,
  loading,
}) => {
  const renderIcon = {
    apple: <AppleIcon width={getRW(24)} height={getRW(24)} />,
    google: <GoogleIcon width={getRW(24)} height={getRW(24)} />,
    facebook: <FacebookIcon width={getRW(24)} height={getRW(24)} />,
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyles,
      }}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      {icon && renderIcon[icon]}
      <Text
        style={{
          ...styles.title,
          ...titleStyles,
        }}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicator
          color={Colors.WHITE}
          style={{ marginLeft: getRW(5) }}
        />
      )}
      {icon && <View />}
    </TouchableOpacity>
  );
};

export default Button;

export const styles = StyleSheet.create({
  container: {
    height: getRH(56),
    backgroundColor: Colors.PURPLE,
    flexDirection: 'row',
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
