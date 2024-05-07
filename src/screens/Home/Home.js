import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import Colors from '../../theme/Colors';
import { getRW, getRH } from '../../theme/Units';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import routes from '../../navigation/routes';

import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

import useApi from '../../hooks/useApi';
import productApi from '../../services/products';

const Home = ({ navigation }) => {
  const getProductsApi = useApi(productApi.getProducts);

  return (
    <SafeAreaView style={styles.container}>
      <Header isHome onPressBasket={() => console.log('Basket')} />
      <SearchBar />
      <ScrollView style={styles.content}>
        <Categories />
        <ProductList title="Top Selling" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    marginHorizontal: getRW(24),
  },
});
