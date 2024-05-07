import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

import Colors from '../theme/Colors';
import { getRW, getRH } from '../theme/Units';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.PURPLE} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getRH(422),
    left: getRW(195),
    zIndex: 1,
  },
});
