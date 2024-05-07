import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';
import Fonts from '../theme/Fonts';

import Product from './Product';

const ProductList = ({ title, data, onPressSeeAll }) => {
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
        <TouchableOpacity onPress={onPressSeeAll}>
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
        renderItem={Product}
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
    marginHorizontal: getRW(8),
  },
});
