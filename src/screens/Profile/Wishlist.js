import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  LogBox,
} from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';

import Back from '../../assets/svgs/back.svg';
import HeartIcon from '../../assets/svgs/heart.svg';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

const Wishlist = () => {
  const navigation = useNavigation();

  const favoriteList = useSelector(state => state.user.favoriteList);

  const goFavorites = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.FAVORITES,
      params: { favoriteList },
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
        <Text style={styles.headerText}>Wishlist</Text>
      </View>

      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => goFavorites()}>
        <HeartIcon
          width={getRW(25)}
          height={getRH(25)}
          fill={Colors.WHITE}
          stroke={Colors.BLACK}
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.innerContainerHeaderText}>
            My Favorite
          </Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.innerContainerText}>
            {favoriteList.length} products
          </Text>
        </View>

        <TouchableOpacity>
          <Back
            width={getRW(17)}
            height={getRW(17)}
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.innerContainer}>
        <HeartIcon
          width={getRW(25)}
          height={getRH(25)}
          fill={Colors.WHITE}
          stroke={Colors.BLACK}
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.innerContainerHeaderText}>
            Others
          </Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.innerContainerText}>
            13 products
          </Text>
        </View>

        <TouchableOpacity>
          <Back
            width={getRW(17)}
            height={getRW(17)}
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: getRW(24),
    marginTop: getRH(90),
  },
  headerContainer: {
    flexDirection: 'row',
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
    height: getRH(110),
    backgroundColor: Colors.GREY,
    borderRadius: getRH(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: getRH(15),
    paddingHorizontal: getRW(20),
  },
  innerContainerHeaderText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(23),
    fontWeight: 'bold',
    width: getRW(200),
    marginBottom: getRH(5),
  },
  innerContainerText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(17),
    fontWeight: '400',
    width: getRW(200),
    marginBottom: getRH(5),
  },
});
