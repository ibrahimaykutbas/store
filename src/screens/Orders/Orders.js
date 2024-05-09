import { SafeAreaView , View, Text, StyleSheet } from 'react-native';
import React from 'react';

import OrdersCard from '../../components/OrdersCard';

import Colors from '../../theme/Colors';

const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OrdersCard title='Orders' />
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.WHITE
}

})
