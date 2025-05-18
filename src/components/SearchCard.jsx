import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const SearchCard = () => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={20} color="#000" style={styles.searchIcon} />
      <TextInput
        placeholder="Search Store"
        placeholderTextColor={'grey'}
        style={styles.inputText}
        numberOfLines={1}
        keyboardType="web-search"
      />
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  searchContainer: {
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
});
