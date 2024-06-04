import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Image from '../../assets/svgs/CheckOutImage.svg';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

const OrderPlaced = () => {
  const navigation = useNavigation();

  const goOders = () => {
    navigation.navigate(routes.TAB_NAVIGATOR, {
      screen: routes.ORDERS,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ımageContainer}>
          <Image height={256} width={318} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Order Placed Successfully</Text>

        <Text style={styles.innerText}>
          You will recieve an email confirmation
        </Text>
        <Button
          containerStyles={styles.containerStyles}
          titleStyles={styles.titleStyles}
          title="See Order Details"
          onPress={() => goOders()}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PURPLE,
    flex: 0.5,
  },
  content: {
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
    marginTop: getRH(30),
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
    marginTop: getRH(40),
    marginBottom: getRH(50),
  },
  containerStyles: {
    width: getRW(340),
    height: getRH(56),
  },
  titleStyles: {
    color: Colors.WHITE,
    fontSize: Fonts.size(16),
    fontWeight: 'bold',
  },
});
