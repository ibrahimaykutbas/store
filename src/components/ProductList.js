import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import FavoriteIcon from '../assets/svgs/heart.svg';

const ProductList = ({ title, data }) => {
  // FlatList
  const RenderProduct = ({ item }) => {
    return (
      <Pressable style={styles.product} key={item?.id.toString()}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.text}>{item?.title}</Text>
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            ...styles.title,
            color: title == 'New In' ? Colors.PURPLE : Colors.BLACK,
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => console.log('See All')}>
          <Text
            style={{
              ...styles.title,
              fontWeight: '400',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={RenderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: getRH(25),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getRH(16),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(16),
    fontWeight: '700',
  },
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
    marginHorizontal: getRW(4),
  },
});
