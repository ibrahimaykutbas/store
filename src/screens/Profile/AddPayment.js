import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import Input from '../../components/Input';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

import Back from '../../assets/svgs/back.svg';

import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import { getRH, getRW } from '../../theme/Units';

const AddPayment = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const savePayment = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.PAYMENT,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Back width={getRW(17)} height={getRW(17)} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Card</Text>
      </View>

      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Card Number"
        propStyles={styles.ınput}
        inputStyles={styles.ınputText}
        placeholderTextColor={Colors.SOFT_GREY}
      />

      <View style={styles.innerContainer}>
        <Input
          value={value}
          onChangeText={setValue}
          placeholder="CCV"
          propStyles={styles.innerInput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
        />

        <Input
          value={value}
          onChangeText={setValue}
          placeholder="Exp"
          propStyles={styles.innerInput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
        />
      </View>

      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Cardholder Name"
        propStyles={styles.ınput}
        inputStyles={styles.ınputText}
        placeholderTextColor={Colors.SOFT_GREY}
      />

      <TouchableOpacity style={styles.moreButton} onPress={() => savePayment()}>
        <Text style={styles.moreButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: getRW(24),
    marginTop: getRH(90),
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
