import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import BackIcon from '../../assets/svgs/back';

import { useNavigation } from '@react-navigation/native';

import routes from '../../navigation/routes';
import productsApi from '../../services/products';
import SearchBar from '../../components/SearchBar';

const Categories = ({ route }) => {
  const getCategoriesApi = useApi(productsApi.getCategories);

  const navigation = useNavigation();

  const getCategories = async () => {
    try {
      await getCategoriesApi.request();
    } catch (error) {
      console.log('getCategories Error: ', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const images = {
    electronics: require('../../assets/images/electronics.jpg'),
    jewelery: require('../../assets/images/jelewery.jpg'),
    "men's clothing": require('../../assets/images/menClothing.jpg'),
    "women's clothing": require('../../assets/images/womenClothing.jpg'),
  };

  const RenderCategories = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() => navigation.navigate(routes.PRODUCTS, { category: item })}
        activeOpacity={0.8}>
        <Image source={images[item]} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar onPressBack={true} />
        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackIcon width={getRW(8)} height={getRH(22)} />
        </TouchableOpacity> */}

        <Text style={styles.title}>Shop by Categories</Text>
      </View>

      <FlatList data={getCategoriesApi.data} renderItem={RenderCategories} />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
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
    fontSize: Fonts.size(24),
    color: Colors.BLACK,
    fontWeight: '700',
    marginTop: getRH(16),
    marginBottom: getRH(14),
  },
  categoryCard: {
    height: getRH(70),
    backgroundColor: Colors.GREY,
    flexDirection: 'row',
    marginHorizontal: getRW(24),
    marginBottom: getRH(8),
    borderRadius: getRH(8),
    alignItems: 'center',
  },
  categoryImage: {
    width: getRW(40),
    height: getRW(40),
    borderRadius: getRH(40),
    marginLeft: getRW(12),
    marginRight: getRW(16),
  },
  categoryTitle: {
    color: Colors.BLACK,
    fontWeight: '400',
    fontSize: Fonts.size(16),
    textTransform: 'capitalize',
  },
});
