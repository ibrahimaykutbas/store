import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

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
import { addAddress, removeAddress } from '../../redux/user';

const AddAddress = ({ route }) => {
  const [address, setAddress] = useState({
    id: uuid.v4(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const editAddress = route.params?.address;

  useEffect(() => {
    if (editAddress) {
      setAddress(editAddress);
    }
  }, [editAddress]);

  const saveAddress = () => {
    if (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zipCode
    ) {
      return showMessage({
        message: "Fields can't be empty!",
        type: 'danger',
      });
    }

    dispatch(addAddress(address));

    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ADDRESS,
    });
  };

  const onPressRemoveAddress = () => {
    dispatch(removeAddress(address.id));

    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ADDRESS,
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
          <Text style={styles.headerText}>Add Address</Text>
        </View>

        <Input
          value={address.street}
          onChangeText={text => setAddress({ ...address, street: text })}
          placeholder="Street Address"
          propStyles={styles.ınput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
        />
        <Input
          value={address.city}
          onChangeText={text => setAddress({ ...address, city: text })}
          placeholder="City"
          propStyles={styles.ınput}
          inputStyles={styles.ınputText}
          placeholderTextColor={Colors.SOFT_GREY}
        />

        <View style={styles.innerContainer}>
          <Input
            value={address.state}
            onChangeText={text => setAddress({ ...address, state: text })}
            placeholder="State"
            propStyles={styles.innerInput}
            inputStyles={styles.ınputText}
            placeholderTextColor={Colors.SOFT_GREY}
          />

          <Input
            value={address.zipCode}
            onChangeText={text => setAddress({ ...address, zipCode: text })}
            placeholder="Zip Code"
            propStyles={styles.innerInput}
            inputStyles={styles.ınputText}
            placeholderTextColor={Colors.SOFT_GREY}
          />
        </View>

        <TouchableOpacity
          style={{
            ...styles.moreButton,
            top: editAddress ? getRH(620) : getRH(700),
          }}
          onPress={() => saveAddress()}>
          <Text style={styles.moreButtonText}>Save</Text>
        </TouchableOpacity>

        {editAddress && (
          <TouchableOpacity
            style={styles.moreButton}
            onPress={onPressRemoveAddress}>
            <Text style={styles.moreButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;

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
