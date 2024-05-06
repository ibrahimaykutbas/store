import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';

const Input = ({ value, onChangeText, placeholder, isSecure }) => {
  return (
    <TextInput
      style={styles.container}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.DARK_GREY}
      secureTextEntry={isSecure}
      autoCapitalize="none"
    />
  );
};

export default Input;

export const styles = StyleSheet.create({
  container: {
    height: getRH(56),
    borderRadius: getRW(4),
    backgroundColor: Colors.GREY,
    paddingHorizontal: getRW(12),
    marginBottom: getRH(16),
  },
});
