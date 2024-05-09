import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import UserIcon from '../assets/svgs/user';
import BackIcon from '../assets/svgs/back';
import BasketIcon from '../assets/svgs/basket';
import FavoriteIcon from '../assets/svgs/heart';

import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

const Header = ({
  isHome = false,
  onPressBack,
  onPressBasket,
  onPressFavorite,
  isFavorite,
  title,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.container,
        justifyContent:
          !onPressBack && !onPressBasket ? 'center' : 'space-between',
      }}>
      {isHome ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate(routes.PROFILE)}>
            <UserIcon width={getRW(40)} height={getRH(40)} />
          </TouchableOpacity>
          <Text style={styles.title}>Men</Text>
          <TouchableOpacity
            style={{
              ...styles.backButton,
              backgroundColor: Colors.PURPLE,
            }}
            onPress={onPressBasket}>
            <BasketIcon width={getRW(25)} height={getRH(25)} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {onPressBack && (
            <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
              <BackIcon width={getRW(8)} height={getRH(22)} />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
          {onPressFavorite && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onPressFavorite}>
              <FavoriteIcon
                width={getRW(25)}
                height={getRH(25)}
                fill={isFavorite ? Colors.PURPLE : 'none'}
                stroke={Colors.PURPLE}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getRH(30),
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
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(20),
    fontWeight: '700',
  },
});
