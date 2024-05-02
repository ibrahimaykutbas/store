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

const Register = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.LOGIN)}
        style={styles.backIconContainer}>
        <BackIcon width={getRW(15)} height={getRW(15)} />
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.innerContainer}>
        <Input
          value={firstname}
          onChangeText={setFirstname}
          placeholder="Firstname"
        />
        <Input
          value={lastname}
          onChangeText={setLastname}
          placeholder="Lastname"
        />
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          isSecure
        />

        <Button
          title="Contine"
          disabled={
            firstname == '' || lastname == '' || password == '' || email == ''
          }
          onPress={() => navigation.navigate(routes.LOGIN)}
        />

        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
          activeOpacity={0.8}>
          <Text style={styles.subButtonTitle}>
            Forgot Password ?<Text style={{ fontWeight: '700' }}> Reset</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
  subButton: {
    marginTop: getRH(40),
  },
  subButtonTitle: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '450',
  },
});
