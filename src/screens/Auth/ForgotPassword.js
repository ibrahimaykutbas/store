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

import BackIcon from '../../assets/svgs/back.svg';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIconContainer}>
          <BackIcon width={getRW(15)} height={getRW(15)} />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>

        <View style={styles.content}>
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
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  innerContainer: {
    marginHorizontal: getRW(24),
  },
  backIconContainer: {
    backgroundColor: Colors.GREY,
    width: getRW(30),
    height: getRW(30),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getRH(63),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(32),
    fontWeight: '700',
    marginTop: getRH(20),
    marginBottom: getRH(32),
  },
  content: {
    flex: 1,
  },
});
