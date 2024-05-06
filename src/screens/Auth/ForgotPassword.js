import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import routes from '../../navigation/routes';

import Input from '../../components/Input';
import Button from '../../components/Button';

import BackIcon from '../../assets/svgs/BackIcon.svg';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIconContainer}>
          <BackIcon width={getRW(15)} height={getRW(15)} />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>

        <View style={styles.innerContainer}>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email address"
          />

          <Button
            title="Contine"
            onPress={() => navigation.navigate(routes.EMAIl_SEND)}
            disabled={email == ''}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  backIconContainer: {
    backgroundColor: Colors.GREY,
    width: getRW(30),
    height: getRW(30),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getRH(63),
    marginLeft: getRH(27),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(32),
    fontWeight: '700',
    marginTop: getRH(20),
    marginLeft: getRH(27),
    marginBottom: getRH(32),
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: getRH(23),
  },
});
