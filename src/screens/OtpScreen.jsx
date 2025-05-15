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

const OtpScreen = ({navigation}) => {
  return (
      <View style={styles.mainContainer}>
  
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.touchableButton}>
            <Ionicons name="chevron-back-outline" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Enter your 4-digit code</Text>
          <Text style={styles.descText}>Code</Text>
          <View style={styles.inputTextContainer}>
              <TextInput
                placeholder="-----"
                placeholderTextColor="gray"
                secureTextEntry={true}
                style={styles.inputText}
                maxLength={6}
              />
            </View>
            
        <KeyboardAwareScrollView style={styles.keyboardContainer}>
          <View style={styles.contentContainer} >
            <Pressable> <Text style={styles.resendText} >Resend Code</Text></Pressable>
            <Pressable style={styles.nextBtn} onPress={()=> navigation.replace('locationScreen')} >
              <AntDesign style={styles.nextBtnImg} name="right" size={30} color="#ffffff" />
            </Pressable>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
}

export default OtpScreen

const styles = StyleSheet.create({
    inputText: {
    color: 'grey',
    fontSize: 18,
    marginVertical: 10,
  },

  inputTextContainer: {
    marginHorizontal: 25,
    paddingVertical: 0,
    borderRadius: 8,
    borderBottomWidth: 1,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 25,
    flexDirection: "row"
  },

  resendText: {
    color: "#53B175"
  }
})