import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import Input from '../../components/Input';
import Button from '../../components/Button';

import routes from '../../navigation/routes';

import useApi from '../../hooks/useApi';
import authApi from '../../services/auth';

import { showMessage } from 'react-native-flash-message';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/user';

const Login = ({ navigation }) => {
  const loginApi = useApi(authApi.login);

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    try {
      //mor_2314
      //83r5^_
      const response = await loginApi.request(username, password);

      if (response.status !== 200) {
        showMessage({
          message: 'Unexpected Error',
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'Successfully Logged In',
          type: 'success',
        });
        dispatch(login({ username, token: response.data.token }));
        navigation.navigate(routes.TAB_NAVIGATOR);
      }
    } catch (error) {
      console.log('onPressLogin Error: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign in</Text>

        <Input
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          isSecure
        />

        <Button
          title="Sign in"
          onPress={() => onPressLogin()}
          disabled={username == '' || password == '' || loginApi.loading}
          loading={loginApi.loading}
        />

        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate(routes.REGISTER)}
          activeOpacity={0.8}>
          <Text style={styles.subButtonTitle}>
            Dont have an Account ?
            <Text style={{ fontWeight: '700' }}> Create One</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
          activeOpacity={0.8}>
          <Text style={styles.subButtonTitle}>
            Forgot Password ?<Text style={{ fontWeight: '700' }}> Reset</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.otherLogins}>
          <Button
            title="Continue With Apple"
            onPress={() => {}}
            containerStyles={styles.button}
            titleStyles={styles.buttonTitle}
            icon="apple"
          />
          <Button
            title="Continue With Google"
            onPress={() => {}}
            containerStyles={styles.button}
            titleStyles={styles.buttonTitle}
            icon="google"
          />
          <Button
            title="Continue With Facebook"
            onPress={() => {}}
            containerStyles={styles.button}
            titleStyles={styles.buttonTitle}
            icon="facebook"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(32),
    fontWeight: '700',
    marginTop: getRH(123),
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
  otherLogins: {
    marginTop: getRH(71),
  },
  button: {
    backgroundColor: Colors.GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getRW(19),
  },
  buttonTitle: {
    color: Colors.BLACK,
  },
});
