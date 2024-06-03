import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import Empty from '../../components/Empty';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';

import BackIcon from '../../assets/svgs/back.svg';

import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../../redux/user';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

const Basket = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const basket = useSelector(state => state.user.basket);

  const [basketSubtotal, setBasketSubtotal] = useState(0);

  useEffect(() => {
    const basketTotal = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    setBasketSubtotal(basketTotal);
  }, [basket]);

  const removeAll = () => dispatch(clearBasket());

  const SHIPPING_COST = 10;
  const TAX = 20;

  const goCheckOut = () => {
    navigation.navigate(routes.CHECKOUT);
  };

  const Footer = () => {
    if (basket.length === 0) return null;

    return (
      <>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Subtotal</Text>
            <Text
              style={{
                ...styles.summaryTitle,
                opacity: 1,
              }}>
              ${basketSubtotal.toFixed(2)}
            </Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Shipping Cost</Text>
            <Text
              style={{
                ...styles.summaryTitle,
                opacity: 1,
              }}>
              ${SHIPPING_COST.toFixed(2)}
            </Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Tax</Text>
            <Text
              style={{
                ...styles.summaryTitle,
                opacity: 1,
              }}>
              ${TAX.toFixed(2)}
            </Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Total</Text>
            <Text
              style={{
                ...styles.summaryTitle,
                opacity: 1,
              }}>
              ${(basketSubtotal + SHIPPING_COST + TAX).toFixed(2)}
            </Text>
          </View>
        </View>

        <Button title="Checkout" onPress={() => goCheckOut()} />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackIcon width={getRW(8)} height={getRH(22)} />
        </TouchableOpacity>
        {basket.length > 0 && <Text style={styles.headerTitle}>Cart</Text>}
      </View>

      <View style={styles.innerContainer}>
        {basket.length > 0 && (
          <TouchableOpacity activeOpacity={0.8} onPress={removeAll}>
            <Text style={styles.remove}>Remove All</Text>
          </TouchableOpacity>
        )}

        <FlatList
          data={basket}
          renderItem={({ item }) => <CartItem item={item} />}
          ListEmptyComponent={
            <Empty
              icon="Bag"
              title="Your Cart is Empty"
              button={{
                title: 'Explore Categories',
                onPress: () => navigation.navigate(routes.CATEGORIES),
              }}
            />
          }
          ListFooterComponent={() => <Footer />}
          keyExtractor={item => item?.id?.toString()}
          ListFooterComponentStyle={{ marginBottom: getRH(200) }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getRH(30),
    marginHorizontal: getRW(24),
  },
  headerTitle: {
    fontSize: Fonts.size(24),
    fontWeight: '700',
    color: Colors.BLACK,
    marginRight: '43%',
  },
  backButton: {
    width: getRH(45),
    height: getRH(45),
    backgroundColor: Colors.GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getRH(40),
  },
  innerContainer: {
    marginHorizontal: getRW(24),
  },
  remove: {
    fontSize: Fonts.size(16),
    color: Colors.BLACK,
    fontWeight: '700',
    marginTop: getRH(34),
    marginBottom: getRH(16),
    textAlign: 'right',
  },
  summaryContainer: {
    marginTop: getRH(120),
    marginBottom: getRH(40),
  },
  summaryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getRH(12),
  },
  summaryTitle: {
    fontSize: Fonts.size(16),
    color: Colors.BLACK,
    fontWeight: '400',
    opacity: 0.5,
  },
});
