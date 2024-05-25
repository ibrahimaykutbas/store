import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Back from '../../assets/svgs/back.svg';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

const Address = () => {
  const navigation = useNavigation();

  const goAddAddress = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ADD_ADDRESS,
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
        <Text style={styles.headerText}>Address</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.innerContainerText}>
          2715 Ash Dr. San Jose, South Dakota 83475
        </Text>
        <TouchableOpacity>
          <Text style={styles.innerContainerButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.innerContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.innerContainerText}>
          2715 Ash Dr. San Jose, South Dakota 83475
        </Text>
        <TouchableOpacity>
          <Text style={styles.innerContainerButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => goAddAddress()}>
        <Text style={styles.moreButtonText}>Add Address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Address;

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
  innerContainer: {
    width: getRW(342),
    height: getRH(72),
    backgroundColor: Colors.GREY,
    borderRadius: getRH(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: getRH(12),
    paddingHorizontal: getRW(20),
  },
  innerContainerText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(17),
    fontWeight: '400',
    width: getRW(248),
  },
  innerContainerButtonText: {
    color: Colors.PURPLE,
    fontSize: Fonts.size(17),
    fontWeight: 'bold',
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
