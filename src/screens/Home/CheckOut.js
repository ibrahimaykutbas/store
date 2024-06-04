import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

import BackIcon from '../../assets/svgs/back.svg';
import CardIcon from '../../assets/svgs/masterCard.svg';

import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import routes from '../../navigation/routes';

import Button from '../../components/Button';

const CheckOut = () => {
  const navigation = useNavigation();

  const basket = useSelector(state => state.user.basket);
  const addresses = useSelector(state => state.user.addresses);
  const payments = useSelector(state => state.user.payments);

  const [basketSubtotal, setBasketSubtotal] = useState(0);

  const lastFourDigits = payments[0].cardNumber.slice(-4);

  useEffect(() => {
    const basketTotal = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    setBasketSubtotal(basketTotal);
  }, [basket]);

  const SHIPPING_COST = 10;
  const TAX = 20;

  const data = [
    { type: 'address', item: addresses[0] || null },
    { type: 'payment', item: payments[0] || null },
  ];

  const goOrderPlaced = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ORDER_PLACED,
    });
  };

  const RenderItem = ({ item }) => {
    if (item.type === 'address') {
      return (
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => console.log('pressed address')}>
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.innerContainerHeaderText}>
              Shipping Address
            </Text>
            {item.item ? (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.innerContainerText}>
                {item.item.street}, {item.item.city}, {item.item.state},{' '}
                {item.item.zipCode}
              </Text>
            ) : (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.innerContainerText}>
                Add Shipping Address
              </Text>
            )}
          </View>
          <TouchableOpacity>
            <BackIcon
              width={getRW(17)}
              height={getRW(17)}
              style={{ transform: [{ rotateY: '180deg' }] }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    } else if (item.type === 'payment') {
      return (
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => console.log('pressed payment')}>
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.innerContainerHeaderText}>
              Payment Method
            </Text>
            {item.item ? (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.innerContainerText}>
                **** {lastFourDigits}
                <CardIcon width={getRW(25)} height={getRW(25)} />
              </Text>
            ) : (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.innerContainerText}>
                Add Payment Method
              </Text>
            )}
          </View>
          <TouchableOpacity>
            <BackIcon
              width={getRW(17)}
              height={getRW(17)}
              style={{ transform: [{ rotateY: '180deg' }] }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const Footer = () => {
    if (basket.length === 0) return null;

    return (
      <>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Subtotal</Text>
            <Text style={styles.summaryTitle}>
              ${basketSubtotal.toFixed(2)}
            </Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Shipping Cost</Text>
            <Text style={styles.summaryTitle}>${SHIPPING_COST.toFixed(2)}</Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Tax</Text>
            <Text style={styles.summaryTitle}>${TAX.toFixed(2)}</Text>
          </View>

          <View style={styles.summaryLine}>
            <Text style={styles.summaryTitle}>Total</Text>
            <Text style={styles.summaryTitle}>
              ${(basketSubtotal + SHIPPING_COST + TAX).toFixed(2)}
            </Text>
          </View>
        </View>

        <Button
          title={`${basketSubtotal.toFixed(2)}$ Place Order`}
          titleStyles={styles.titleStyles}
          onPress={() => goOrderPlaced()}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <BackIcon width={getRW(8)} height={getRH(22)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          ListFooterComponent={() => <Footer />}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponentStyle={{ marginBottom: getRH(200) }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    marginHorizontal: getRW(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getRH(30),
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
    width: getRW(342),
    height: getRH(110),
    backgroundColor: Colors.GREY,
    borderRadius: getRH(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: getRH(15),
    paddingHorizontal: getRW(20),
  },
  innerContainerText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(23),
    fontWeight: 'bold',
    width: getRW(250),
    marginBottom: getRH(5),
  },
  innerContainerHeaderText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(17),
    fontWeight: '400',
    width: getRW(200),
    marginBottom: getRH(5),
  },
  summaryContainer: {
    marginTop: getRH(258),
    paddingHorizontal: getRW(20),
  },
  summaryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getRH(10),
  },
  summaryTitle: {
    fontSize: Fonts.size(18),
    fontWeight: '400',
    color: Colors.BLACK,
  },
});
