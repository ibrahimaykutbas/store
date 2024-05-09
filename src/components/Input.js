import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';

import SearchIcon from '../assets/svgs/search.svg';
import CloseIcon from '../assets/svgs/close.svg';

const Input = ({
  value,
  onChangeText,
  placeholder,
  isSecure,
  propStyles,
  icon = false,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...propStyles,
      }}>
      <View style={styles.leftSide}>
        {icon && <SearchIcon width={getRW(20)} height={getRH(20)} />}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.BLACK}
          secureTextEntry={isSecure}
          autoCapitalize="none"
        />
      </View>
      {icon && value != '' ? (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <CloseIcon width={getRW(20)} height={getRH(20)} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

export const styles = StyleSheet.create({
  container: {
    height: getRH(56),
    flexDirection: 'row',
    borderRadius: getRW(4),
    backgroundColor: Colors.GREY,
    paddingHorizontal: getRW(12),
    marginBottom: getRH(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
  },
  input: {
    marginLeft: getRW(10),
  },
});
