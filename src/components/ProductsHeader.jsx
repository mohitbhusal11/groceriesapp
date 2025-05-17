import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductsHeader = ({title, btnName, onPressable}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText} >{title}</Text>
      <Pressable onPress={onPressable} >
        <Text style={styles.btnText} >{btnName}</Text>
      </Pressable>
    </View>
  );
};

export default ProductsHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#181725"
  },

  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#53B175"
  }
});
