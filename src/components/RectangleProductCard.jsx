import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RectangleProductCard = ({productName, bgColor}) => {
  return (
    <View style={[styles.mainContainer, {backgroundColor: bgColor}]}>
      <Image
        style={styles.imgView}
        source={require('../assets/pulses_ic.png')}
      />
      <Text style={styles.titleText}>{productName}</Text>
    </View>
  );
};

export default RectangleProductCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: 250,
    height: 105,
    backgroundColor: '#F8A44C',
    borderRadius: 18,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imgView: {
    resizeMode: 'contain',
    width: 71,
    margin: 15
  },

  titleText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#3E423F',
  },
});
