import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import FavoriteCard from '../../components/FavoriteCard';

import Back from '../../assets/svgs/back.svg';

import { getRH, getRW } from '../../theme/Units';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const Favorites = ({ route }) => {
  const { favoriteList } = route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Back width={getRW(17)} height={getRW(17)} />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Favorites ({favoriteList.length})
          </Text>
        </View>

        <FlatList
          data={favoriteList}
          renderItem={({ item }) => (
            <FavoriteCard item={item} propStyle={styles.product} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}

          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

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
    alignItems: 'center',
    marginBottom: getRH(42),
  },
  headerText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(23),
    marginHorizontal: getRW(80),
  },
  button: {
    backgroundColor: Colors.GREY,
    width: getRW(40),
    height: getRW(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    marginBottom: getRH(20),
  },
});
