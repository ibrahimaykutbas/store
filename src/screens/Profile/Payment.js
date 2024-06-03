import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Back from '../../assets/svgs/back.svg';
import CardIcon from '../../assets/svgs/masterCard.svg';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

import { useSelector } from 'react-redux';

const Payment = () => {
  const navigation = useNavigation();

  const { payments } = useSelector(state => state.user);

  const goAddPayment = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ADD_PAYMENT,
    });
  };

  const goToDetail = payment => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ADD_PAYMENT,
      params: { payment },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Back width={getRW(17)} height={getRW(17)} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payment</Text>
        </View>

        <Text style={styles.title}>Cards</Text>

        {payments?.map(payment => (
          <View style={styles.innerContainer} key={payment.id}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.innerContainerText}>
              {payment.cardNumber}
              <CardIcon width={getRW(25)} height={getRW(25)} />
              {payment.ccv} {payment.exp} {payment.cardHolderName}
            </Text>

            <TouchableOpacity onPress={() => goToDetail(payment)}>
              <Back
                width={getRW(17)}
                height={getRW(17)}
                style={{ transform: [{ rotateY: '180deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ marginTop: getRH(32) }}>
          <Text style={styles.title}>Paypal</Text>
        </View>

        <View style={styles.innerContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.innerContainerText}>
            Cloth@gmail.com
          </Text>

          <TouchableOpacity>
            <Back
              width={getRW(17)}
              height={getRW(17)}
              style={{ transform: [{ rotateY: '180deg' }] }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => goAddPayment()}>
          <Text style={styles.moreButtonText}>Add Payment Method</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: getRH(90),
  },
  content: {
    marginHorizontal: getRW(24),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getRH(42),
  },
  headerText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(23),
    marginHorizontal: getRW(110),
  },
  button: {
    backgroundColor: Colors.GREY,
    width: getRW(40),
    height: getRW(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(27),
  },
  innerContainer: {
    width: getRW(342),
    height: getRH(72),
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
    fontSize: Fonts.size(17),
    fontWeight: '400',
    width: getRW(248),
  },
  moreButton: {
    position: 'absolute',
    top: getRH(700),
    right: getRW(0),
    width: getRW(342),
    height: getRH(60),
    backgroundColor: Colors.PURPLE,
    borderRadius: getRW(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: Fonts.size(22),
  },
});
