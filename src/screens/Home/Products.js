import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import BackIcon from '../../assets/svgs/back';

import { useNavigation } from '@react-navigation/native';

import routes from '../../navigation/routes';

import useApi from '../../hooks/useApi';

import productsApi from '../../services/products';

import Product from '../../components/Product';
import Loader from '../../components/Loader';

const Categories = ({ route }) => {
  const navigation = useNavigation();
  const getProductsByCategoryApi = useApi(productsApi.getProductsByCategory);

  const { title, products, category } = route.params;

  const getProductsByCategory = async () => {
    try {
      await getProductsByCategoryApi.request(category);
    } catch (error) {
      console.log('getProductsByCategory Error: ', error);
    }
  };

  useEffect(() => {
    category && getProductsByCategory();
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={getProductsByCategoryApi.loading} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackIcon width={getRW(8)} height={getRH(22)} />
        </TouchableOpacity>

        <Text style={styles.title}>
          {title || category} (
          {products?.length || getProductsByCategoryApi?.data?.length})
        </Text>
      </View>

      <FlatList
        data={products || getProductsByCategoryApi?.data}
        renderItem={({ item }) => (
          <Product item={item} propStyle={styles.product} />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.content}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      />
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
    textTransform: 'capitalize',
  },
  content: {
    marginHorizontal: getRW(24),
    paddingTop: getRH(14),
  },
  product: {
    marginBottom: getRH(20),
  },
});
