import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CheckOutButtonCard = ({children, totalPrice, callFunction}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.buttonContainer} onPress={callFunction} >
        <Text style={styles.textView}>{children}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${totalPrice}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CheckOutButtonCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: '#53B175',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  textView: {
    color: '#FCFCFC',
    fontSize: 16,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: "center"
  },
  priceContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  priceText: {
    color: '#FCFCFC',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
