import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

import Back from '../../assets/svgs/back.svg';

import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import { getRH, getRW } from '../../theme/Units';

import uuid from 'react-native-uuid';

import { showMessage } from 'react-native-flash-message';

import { useDispatch } from 'react-redux';
import { addPayment, removePayment } from '../../redux/user';

const AddPayment = ({ route }) => {
  const [payment, setPayment] = useState({
    id: uuid.v4(),
    cardNumber: '',
    ccv: '',
    exp: '',
    cardHolderName: '',
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const editPayment = route.params?.payment;

  useEffect(() => {
    if (editPayment) {
      setPayment(editPayment);
    }
  }, [editPayment]);

  const savePayment = () => {
    if (
      !payment.cardNumber ||
      !payment.ccv ||
      !payment.exp ||
      !payment.cardHolderName
    ) {
      return showMessage({
        message: "Fields can't be empty!",
        type: 'danger',
      });
    }

    dispatch(addPayment(payment));

    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.PAYMENT,
    });
  };

  const onPressRemovePayment = () => {
    dispatch(removePayment(payment.id));

    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.PAYMENT,
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
          <Text style={styles.headerText}>Add Card</Text>
        </View>

        <Input
          value={payment.cardNumber}
          onChangeText={text => setPayment({ ...payment, cardNumber: text })}
          placeholder="Card Number"
          propStyles={styles.ınput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
          keyboardType="numeric"
          maxLength={11}
        />

        <View style={styles.innerContainer}>
          <Input
            value={payment.ccv}
            onChangeText={text => setPayment({ ...payment, ccv: text })}
            placeholder="CCV"
            propStyles={styles.innerInput}
            inputStyles={styles.ınputText}
            placeholderTextColor={Colors.SOFT_GREY}
            keyboardType="numeric"
            maxLength={3}
          />

          <Input
            value={payment.exp}
            onChangeText={text => setPayment({ ...payment, exp: text })}
            placeholder="Exp"
            propStyles={styles.innerInput}
            inputStyles={styles.ınputText}
            placeholderTextColor={Colors.SOFT_GREY}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>

        <Input
          value={payment.cardHolderName}
          onChangeText={text =>
            setPayment({ ...payment, cardHolderName: text })
          }
          placeholder="Cardholder Name"
          propStyles={styles.ınput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
        />

        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => savePayment()}>
          <Text style={styles.moreButtonText}>Save</Text>
        </TouchableOpacity>

        {editPayment && (
          <TouchableOpacity
            style={styles.moreButton}
            onPress={onPressRemovePayment}>
            <Text style={styles.moreButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddPayment;

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
    width: getRW(130),
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(23),
    marginHorizontal: getRW(87),
  },
  button: {
    backgroundColor: Colors.GREY,
    width: getRW(40),
    height: getRW(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ınput: {
    borderRadius: getRW(10),
  },
  ınputText: {},
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerInput: {
    width: getRW(160),
    borderRadius: getRW(10),
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
