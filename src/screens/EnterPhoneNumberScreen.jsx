import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const EnterPhoneNumberScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <ImageBackground
        blurRadius={100}
        style={styles.imageBg}
        source={require('../assets/signup_flow_bg_ic.png')}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.touchableButton}>
          <Ionicons name="chevron-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Enter your mobile number</Text>
        <Text style={styles.descText}>Mobile Number</Text>
        <View style={styles.inputTextContainer}>
            <TextInput
              placeholder="+912233445566"
              placeholderTextColor="gray"
              keyboardType="number-pad"
              style={styles.inputText}
            />
          </View>
      </ImageBackground> */}

      <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.touchableButton}>
          <Ionicons name="chevron-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Enter your mobile number</Text>
        <Text style={styles.descText}>Mobile Number</Text>
        <View style={styles.inputTextContainer}>
            <TextInput
              placeholder="+912233445566"
              placeholderTextColor="gray"
              keyboardType="number-pad"
              style={styles.inputText}
            />
          </View>
          
      <KeyboardAwareScrollView style={styles.keyboardContainer}>
        <View style={styles.contentContainer} >
          <Pressable style={styles.nextBtn} onPress={()=> navigation.replace('otpScreen')} >
            <AntDesign style={styles.nextBtnImg} name="right" size={30} color="#ffffff" />
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EnterPhoneNumberScreen;

const styles = StyleSheet.create({
  inputText: {
    color: 'grey',
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 25,
  },

  inputTextContainer: {
    marginHorizontal: 25,
    paddingVertical: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
  },

  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "#ffffff",
  },

  imageBg: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    resizeMode: "stretch"
  },

  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    marginStart: 25,
    marginTop: 65
  },

  backImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  touchableButton: {
    marginTop: 25,
    marginStart: 25
  },

  descText: {
    marginTop: 28,
    marginStart: 25,
    fontSize: 16,
    fontWeight: "600",
    color: "#7c7c7c"
  },

  nextBtn: {
    backgroundColor: "#53B175",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center"
  },

  nextBtnImg: {
    color: "white",
    marginVertical: 29,
    marginHorizontal: 29
  },

  nextBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    position: "relative",
    bottom: "0"
  },

  keyboardContainer: {
  },

  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 25,
    marginHorizontal: 25
  }
});
