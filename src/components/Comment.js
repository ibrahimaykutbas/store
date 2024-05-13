import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import StarIcon from '../assets/svgs/star.svg';
import StarFillIcon from '../assets/svgs/star-fill.svg';

const Comment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <View style={styles.image} />
          <Text style={styles.name}>Alex Morgan</Text>
        </View>
        <View style={styles.header}>
          <StarFillIcon width={getRW(16)} height={getRH(16)} />
          <StarFillIcon width={getRW(16)} height={getRH(16)} />
          <StarFillIcon width={getRW(16)} height={getRH(16)} />
          <StarIcon width={getRW(16)} height={getRH(16)} />
          <StarIcon width={getRW(16)} height={getRH(16)} />
        </View>
      </View>

      <Text style={styles.description}>
        Gucci transcribes its heritage, creativity, and innovation into a
        plenitude of collections. From staple items to distinctive accessories.
      </Text>

      <Text
        style={{
          ...styles.description,
          opacity: 1,
        }}>
        12days ago
      </Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: getRH(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: getRW(40),
    height: getRW(40),
    borderRadius: getRW(40),
    backgroundColor: Colors.GREY,
  },
  name: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '700',
    marginLeft: getRW(12),
  },
  description: {
    color: Colors.BLACK,
    fontSize: Fonts.size(14),
    fontWeight: '400',
    lineHeight: getRH(20),
    marginVertical: getRH(4),
    opacity: 0.5,
  },
});
