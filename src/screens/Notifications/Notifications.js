import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import Colors from '../../theme/Colors';
import { getRH, getRW } from '../../theme/Units';
import Fonts from '../../theme/Fonts';

/* import BellIcon from '../../assets/svgs/bellIcon.svg'; */
import NotificationIcon from '../../assets/svgs/notifications.svg';
import RedDot from '../../assets/svgs/redDot.svg';

/* import Button from '../../components/Button'; */

import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';

import Empty from '../../components/Empty';

const Notifications = ({ notification = false }) => {
  const navigation = useNavigation();

  /* const onPressNotifications = () => {
    navigation.navigate(routes.OTHER_NAVIGATOR, {
      screen: routes.CATEGORIES,
    });
  }; */

  const NotificationTexts = [
    {
      text: 'Gilbert, you placed and order check your order history for full details',
      isRead: true,
    },
    {
      text: 'Gilbert, Thank you for shopping with us we have canceled order #24568.',
      isRead: false,
    },
    {
      text: 'Gilbert, your Order #24568 has been  confirmed check  your order history for full details...',
      isRead: false,
    },
  ];

  const renderNotification = ({ item }) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderInnerContainer}>
          {item.isRead ? (
            <>
              <View style={styles.renderImageContainer}>
                <RedDot />
              </View>
            </>
          ) : null}
          <NotificationIcon width={getRW(30)} height={getRH(30)} />

          <Text numberOfLines={2} style={styles.renderContainerText}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      {notification ? (
        <FlatList
          scrollEnabled={false}
          data={NotificationTexts}
          renderItem={renderNotification}
        />
      ) : (
        <>
          {/* <View style={styles.innerContainer}>
            <BellIcon width={getRW(170)} height={getRH(170)} />
            <Text style={styles.innerContainerText}>No Notification yet</Text>
          </View>
          <Button
            title="Explore Categories"
            onPress={() => onPressNotifications()}
            containerStyles={styles.button}
          /> */}

          <Empty
            icon="Bell"
            title="No Notification Yet"
            button={{
              title: 'Explore Categories',
              onPress: () =>
                navigation.navigate(routes.OTHER_NAVIGATOR, {
                  screen: routes.CATEGORIES,
                }),
            }}
          />
        </>
      )}
    </View>
  );
};

export default Notifications;

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
 /*  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(204),
  },
  innerContainerText: {
    fontSize: Fonts.size(34),
    fontWeight: '400',
    marginTop: getRH(24),
  },
  button: {
    marginHorizontal: getRW(102),
  }, */
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
  },
  renderContainerText: {
    marginLeft: 20,
    fontSize: Fonts.size(13),
  },
  renderImageContainer: {
    position: 'absolute',
    left: 20,
  },
});
