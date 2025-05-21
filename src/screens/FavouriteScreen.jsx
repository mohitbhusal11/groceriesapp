import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckOutButtonCard from '../components/CheckOutButtonCard';
import FavouriteCard from '../components/FavouriteCard';
import SimpleLargeBtn from '../components/SimpleLargeBtn';

const productData = [
  {
    productName: 'Apple',
    productDesc: '1kg, 150/g',
    productPrice: '$4.99',
    quantity: 0,
  },
  {
    productName: 'Banana',
    productDesc: '1 dozen, 60/g',
    productPrice: '$2.49',
    quantity: 0,
  },
  {
    productName: 'Orange',
    productDesc: '1kg, 120/g',
    productPrice: '$3.99',
    quantity: 0,
  },
  {
    productName: 'Grapes',
    productDesc: '500g, 200/g',
    productPrice: '$2.99',
    quantity: 0,
  },
  {
    productName: 'Mango',
    productDesc: '1kg, 180/g',
    productPrice: '$5.49',
    quantity: 0,
  },
  {
    productName: 'Watermelon',
    productDesc: '1 piece, 25/kg',
    productPrice: '$6.99',
    quantity: 0,
  },
  {
    productName: 'Strawberry',
    productDesc: '250g, 300/g',
    productPrice: '$3.49',
    quantity: 0,
  },
  {
    productName: 'Blueberry',
    productDesc: '150g, 350/g',
    productPrice: '$4.79',
    quantity: 0,
  },
  {
    productName: 'Pineapple',
    productDesc: '1 piece, 50/kg',
    productPrice: '$3.89',
    quantity: 0,
  },
  {
    productName: 'Kiwi',
    productDesc: '500g, 250/g',
    productPrice: '$4.29',
    quantity: 0,
  },
  {
    productName: 'Papaya',
    productDesc: '1 piece, 45/kg',
    productPrice: '$3.19',
    quantity: 0,
  },
];

const { width, height } = Dimensions.get('window');

const FavouriteScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Favorurite</Text>
      <View style={styles.dividerView}></View>
      <View style={styles.cartProductContainer}>
        <FlatList
          data={productData}
          renderItem={({item}) => (
            <FavouriteCard
              productName={item.productName}
              productDesc={item.productDesc}
              productPrice={item.productPrice}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{height: 1, backgroundColor: '#E2E2E2', marginTop: 30}}
            />
          )}
          contentContainerStyle={{paddingHorizontal: 25, paddingBottom: 25}}
        />
      </View>
      <View style={styles.checkoutButtonContainer}>
        <SimpleLargeBtn>Add All To Cart</SimpleLargeBtn>
      </View>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingTop: 60,
  },

  titleText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#181725',
  },

  dividerView: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 32,
  },

  cartProductContainer: {
    flex: 1,
  },

  checkoutButtonContainer: {
    position: 'absolute',
    marginHorizontal: 25,
    bottom: 15,
    width: width - 50,
  },
});
