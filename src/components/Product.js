import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import FavoriteIcon from '../assets/svgs/heart.svg';

const Product = ({ item, propStyle }) => {
  return (
    <Pressable
      style={{
        ...styles.product,
        ...propStyle,
      }}
      key={item?.id.toString()}>
      <Image
        source={{
          uri: item?.image,
        }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text} numberOfLines={2}>
        {item?.title}
      </Text>
      <Text
        style={{
          ...styles.text,
          fontWeight: '700',
          fontSize: Fonts.size(14),
        }}>
        ${item?.price}
      </Text>

      <View style={styles.favoriteIcon}>
        <FavoriteIcon width={getRW(25)} height={getRH(25)} />
        {/*  Ürün favori ise fill değeri black olacak */}
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    width: getRW(159),
    height: getRH(295),
    backgroundColor: Colors.GREY,
    marginRight: getRW(12),
    borderRadius: getRW(8),
  },
  favoriteIcon: {
    position: 'absolute',
    top: getRH(11),
    right: getRW(13),
  },
  image: {
    width: '100%',
    height: getRH(220),
  },
  text: {
    color: Colors.BLACK,
    fontSize: Fonts.size(12),
    fontWeight: '400',
    marginTop: getRH(8),
    marginHorizontal: getRW(8),
  },
});
