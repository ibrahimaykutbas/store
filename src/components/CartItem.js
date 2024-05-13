import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import PlusIcon from '../assets/svgs/plus.svg';
import MinusIcon from '../assets/svgs/minus.svg';

import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../redux/user';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />

        <View>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

          <View style={styles.choosenLine}>
            <Text style={styles.choosenText}>
              Size - <Text style={{ fontWeight: 'bold' }}>M</Text>
            </Text>
            <Text style={styles.choosenText}>
              Color - <Text style={{ fontWeight: 'bold' }}>Lemon</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerRight}>
        <Text style={styles.price}>
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
        <View style={styles.smallButtons}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => dispatch(addToBasket(item))}
            activeOpacity={0.8}>
            <PlusIcon width={getRW(14)} height={getRH(14)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => dispatch(removeFromBasket(item))}
            activeOpacity={0.8}>
            <MinusIcon width={getRW(14)} height={getRH(14)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREY,
    height: getRH(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getRH(8),
    borderRadius: getRW(8),
    padding: getRH(16),
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: getRW(64),
    height: getRH(64),
    marginLeft: -getRW(12),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '400',
    width: getRW(170),
  },
  choosenLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getRH(10),
  },
  choosenText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '400',
    marginRight: getRW(8),
  },
  containerRight: {
    alignItems: 'flex-end',
  },
  smallButtons: {
    width: getRW(54),
    flexDirection: 'row',
    marginTop: getRH(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallButton: {
    width: getRW(24),
    height: getRW(24),
    borderRadius: getRW(40),
    backgroundColor: Colors.PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: Fonts.size(16),
    color: Colors.BLACK,
    fontWeight: '700',
  },
});
