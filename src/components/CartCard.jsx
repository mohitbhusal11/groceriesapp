import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const CartCard = ({productName, productDesc, productPrice}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.imgView}
        source={require('../assets/dummy_ic.png')}
      />
      <View style={styles.productDescContainer}>
        <View style={styles.productDetailsConatiner}>
          <Text style={styles.productNameText} > {productName} </Text>
          <Text style={styles.productDescText} > {productDesc} </Text>
        </View>

        <View style={styles.quantityContainer}>
          <Pressable style={styles.quantityBtn}>
            <AntDesign name="minus" size={17} color="#B3B3B3" />
          </Pressable>
          <Text style={styles.quantityText} >1</Text>
          <Pressable style={styles.quantityBtn}>
            <Ionicons name="add" size={17} color="#53B175" />
          </Pressable>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Entypo style={styles.crossIcon} name="cross" size={25} color="#B3B3B3" />
        <Text style={styles.priceText}> {productPrice} </Text>
      </View>
    </View>
  );
};

export default CartCard;

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
    alignSelf: "center"
  },

  productDescContainer: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 1,
    marginHorizontal: 30
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },

  quantityBtn: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2"
  },

  priceContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },

  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725"
  },

  productDetailsConatiner: {},

  productNameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725"
  },

  productDescText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#7C7C7C",
    marginTop: 5
  },

  quantityText: {
    marginHorizontal: 17,
    fontSize: 18,
    fontWeight: "bold"
  },

  crossIcon: {

  },

  bottomDividerView: {
    marginTop: 30,
    height: 1,
    backgroundColor: "#E2E2E2"
  }
});
