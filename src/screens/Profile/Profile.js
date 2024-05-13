import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import { getRH, getRW } from '../../theme/Units';

import BackIcon from '../../assets/svgs/back.svg';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/user';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressLogOut = () => {
    dispatch(logOut());
    navigation.navigate(routes.AUTH_NAVIGATOR, {
      screen: routes.LOGIN,
    });
  };

  const RenderItem = ({ title, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.navigationContainer}>
        <Text style={styles.navigationContainerText}>{title}</Text>
        <BackIcon
          height={20}
          width={20}
          style={styles.navigationContainerButton}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/profilePhoto.png')}
      />
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileNameText}>Gilbert Jones</Text>
          <Text style={styles.profileInfoText}>Glbertjones001@gmail.com</Text>
          <Text style={styles.profileInfoText}>121-224-7890</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.profileInfoButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <RenderItem
        title="Address"
        onPress={() => {
          navigation.navigate(routes.OTHER_NAVIGATOR, {
            screen: routes.ADDRESS,
          });
        }}
      />
      <RenderItem
        title="Wishlist"
        onPress={() => {
          navigation.navigate(routes.OTHER_NAVIGATOR, {
            screen: routes.WISHLIST,
          });
        }}
      />
      <RenderItem
        title="Payment"
        onPress={() => {
          navigation.navigate(routes.OTHER_NAVIGATOR, {
            screen: routes.PAYMENT,
          });
        }}
      />
      <RenderItem title="Help" onPress={() => {}} />
      <RenderItem title="Support" onPress={() => {}} />

      <TouchableOpacity onPress={onPressLogOut} style={styles.singOut}>
        <Text style={styles.singOutText}>Sing Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: getRW(24),
  },
  profileImage: {
    width: getRW(80),
    height: getRH(80),
    alignSelf: 'center',
    marginTop: getRH(100),
    resizeMode: 'contain',
  },
  profileInfoContainer: {
    width: getRW(342),
    height: getRH(96),
    backgroundColor: Colors.GREY,
    alignItems: 'center',
    borderRadius: getRH(10),
    marginTop: getRH(32),
    flexDirection: 'row',
    marginBottom: getRH(26),
  },
  profileTextContainer: {
    width: getRW(198),
    height: getRH(75),
    marginLeft: getRW(16),
    marginRight: getRW(86),
    marginTop: getRH(5),
  },
  profileNameText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(17),
    marginBottom: getRH(8),
  },
  profileInfoText: {
    color: Colors.SOFT_GREY,
    fontWeight: '500',
    fontSize: Fonts.size(15),
    marginBottom: getRH(8),
  },
  profileInfoButton: {
    color: Colors.PURPLE,
    fontWeight: 'bold',
    fontSize: Fonts.size(13),
  },
  navigationContainer: {
    width: getRW(342),
    height: getRH(56),
    marginTop: getRH(9),
    borderRadius: getRH(10),
    backgroundColor: Colors.GREY,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigationContainerText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(20),
    fontWeight: '600',
    marginHorizontal: getRW(19),
  },
  navigationContainerButton: {
    transform: [{ rotateY: '180deg' }],
    marginHorizontal: getRW(19),
  },
  singOut: {
    alignSelf: 'center',
    marginTop: getRH(36),
  },
  singOutText: {
    color:Colors.RED,
    fontSize: Fonts.size(17),
    fontWeight: 'bold',
  },
});
