import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FavouriteCard = ({productName, productDesc, productPrice}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.imgView}
        source={require('../assets/dummy_ic.png')}
      />
      <View style={styles.productDescContainer}>
        <View style={styles.productDetailsConatiner}>
          <Text style={styles.productNameText}> {productName} </Text>
          <Text style={styles.productDescText}> {productDesc} </Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}> {productPrice} </Text>
        <AntDesign style={{marginLeft: 10}} name="right" size={15} color="black" />
      </View>
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },

  imgView: {
    width: 70,
    aspectRatio: 70 / 64,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  productDescContainer: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'flex-start',
    flexGrow: 1,
    marginHorizontal: 30,
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  quantityBtn: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },

  productDetailsConatiner: {},

  productNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
  },

  productDescText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#7C7C7C',
    marginTop: 5,
  },

  quantityText: {
    marginHorizontal: 17,
    fontSize: 18,
    fontWeight: 'bold',
  },

  crossIcon: {},

  bottomDividerView: {
    marginTop: 30,
    height: 1,
    backgroundColor: '#E2E2E2',
  },
});
