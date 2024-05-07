import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  LogBox,
} from 'react-native';
import React, { useEffect } from 'react';

import Colors from '../../theme/Colors';
import { getRW, getRH } from '../../theme/Units';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import routes from '../../navigation/routes';

import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

import useApi from '../../hooks/useApi';
import productApi from '../../services/products';

const Home = () => {
  const getProductsApi = useApi(productApi.getProducts);
  const getCategoriesApi = useApi(productApi.getCategories);

  const getCategories = async () => {
    try {
      await getCategoriesApi.request();
    } catch (error) {
      console.log('getCategories Error: ', error);
    }
  };

  const getProducts = async () => {
    try {
      await getProductsApi.request();
    } catch (error) {
      console.log('getProducts Error: ', error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // Scrollview içerisinde FlatList kullanıldığında oluşan hatayı engellemek için.
  }, []);

  if (getProductsApi.loading || getCategoriesApi.loading)
    return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Header isHome onPressBasket={() => console.log('Basket')} />
      <SearchBar />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Categories data={getCategoriesApi.data} />
        <ProductList
          title="Top Selling"
          data={getProductsApi?.data.slice(0, 4)}
        />

        <ProductList title="New In" data={getProductsApi?.data.slice(-4)} />
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
