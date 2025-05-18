import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchCard from '../components/SearchCard';
import ExploreProductCard from '../components/ExploreProductCard';

const categories = [
  {
    categoryName: "Fresh Fruits & Vegetable",
    bg_color: "#CDE990", // soft green
  },
  {
    categoryName: "Dairy & Eggs",
    bg_color: "#FFF3B0", // light yellow
  },
  {
    categoryName: "Beverages",
    bg_color: "#A0CED9", // pastel blue
  },
  {
    categoryName: "Snacks & Branded Foods",
    bg_color: "#FFD6A5", // warm beige
  },
  {
    categoryName: "Bakery & Biscuits",
    bg_color: "#F8C8DC", // baby pink
  },
  {
    categoryName: "Grains, Pulses & Flours",
    bg_color: "#F7C59F", // light peach
  },
  {
    categoryName: "Meat & Seafood",
    bg_color: "#C1DBB3", // muted green
  },
  {
    categoryName: "Cleaning & Household",
    bg_color: "#B5EAEA", // light aqua
  },
  {
    categoryName: "Personal Care",
    bg_color: "#D3C0F9", // soft lavender
  },
  {
    categoryName: "Baby Care",
    bg_color: "#FFDAC1", // peach-pink
  },
];

const ExploreScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText} >Find Products</Text>
      <View style={styles.searchContainer} >
        <SearchCard />
      </View>
      <View style={styles.exploreProductContainer} >
        <FlatList
        data={categories}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{paddingHorizontal: 25}}
        ItemSeparatorComponent={() => <View style={{width: 10, height: 10}} /> }
        renderItem={({item}) => <ExploreProductCard title={item.categoryName} bgColor={item.bg_color} /> }
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
    paddingTop: 60
  },

  titleText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#181725"
  },

  searchContainer: {
    marginTop: 20
  },

  exploreProductContainer: {
    marginTop: 20,
  }
});
