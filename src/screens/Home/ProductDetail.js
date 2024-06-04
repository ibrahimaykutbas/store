import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import Colors from '../../theme/Colors';
import { getRW, getRH } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import Header from '../../components/Header';
import Comment from '../../components/Comment';
import Modal from '../../components/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { changeFavoriteList, addToBasket } from '../../redux/user';

import { useNavigation } from '@react-navigation/native';

import PlusIcon from '../../assets/svgs/plus.svg';
import BackIcon from '../../assets/svgs/back.svg';
import MinusIcon from '../../assets/svgs/minus.svg';

import { showMessage } from 'react-native-flash-message';

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { product } = route.params;

  const favoriteList = useSelector(state => state.user.favoriteList);
  const isFavorite = favoriteList.find(p => p.id === product.id);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('Orange');
  const [quantity, setQuantity] = useState(1);

  const addToBag = () => {
    dispatch(addToBasket({ ...product, quantity }));
    showMessage({
      message: 'Successfully Added to Bag',
      type: 'success',
    });
  };

  const openModal = type => {
    setModalVisible(true);
    setModalType(type);
  };

  return (
    <>
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => openModal('size')}
            activeOpacity={0.8}>
            <Text
              style={{
                ...styles.amountText,
                marginHorizontal: 0,
              }}>
              Size
            </Text>

            <View style={styles.buttonRight}>
              <Text
                style={{
                  ...styles.amountText,
                  fontWeight: 'bold',
                }}>
                {selectedSize}
              </Text>
              <TouchableOpacity
                style={styles.transform}
                onPress={() => {}}
                activeOpacity={0.8}>
                <BackIcon width={getRW(18)} height={getRH(18)} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openModal('color')}
            activeOpacity={0.8}>
            <Text
              style={{
                ...styles.amountText,
                marginHorizontal: 0,
              }}>
              Color
            </Text>

            <View style={styles.buttonRight}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: selectedColor.toLowerCase() },
                ]}
              />
              <TouchableOpacity
                style={styles.transform}
                onPress={() => {}}
                activeOpacity={0.8}>
                <BackIcon width={getRW(18)} height={getRH(18)} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.button}>
            <Text
              style={{
                ...styles.amountText,
                marginHorizontal: 0,
              }}>
              Quantity
            </Text>

            <View style={styles.buttonRight}>
              <TouchableOpacity
                style={styles.amountButton}
                onPress={() => setQuantity(quantity + 1)}
                activeOpacity={0.8}>
                <PlusIcon width={getRW(14)} height={getRH(14)} />
              </TouchableOpacity>
              <Text style={styles.amountText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.amountButton}
                onPress={() => setQuantity(quantity - 1)}
                activeOpacity={0.8}
                disabled={quantity === 1}>
                <MinusIcon width={getRW(14)} height={getRH(14)} />
              </TouchableOpacity>
            </View>
          </View>

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
            {product?.rating?.rate} Ratings
          </Text>
          <Text
            style={{
              ...styles.description,
              marginTop: getRH(0),
            }}>
            213 Reviews
          </Text>

          <Comment />

          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: Colors.PURPLE,
            }}
            onPress={addToBag}
            activeOpacity={0.8}>
            <Text
              style={{
                ...styles.title,
                marginTop: 0,
                marginBottom: 0,
                color: Colors.WHITE,
              }}>
              ${(product.price * quantity).toFixed(2)}
            </Text>
            <Text style={styles.addToBag}>Add to Bag</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <Modal
        isVisible={modalVisible}
        type={modalType}
        onClose={() => setModalVisible(false)}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
      />
    </>
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
    height: getRH(60),
    backgroundColor: Colors.GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: getRW(100),
    marginTop: getRH(20),
    paddingHorizontal: getRW(24),
  },
  buttonRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transform: {
    transform: [{ rotate: '270deg' }],
  },
  dot: {
    width: getRW(16),
    height: getRW(16),
    backgroundColor: Colors.PURPLE,
    borderRadius: getRW(16),
    marginHorizontal: getRW(10),
  },
  amountButton: {
    width: getRW(40),
    height: getRW(40),
    borderRadius: getRW(40),
    backgroundColor: Colors.PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(16),
    fontWeight: '500',
    marginHorizontal: getRW(10),
  },
  addToBag: {
    color: Colors.WHITE,
    fontSize: Fonts.size(16),
    fontWeight: '400',
  },
});
