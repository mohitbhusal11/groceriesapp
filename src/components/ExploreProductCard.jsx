import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExploreProductCard = ({title, bgColor}) => {
  return (
    <View style={[styles.mainContainer, {backgroundColor: bgColor}]} >
        <Image style={styles.imgView} source={require("../assets/dummy_ic.png")} />
      <Text style={styles.titleText} >{title}</Text>
    </View>
  )
}

export default ExploreProductCard

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 18
    },

    imgView: {
        resizeMode: "contain",
        height: 75,
        marginHorizontal: 25,
        marginTop: 15
    },

    titleText: {
        marginBottom: 15,
        marginHorizontal: 25,
        fontSize: 16,
        fontWeight: "600",
        color: "#181725"
    }
})