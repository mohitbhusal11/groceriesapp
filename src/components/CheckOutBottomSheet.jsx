import {Animated, Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLargeBtn from './SimpleLargeBtn';

const { width, height } = Dimensions.get('window');
const CheckOutBottomSheet = ({checkoutDialog, totalPrice}) => {
  return (
    <Pressable style={styles.backdrop} onPress={checkoutDialog}>
      <Pressable style={styles.mainContainer}>
        <Animated.View style={[styles.aniView]}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Checkout</Text>
            <AntDesign
              style={styles.crossIC}
              name="close"
              size={24}
              color="black"
            />
          </View>
          <View
            style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 30}}
          />
          <View style={{flexDirection: 'column', marginHorizontal: 25}}>
            <View style={styles.optionsContainer}>
              <Text style={styles.checkOutBottomSheetOptionText}>Delivery</Text>
              <View style={styles.subOptionContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#181725',
                    marginRight: 15,
                  }}>
                  Select Method
                </Text>
                <AntDesign name="right" size={16} color="black" />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 20}}
            />
          </View>

          <View style={{flexDirection: 'column', marginHorizontal: 25}}>
            <View style={styles.optionsContainer}>
              <Text style={styles.checkOutBottomSheetOptionText}>Payment</Text>
              <View style={styles.subOptionContainer}>
                <FontAwesome
                  name="cc-mastercard"
                  size={16}
                  color="black"
                  style={{marginRight: 15}}
                />
                <AntDesign name="right" size={16} color="black" />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 20}}
            />
          </View>

          <View style={{flexDirection: 'column', marginHorizontal: 25}}>
            <View style={styles.optionsContainer}>
              <Text style={styles.checkOutBottomSheetOptionText}>
                Promo Code
              </Text>
              <View style={styles.subOptionContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#181725',
                    marginRight: 15,
                  }}>
                  Pick discount
                </Text>
                <AntDesign name="right" size={16} color="black" />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 20}}
            />
          </View>

          <View style={{flexDirection: 'column', marginHorizontal: 25}}>
            <View style={styles.optionsContainer}>
              <Text style={styles.checkOutBottomSheetOptionText}>
                Total Cost
              </Text>
              <View style={styles.subOptionContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#181725',
                    marginRight: 15,
                  }}>
                  ${totalPrice}
                </Text>
                <AntDesign name="right" size={16} color="black" />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 20}}
            />
          </View>

          <Text
            style={{
              fontWeight: '700',
              color: '#7C7C7C',
              marginHorizontal: 25,
              marginTop: 20,
            }}>
            By placing an order you agree to our{' '}
            <Text style={{fontWeight: '700', color: 'black'}}>Terms</Text> And{' '}
            <Text style={{fontWeight: '700', color: 'black'}}>Conditions</Text>
          </Text>

          <View style={styles.checkoutButtonContainer}>
            <SimpleLargeBtn>Place Order</SimpleLargeBtn>
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default CheckOutBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  mainContainer: {
    backgroundColor: 'white',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    height: '65%',
  },

  aniView: {
    flex: 1,
  },

  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 25,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#181725',
  },

  crossIC: {},

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },

  subOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  checkOutBottomSheetOptionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C7C7C',
  },

  checkoutButtonContainer: {
    marginHorizontal: 25,
    bottom: 15,
    width: width - 50,
    marginTop: 30
  },
});
