import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductsHeader from '../components/ProductsHeader';
import ProductCard from '../components/ProductCard';
import RectangleProductCard from '../components/RectangleProductCard';
import SearchCard from '../components/SearchCard';

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

const dummyProduct = [
  {
    productName: 'Pulses',
    bg_color: '#F8A44C', // soft orange
  },
  {
    productName: 'Rice',
    bg_color: '#53B175', // mint green
  },
  {
    productName: 'Wheat Flour',
    bg_color: '#F7C59F', // light peach
  },
  {
    productName: 'Lentils',
    bg_color: '#C1DBB3', // soft green
  },
  {
    productName: 'Chickpeas',
    bg_color: '#FCE38A', // pastel yellow
  },
  {
    productName: 'Sugar',
    bg_color: '#B5EAEA', // light aqua
  },
  {
    productName: 'Salt',
    bg_color: '#AEDFF7', // light blue
  },
  {
    productName: 'Cooking Oil',
    bg_color: '#FFD6A5', // warm beige
  },
  {
    productName: 'Spices',
    bg_color: '#FFB5A7', // coral pink
  },
  {
    productName: 'Tea Leaves',
    bg_color: '#B4F8C8', // mint pastel
  },
];

const ShopScreen = () => {
  function seeAllProducts() {
    console.log('Hello');

    Alert.alert('Hello');
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        style={styles.topLogo}
        source={require('../assets/carrot_ic.png')}
      />
      <View style={styles.locationContainer}>
        <Ionicons name="location-sharp" size={30} color="#4C4F4D" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>

      <View style={styles.searchContainer} >
        <SearchCard />
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
        <FlatList
          data={productData}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingHorizontal: 25}}
          renderItem={({item}) => (
            <ProductCard
              title={item.productName}
              desc={item.productDesc}
              productPrice={item.productPrice}
            />
          )}
        />
      </View>

      <View style={styles.productHeaderContainer}>
        <ProductsHeader
          title={'Best Selling'}
          btnName={'See all'}
          onPressable={seeAllProducts}
        />
      </View>

      <View style={styles.productsContainer}>
        <FlatList
          data={productData}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingHorizontal: 25}}
          renderItem={({item}) => (
            <ProductCard
              title={item.productName}
              desc={item.productDesc}
              productPrice={item.productPrice}
            />
          )}
        />
      </View>

      <View style={styles.productHeaderContainer}>
        <ProductsHeader
          title={'Groceries'}
          btnName={'See all'}
          onPressable={seeAllProducts}
        />
      </View>

      <View style={styles.rectangleProductContainer}>
        <FlatList
          data={dummyProduct}
          horizontal
          contentContainerStyle={{paddingHorizontal: 25}}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          renderItem={({item}) => (
            <RectangleProductCard
              productName={item.productName}
              bgColor={item.bg_color}
            />
          )}
        />
      </View>

      <View style={styles.productsContainer}>
        <FlatList
          data={productData}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingHorizontal: 25}}
          renderItem={({item}) => (
            <ProductCard
              title={item.productName}
              desc={item.productDesc}
              productPrice={item.productPrice}
            />
          )}
        />
      </View>
    </ScrollView>
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
  },

  rectangleProductContainer: {
    marginTop: 20,
  },

  searchContainer: {
    marginTop: 20
  }
});
