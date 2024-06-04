import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { getRW, getRH } from '../theme/Units';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

import CloseIcon from '../assets/svgs/close.svg';
import TickIcon from '../assets/svgs/TickIcon.svg';

import ReactNativeModal from 'react-native-modal';

const Modal = ({
  isVisible,
  type,
  onClose,
  selectedSize,
  selectedColor,
  setSelectedSize,
  setSelectedColor,
}) => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Orange', 'Black', 'Red', 'Yellow', 'Blue'];

  const data = type === 'size' ? sizes : colors;

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{type}</Text>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
            activeOpacity={0.8}>
            <CloseIcon width={getRW(24)} height={getRH(24)} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <ScrollView>
            {data.map((item, index) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  (selectedSize == item || selectedColor == item) &&
                    styles.selectedItem,
                ]}
                key={index.toString()}
                onPress={() =>
                  type === 'size'
                    ? setSelectedSize(item)
                    : setSelectedColor(item)
                }
                activeOpacity={0.8}>
                <Text
                  style={[
                    styles.itemText,
                    (selectedSize == item || selectedColor == item) &&
                      styles.selectedItemText,
                  ]}>
                  {item}
                </Text>
                <View style={styles.itemRight}>
                  {type === 'color' && (
                    <View
                      style={[
                        (selectedSize == item || selectedColor == item) &&
                          styles.activeDot,
                        {
                          position: 'absolute',
                          right: getRW(30),
                        },
                      ]}>
                      <View
                        style={[
                          styles.dot,
                          { backgroundColor: item.toLowerCase() },
                        ]}
                      />
                    </View>
                  )}
                  {(selectedSize == item || selectedColor == item) && (
                    <TickIcon
                      width={getRW(20)}
                      height={getRH(20)}
                      style={{ marginLeft: getRW(5) }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: getRH(450),
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    margin: 0,
    borderRadius: getRW(16),
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getRH(24),
    marginHorizontal: getRW(30),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Fonts.size(24),
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  closeIcon: {
    position: 'absolute',
    right: getRW(10),
  },
  content: {
    flex: 1,
    marginTop: getRH(28),
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.GREY,
    justifyContent: 'space-between',
    borderRadius: getRW(100),
    marginHorizontal: getRW(24),
    marginBottom: getRH(12),
    paddingVertical: getRH(18),
    paddingLeft: getRW(16),
    paddingRight: getRW(27),
  },
  itemText: {
    color: Colors.BLACK,
    fontSize: Fonts.size(16),
    fontWeight: '500',
  },
  selectedItem: {
    backgroundColor: Colors.PURPLE,
  },
  selectedItemText: {
    color: Colors.WHITE,
  },
  itemRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: getRW(14),
    height: getRW(14),
    backgroundColor: Colors.PURPLE,
    borderRadius: getRW(16),
    marginHorizontal: getRW(4),
  },
  activeDot: {
    width: getRW(20),
    height: getRW(20),
    backgroundColor: Colors.WHITE,
    borderRadius: getRW(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Modal;
