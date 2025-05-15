import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationScreen = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.touchableButton}>
        <Ionicons name="chevron-back-outline" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image style={styles.mapImg} source={require('../assets/map_ic.png')} />
      </View>
      <Text style={styles.titleText}>Select Your Location</Text>
      <Text style={styles.descText}>
        Switch on your location to stay in tune with what’s happening in your
        area
      </Text>
      <View style={styles.zoneAreaContainer}>
        <Text style={styles.dropDownTitle}>Your Zone</Text>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  touchableButton: {
    marginTop: 25,
    marginStart: 25,
  },

  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff',
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },

  mapImg: {
    aspectRatio: 16 / 9,
    height: 170,
    resizeMode: 'center',
  },

  titleText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 26,
    fontWeight: '600',
    color: '#181725',
  },

  descText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#7c7c7c',
    marginHorizontal: 45,
  },

  zoneAreaContainer: {
    backgroundColor: "yellow",
    flexDirection: "column",
    marginHorizontal: 25,
    marginTop: 90
  },

  dropDownTitle: {
    color: "#7c7c7c",
    fontSize: 16,
    fontWeight: "600"
  }
});
