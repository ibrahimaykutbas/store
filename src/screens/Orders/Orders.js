import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

import OrderIcon from '../../assets/svgs/orders.svg';
import Arrow from '../../assets/svgs/back.svg';

import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';

import Empty from '../../components/Empty';

const Orders = ({ order = true }) => {
  const navigation = useNavigation();

  const [selectedSection, setSelectedSection] = useState('Procressing');

  const onPressGoOrderDetail = orderText => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.ORDER_DETAIL,
      params: {
        orderText: orderText,
      },
    });
  };

  const OrderTexts = [
    {
      orderNumber: '#456765',
      itemNumber: '4',
    },
    {
      orderNumber: '#454569',
      itemNumber: '2',
    },
    {
      orderNumber: '#454809',
      itemNumber: '1',
    },
  ];

  const onPressSelected = section => {
    setSelectedSection(section);
  };

  const sections = [
    'Procressing',
    'Shipped',
    'Delivered',
    'Returned',
    'Canceled',
  ];

  const renderOrder = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressGoOrderDetail(item)}
        style={styles.renderContainer}>
        <View style={styles.renderInnerContainer}>
          <OrderIcon width={getRW(30)} height={getRH(30)} />
          <View style={{ flexDirection: 'column', marginRight: getRW(120) }}>
            <Text numberOfLines={2} style={styles.renderContainerText}>
              Order {item.orderNumber}
            </Text>
            <Text style={styles.renderContainerInnerText}>
              {item.itemNumber} items
            </Text>
          </View>
          <Arrow
            width={getRW(22)}
            height={getRH(22)}
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Orders</Text>
      </View>
      {order ? (
        <>
          <View style={{ height: 300 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.orderProgres}>
              {sections.map(item => {
                const isSelected = selectedSection == item;

                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => onPressSelected(item)}
                    style={
                      isSelected
                        ? styles.selectedOrderInnerContainer
                        : styles.orderInnerContainer
                    }>
                    <Text
                      style={{
                        ...styles.orderProgresText,
                        color: isSelected ? Colors.WHITE : Colors.BLACK,
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <FlatList
              data={OrderTexts}
              renderItem={renderOrder}
              alwaysBounceVertical={false}
            />
          </View>
        </>
      ) : (
        <Empty
          icon="Basket"
          title="No Order Yet"
          button={{
            title: 'Explore Categories',
            onPress: () =>
              navigation.navigate(routes.OTHER_NAVIGATOR, {
                screen: routes.CATEGORIES,
              }),
          }}
        />
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    marginTop: getRH(90),
    marginBottom: getRH(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: Fonts.size(23),
  },
  renderContainer: {
    flex: 1,
    backgroundColor: Colors.GREY,
    marginVertical: getRH(8),
    marginHorizontal: getRW(24),
    width: getRW(342),
    height: getRH(74),
    borderRadius: getRH(15),
    justifyContent: 'center',
  },
  renderInnerContainer: {
    flexDirection: 'row',
    width: getRW(300),
    marginLeft: getRH(20),
    alignItems: 'center',
  },
  renderContainerText: {
    marginLeft: getRW(20),
    fontSize: Fonts.size(17),
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  renderContainerInnerText: {
    marginLeft: getRW(20),
    fontSize: Fonts.size(13),
    fontWeight: 'bold',
    color: Colors.BLACK,
    opacity: 0.5,
  },
  orderProgres: {
    marginHorizontal: getRW(27),
    marginBottom: getRH(24),
  },
  orderInnerContainer: {
    width: 'auto',
    height: getRH(35),
    marginHorizontal: getRH(5),
    backgroundColor: Colors.GREY,
    borderRadius: getRH(15),
    justifyContent: 'center',
    alignItems: 'center',
    padding: getRH(5),
  },
  orderProgresText: {
    fontSize: Fonts.size(14),
    color: Colors.BLACK,
  },
  selectedOrderInnerContainer: {
    height: getRH(35),
    marginHorizontal: getRH(5),
    backgroundColor: Colors.PURPLE,
    borderRadius: getRH(15),
    justifyContent: 'center',
    alignItems: 'center',
    padding: getRH(5),
  },
});
