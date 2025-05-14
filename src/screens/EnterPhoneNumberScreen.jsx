import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';


const EnterPhoneNumberScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        blurRadius={100}
        style={styles.imageBg}
        source={require('../assets/signup_flow_bg_ic.png')}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Ionicons name="chevron-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Enter your mobile number</Text>
      </ImageBackground>
      <KeyboardAwareScrollView>
        <View>
          <View style={styles.inputTextContainer}>
            <TextInput
              placeholder="+912233445566"
              placeholderTextColor="gray"
              keyboardType="number-pad"
              style={styles.inputText}
            />
          </View>
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
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 30,
  },

  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red',
  },

  imageBg: {
    height: 233,
  },

  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 25,
  },

  backImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
