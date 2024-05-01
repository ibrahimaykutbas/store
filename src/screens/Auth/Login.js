import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import Input from '../../components/Input';
import Button from '../../components/Button';

import routes from '../../navigation/routes';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <View style={styles.innerContainer}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />

        <Button
          title="Sign in"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />

        <TouchableOpacity
          style={styles.subButton}
          onPress={() => {}}
          activeOpacity={0.8}>
          <Text style={styles.subButtonTitle}>
            Dont have an Account ?
            <Text style={{ fontWeight: '700' }}> Create One</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.subButton}
          onPress={() => {}}
          activeOpacity={0.8}>
          <Text style={styles.subButtonTitle}>
            Forgot Password ?<Text style={{ fontWeight: '700' }}> Reset</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(32),
    fontWeight: '700',
    marginTop: getRH(123),
    marginLeft: getRH(27),
    marginBottom: getRH(32),
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: getRH(23),
  },
  subButton: {
    marginTop: getRH(16),
  },
  subButtonTitle: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '450',
  },
});
