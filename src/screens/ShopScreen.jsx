import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProductsHeader from '../components/ProductsHeader';
import ProductCard from '../components/ProductCard';

const ShopScreen = () => {
  function seeAllProducts() {
    console.log('Hello');

    Alert.alert('Hello');
  }

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.topLogo}
        source={require('../assets/carrot_ic.png')}
      />
      <View style={styles.locationContainer}>
        <Ionicons name="location-sharp" size={30} color="#4C4F4D" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="#000"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search Store"
          placeholderTextColor={'grey'}
          style={styles.inputText}
          numberOfLines={1}
          keyboardType="web-search"
        />
      </View>

      <View style={styles.bannerContainer}>{/* Add viewpagger */}</View>

      <View style={styles.productHeaderContainer}>
        <ProductsHeader
          title={'Exclusive Offer'}
          btnName={'See all'}
          onPressable={seeAllProducts}
        />
      </View>

      <View style={styles.productsContainer}>
        <ProductCard title={"Red Apple"} desc={"1kg, 150/g"} />
      </View>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  topLogo: {
    width: 26,
    height: 30,
    alignSelf: 'center',
    marginTop: 58,
  },

  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4C4F4D',
  },

  searchContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: '#F2F3F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
  },

  inputText: {
    fontWeight: '600',
    fontSize: 14,
    padding: 0,
    marginHorizontal: 10,
    color: 'black',
    flexGrow: 1,
  },

  searchIcon: {
    marginVertical: 18,
    marginStart: 15,
  },

  bannerContainer: {
    height: 115,
    backgroundColor: 'blue',
    marginHorizontal: 25,
    marginTop: 20,
    borderRadius: 12,
  },

  productHeaderContainer: {
    marginTop: 30,
    marginHorizontal: 25,
  },

  productsContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});
