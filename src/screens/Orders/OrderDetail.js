import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import { getRW, getRH } from '../../theme/Units';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

import { useNavigation } from '@react-navigation/native';

import BackIcon from '../../assets/svgs/back.svg';
import Tick from '../../assets/svgs/TickIcon.svg';
import OrderIcon from '../../assets/svgs/orders.svg';

const OrderDetail = ({ route }) => {
  const navigation = useNavigation();

  const itemNumber = route.params.orderText.itemNumber;
  const orderNumber = route.params.orderText.orderNumber;

  const DetailStatus = [
    { text: 'Delivered', status: true },
    { text: 'Shipped', status: false },
    { text: 'Order Confirmed', status: false },
    { text: 'Order Placed', status: false },
  ];

  const renderDetail = ({ item }) => {
    return (
      <View style={styles.statusContainer}>
        {item.status ? (
          <>
            <View style={styles.renderTick}>
              <Tick width={getRW(13)} height={getRW(13)} />
            </View>
            <View style={{ width: getRW(254) }}>
              <Text style={styles.renderText}>{item.text}</Text>
            </View>
            <Text style={styles.renderDate}>{'12 March'}</Text>
          </>
        ) : (
          <>
            <View style={styles.tick}>
              <Tick width={getRW(13)} height={getRW(13)} />
            </View>
            <View style={{ width: getRW(254) }}>
              <Text style={styles.statusText}>{item.text}</Text>
            </View>
            <Text style={styles.statusDate}>{'12 March'}</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <BackIcon width={getRW(17)} height={getRW(17)} />
        </TouchableOpacity>
        <Text style={styles.headerText}> Order {orderNumber}</Text>
      </View>

      <FlatList
        style={{ flexGrow: 0 }}
        scrollEnabled={false}
        data={DetailStatus}
        renderItem={renderDetail}
      />

      <Text style={styles.innerContainerHeader}>Order Items</Text>

      <View style={styles.innerContainer}>
        <View style={styles.innerContainerIcon}>
          <OrderIcon width={getRW(30)} height={getRW(30)} />
        </View>
        <Text style={styles.innerContainerText}>{itemNumber} items</Text>
        <TouchableOpacity style={styles.innerContainerPress}>
          <Text style={styles.innerContainerPressText}>View all </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.innerContainerHeader}>Shipping details</Text>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          2715 Ash Dr. San Jose, South Dakota 83475{'\n'}121-224-7890
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: getRW(24),
    marginTop: getRH(90),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(23),
    marginHorizontal: getRW(69),
  },
  button: {
    backgroundColor: Colors.GREY,
    width: getRW(40),
    height: getRW(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getRH(53),
    width: getRW(342),
  },
  tick: {
    backgroundColor: Colors.SOFT_GREY,
    width: getRW(24),
    height: getRW(24),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: Fonts.size(17),
    fontWeight: '400',
    color: Colors.BLACK,
    marginLeft: getRW(12),
  },
  statusDate: {
    fontSize: Fonts.size(14),
    color: Colors.BLACK,
    fontWeight: '400',
    marginRight: getRW(24),
    marginLeft: getRW(12),
  },
  renderTick: {
    backgroundColor: Colors.PURPLE,
    width: getRW(24),
    height: getRW(24),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderText: {
    fontSize: Fonts.size(17),
    fontWeight: '400',
    color: Colors.SOFT_GREY,
    marginLeft: getRW(12),
  },
  renderDate: {
    fontSize: Fonts.size(14),
    color: Colors.SOFT_GREY,
    fontWeight: '400',
    marginRight: getRW(24),
    marginLeft: getRW(12),
  },
  innerContainer: {
    width: getRW(342),
    height: getRH(90),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GREY,
    marginTop: getRH(16),
  },
  innerContainerIcon: {
    marginLeft: getRW(24),
    marginRight: getRW(12),
  },
  innerContainerHeader: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Fonts.size(19),
    marginTop: getRH(38),
  },
  innerContainerText: {
    fontSize: Fonts.size(17),
    fontWeight: '600',
    color: Colors.BLACK,
    marginRight: getRW(140),
  },
  innerContainerPress: {
    marginRight: getRW(30),
  },
  innerContainerPressText: {
    fontSize: Fonts.size(17),
    fontWeight: 'bold',
    color: Colors.PURPLE,
  },
  addressContainer: {
    width: getRW(342),
    height: getRH(90),
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: Colors.GREY,
    marginTop: getRH(16),
  },
  addressText: {
    fontSize: Fonts.size(17),
    fontWeight: '500',
    color: Colors.BLACK,

    marginLeft: getRW(11),
  },
});
