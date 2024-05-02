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
import MailIcon from '../../assets/svgs/mailImage.svg';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [showContent, setShowContent] = useState(false);

  return (
    <View style={styles.container}>
      {showContent ? (
        <SafeAreaView style={styles.showContent}>
          <View style={styles.ımageContainer} >
            <MailIcon width={getRW(110)} height={getRW(110)} />
          </View>
          <Text style={styles.showContentText}>
            We Sent you an Email to reset your password.
          </Text>
          <View style={styles.buttonContainer} >
          <Button title="Return to Login"  onPress={()=> navigation.navigate(routes.LOGIN)}/>
            </View>
        </SafeAreaView>
      ) : (
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
              onPress={() => setShowContent(true)}
              disabled={email == ''}
            />
          </View>
        </SafeAreaView>
      )}
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
  showContent: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal:getRH(24)
  },
  /* Shadow efekti yazının altında olmalı  */
  showContentText: {
    color: Colors.BLACK,
    fontSize:Fonts.size(27),
    fontWeight:'900',
    textAlign:'center',
    textShadowOffset: { width: 0, height:6 },
    shadowOpacity:0.3,
    shadowRadius:2
  },
  ımageContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:getRH(292),
    marginBottom:getRH(32)
  },
  buttonContainer:{
    justifyContent:'center',
    alignSelf:'center',
    width:getRH(200)
  }
});
