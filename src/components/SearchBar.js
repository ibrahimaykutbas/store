import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import SearchIcon from '../assets/svgs/search.svg';
import BackIcon from '../assets/svgs/back';
import CloseIcon from '../assets/svgs/close';

import Input from './Input';

const SearchBar = ({ onPressBack }) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      {onPressBack ? (
        <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
          <BackIcon width={getRW(8)} height={getRH(22)} />
        </TouchableOpacity>
      ) : null}
      <View>
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          propStyles={{
            ...styles.input,
            width: onPressBack ? getRW(290) : getRW(340),
          }}
          icon
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getRH(24),
    marginHorizontal: getRW(24),
  },
  backButton: {
    width: getRH(45),
    height: getRH(45),
    backgroundColor: Colors.GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getRH(40),
  },
  input: {
    width: getRW(290),
    height: getRH(50),
    borderRadius: getRW(100),
    marginBottom: 0,
  },
});
