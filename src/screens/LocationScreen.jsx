import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LocationScreen = ({navigation}) => {
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
        <Pressable style={styles.dropDownPressable} >
          <Text style={styles.dropDownText} >Banasree</Text>
          <AntDesign name="down" size={15} color="#7c7c7c" />
        </Pressable>
        <Text style={[styles.dropDownTitle, {marginTop: 30}]}>Your Zone</Text>
        <Pressable style={styles.dropDownPressable} >
          <Text style={styles.dropDownText} >Banasree</Text>
          <AntDesign name="down" size={15} color="#7c7c7c" />
        </Pressable>
      </View>

      <View style={styles.buttonView}>
                  <Pressable
                    style={styles.butonContainer}
                    android_ripple={{color: '#377b50'}}
                    onPress={() => navigation.navigate('mainAppScreen')}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </Pressable>
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
    flexDirection: "column",
    marginHorizontal: 25,
    marginTop: 90
  },

  dropDownTitle: {
    color: "#7c7c7c",
    fontSize: 16,
    fontWeight: "600"
  },

  dropDownPressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },

  dropDownText: {
    fontSize: 18,
    fontWeight: "500"
  },

  butonContainer: {
    backgroundColor: '#53B175',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 31,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
