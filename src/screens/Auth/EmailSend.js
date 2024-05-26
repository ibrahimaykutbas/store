import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

import routes from '../../navigation/routes';

import Button from '../../components/Button';

import MailIcon from '../../assets/svgs/mailImage.svg';

const EmailSend = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.innerContainer}>
        <View style={styles.ımageContainer}>
          <MailIcon width={getRW(110)} height={getRW(110)} />
        </View>
        <Text style={styles.showContentText}>
          We Sent you an Email to reset your password.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Return to Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailSend;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  innerContainer: {
    marginHorizontal: getRW(24),
  },

  ımageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(292),
    marginBottom: getRH(32),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: getRH(200),
  },
  showContentText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(27),
    fontWeight: '900',
    textAlign: 'center',
    textShadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
