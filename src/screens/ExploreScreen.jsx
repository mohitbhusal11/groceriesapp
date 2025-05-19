import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchCard from '../components/SearchCard';
import ExploreProductCard from '../components/ExploreProductCard';

const categories = [
  {
    categoryName: 'Fresh Fruits & Vegetable',
    bg_color: '#CDE990',
    borderColor: '#A5BF6A', // darkened green
  },
  {
    categoryName: 'Dairy & Eggs',
    bg_color: '#FFF3B0',
    borderColor: '#D6C87D', // darker yellow
  },
  {
    categoryName: 'Beverages',
    bg_color: '#A0CED9',
    borderColor: '#76A4AE', // darker blue
  },
  {
    categoryName: 'Snacks & Branded Foods',
    bg_color: '#FFD6A5',
    borderColor: '#D7AE7E', // darker beige
  },
  {
    categoryName: 'Bakery & Biscuits',
    bg_color: '#F8C8DC',
    borderColor: '#D09FB4', // darker pink
  },
  {
    categoryName: 'Grains, Pulses & Flours',
    bg_color: '#F7C59F',
    borderColor: '#C79B73', // darker peach
  },
  {
    categoryName: 'Meat & Seafood',
    bg_color: '#C1DBB3',
    borderColor: '#99B28D', // darker muted green
  },
  {
    categoryName: 'Cleaning & Household',
    bg_color: '#B5EAEA',
    borderColor: '#8DC1C1', // darker aqua
  },
  {
    categoryName: 'Personal Care',
    bg_color: '#D3C0F9',
    borderColor: '#A394CC', // darker lavender
  },
  {
    categoryName: 'Baby Care',
    bg_color: '#FFDAC1',
    borderColor: '#D7B09A', // darker peach-pink
  },
];

const ExploreScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Find Products</Text>
      <View style={styles.searchContainer}>
        <SearchCard />
      </View>
      <View style={styles.exploreProductContainer}>
        <FlatList
          data={categories}
          numColumns={2}
          horizontal={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.contenContainerStyleSheet}
          ItemSeparatorComponent={() => <View style={{height: 5}} />}
          renderItem={({item}) => (
            <ExploreProductCard
              title={item.categoryName}
              bgColor={item.bg_color}
              borderColor={item.borderColor}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

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

  searchContainer: {
    marginTop: 20,
  },

  exploreProductContainer: {
    marginTop: 15,
    flex: 1
  },

  contenContainerStyleSheet: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
