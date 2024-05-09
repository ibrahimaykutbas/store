import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

import Colors from '../../theme/Colors';
import { getRW, getRH } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import Header from '../../components/Header';

import { useSelector, useDispatch } from 'react-redux';
import { changeFavoriteList, addToBasket } from '../../redux/user';

import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { product } = route.params;

  const favoriteList = useSelector(state => state.user.favoriteList);
  const isFavorite = favoriteList.find(p => p.id === product.id);

  const addToBag = () => {
    dispatch(addToBasket(product));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPressBack={() => navigation.goBack()}
        onPressFavorite={() => dispatch(changeFavoriteList(product))}
        isFavorite={isFavorite}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text
          style={{
            ...styles.title,
            marginTop: 0,
            color: Colors.PURPLE,
          }}>
          ${product.price}
        </Text>

        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>

        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.title}>Shipping & Returns</Text>
        <Text
          style={{
            ...styles.description,
            marginTop: getRH(0),
          }}>
          Free standard shipping and free 60-day returnss
        </Text>
        <Text style={styles.title}>Reviews</Text>
        <Text
          style={{
            ...styles.title,
            marginTop: 0,
            fontSize: Fonts.size(24),
          }}>
          {product?.rating?.rate}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={addToBag}
          activeOpacity={0.8}>
          <Text
            style={{
              ...styles.title,
              marginTop: 0,
              marginBottom: 0,
              color: Colors.WHITE,
            }}>
            ${product.price}
          </Text>
          <Text style={styles.addToBag}>Add to Bag</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    marginHorizontal: getRW(24),
  },
  image: {
    width: getRW(300),
    height: getRH(300),
    alignSelf: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(16),
    fontWeight: '700',
    marginTop: getRH(24),
    marginBottom: getRH(15),
  },
  description: {
    color: Colors.BLACK,
    fontSize: Fonts.size(12),
    fontWeight: '400',
    lineHeight: getRH(20),
    marginVertical: getRH(26),
    opacity: 0.5,
  },
  button: {
    height: getRH(50),
    backgroundColor: Colors.PURPLE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: getRW(100),
    marginTop: getRH(20),
    paddingHorizontal: getRW(24),
  },
  addToBag: {
    color: Colors.WHITE,
    fontSize: Fonts.size(16),
    fontWeight: '400',
  },
});
