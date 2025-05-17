import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCard = ({title, desc}) => {
  return (
    <View style={styles.mainContainer} >
      <View style={styles.imgContainer} ><Image source={require("../assets/dummy_ic.png")} /></View>
      <View style={styles.detailsContainer} >
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "red",
        flexDirection: "column",
        width: 175,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#7C7C7C",
        height: 250
    },

    imgContainer: {
        flex: 1,
        backgroundColor: "yellow",
        
    },
    detailsContainer: {
        flex: 1,
        backgroundColor: "white"
    }
})