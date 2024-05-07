import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRH, getRW } from '../theme/Units';
import Fonts from '../theme/Fonts';

const Categories = ({ data }) => {
  const images = {
    electronics: require('../assets/images/electronics.jpg'),
    jewelery: require('../assets/images/jelewery.jpg'),
    "men's clothing": require('../assets/images/menClothing.jpg'),
    "women's clothing": require('../assets/images/womenClothing.jpg'),
  };

  RenderCategories = ({ item }) => {
    return (
      <Pressable style={styles.renderContainer}>
        <Image style={styles.image} source={images[item]} />
        <Text style={styles.renderText}>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.categoriesText}>Categories</Text>
        <TouchableOpacity onPress={()=>console.log('Category page')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={RenderCategories} horizontal />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: getRH(25),
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriesText: {
    fontSize: Fonts.size(17),
    fontWeight: '700',
    color: Colors.BLACK,
  },
  seeAllText: {
    fontSize: Fonts.size(17),
    fontWeight: '400',
    color: Colors.BLACK,
  },
  renderContainer: {
    height: getRH(97),
    width: getRH(80),
    marginRight: getRH(16),
    marginTop: getRH(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: getRW(56),
    height: getRH(56),
    borderRadius: getRH(56),
  },
  renderText: {
    fontSize: Fonts.size(14),
    fontWeight: '400',
    textTransform: 'capitalize',
    marginVertical: getRW(10),
  },
});
