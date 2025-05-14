import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewComponent,
} from 'react-native';
import React from 'react';
import SocialLoginButton from '../components/SocialLoginButton';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>

      <ScrollView>

      <View>
        <Image
          source={require('../assets/signin_screen_bg.png')}
          style={styles.bgImage}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>
          Get your groceries{'\n'}with nectar
        </Text>
        <Pressable style={styles.inputTextContainer} onPress={() => navigation.navigate('enterPhoneNumber')} >
          <Text style={styles.inputText} >
            +912233445566
          </Text>
        </Pressable>

        <Text style={styles.connectWithSocialText}>
          Or connect with social media
        </Text>

        <View style={styles.socialButtonContainer}>
          <SocialLoginButton
            color="#5383EC"
            textColor="#ffffff"
            icon={require('../assets/google_ic.png')}>
            Continue with Google
          </SocialLoginButton>

          <SocialLoginButton
            color="#4A66AC"
            textColor="#FCFCFC"
            icon={require('../assets/google_ic.png')}>
            Continue with Google
          </SocialLoginButton>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#FCFCFC',
    flex: 1,
  },

  bgImage: {
    width: '100%',
    height: 375,
    resizeMode: 'cover',
  },

  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  titleText: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 50,
    marginHorizontal: 25,
    lineHeight: 40,
  },

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

  connectWithSocialText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'grey',
    textAlign: 'center',
    marginTop: 40,
  },

  socialButtonContainer: {
    marginTop: 38,
    gap: 20,
  },
});
