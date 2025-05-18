import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = ({title, desc, productPrice}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgView}
          source={require('../assets/dummy_ic.png')}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.productTitle}>{title}</Text>
          <Text style={styles.productDesc}>{desc}</Text>
        </View>

        <View style={styles.priceAndQuantitlyContainer}>
          <Text style={styles.priceText}>{productPrice}</Text>
          <View style={styles.quantitlyContainer}>
            <Ionicons name="add" size={17} color="#ffffff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    width: 175,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    height: 250,
  },

  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  imgView: {
    resizeMode: 'contain',
    width: '100%',
  },

  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
  },

  productDesc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7C7C7C',
  },

  priceAndQuantitlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },

  quantitlyContainer: {
    backgroundColor: '#53B175',
    borderRadius: 15,
    padding: 15,
  },
});
