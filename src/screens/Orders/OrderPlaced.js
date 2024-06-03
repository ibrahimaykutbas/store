import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Image from '../../assets/svgs/CheckOutImage.svg';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import Button from '../../components/Button';

const OrderPlaced = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ımageContainer}>
        <Image height={256} width={318} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Order Placed Successfully</Text>

        <Text style={styles.innerText}>
          You will recieve an email confirmation
        </Text>
      </View>

      <Button title="See Order Details" onPress={() => console.log('bb')} /* containerStyles={containerStyles} */ />
    </SafeAreaView>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PURPLE,
  },
  ımageContainer: {
    marginTop: getRH(154),
    marginHorizontal: getRW(36),
  },
  textContainer: {
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: getRH(40),
    borderTopLeftRadius: getRH(40),
    marginTop: getRH(68),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(45),
    fontWeight: 'bold',
    marginTop: getRH(40),
  },
  innerText: {
    color: Colors.SOFT_GREY,
    fontSize: Fonts.size(20),
    fontWeight: '600',
    marginTop: getRH(25),
  },
  containerStyles:{
    borderRadius:getRW(50)
  },
  titleStyles:{},
});
