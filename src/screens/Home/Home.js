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

import CategoriesList from '../../components/CategoriesList';
import ProductList from '../../components/ProductList';
import Loader from '../../components/Loader';

import useApi from '../../hooks/useApi';
import productsApi from '../../services/products';

const Home = ({ navigation }) => {
  const getProductsApi = useApi(productsApi.getProducts);
  const getCategoriesApi = useApi(productsApi.getCategories);

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

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={getCategoriesApi.loading || getProductsApi.loading} />
      <Header
        isHome
        onPressBasket={() =>
          navigation.navigate(routes.OTHER_NAVIGATOR, {
            screen: routes.BASKET,
          })
        }
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <SearchBar />
        <CategoriesList data={getCategoriesApi.data} />
        <ProductList
          title="Top Selling"
          data={getProductsApi?.data.slice(0, 4)}
          onPressSeeAll={() =>
            navigation.navigate(routes.OTHER_NAVIGATOR, {
              screen: routes.PRODUCTS,
              params: {
                title: 'Top Selling',
                products: getProductsApi?.data,
              },
            })
          }
        />

        <ProductList
          title="New In"
          data={getProductsApi?.data.slice(-4)}
          onPressSeeAll={() =>
            navigation.navigate(routes.OTHER_NAVIGATOR, {
              screen: routes.PRODUCTS,
              params: {
                title: 'New In',
                products: getProductsApi?.data.reverse(),
              },
            })
          }
        />
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
