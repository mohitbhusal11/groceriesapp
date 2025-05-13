import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/onboarding_screen.png')}
        style={styles.image}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/app_icon.png')}
            style={styles.logoImg}
          />

          <View style={styles.textContainer}>
            <Text style={styles.titletext}>Welcome</Text>
            <Text style={styles.titletext}>to our store</Text>
            <Text style={styles.desctext}>
              Ger your groceries in as fast as one hour
            </Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable style={styles.butonContainer} android_ripple={{color: "#377b50"}} 
            onPress={() => navigation.replace('signin')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },

  logoImg: {
    width: 48,
    height: 56,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 31,
  },

  contentContainer: {
    marginBottom: 90
  },

  titletext: {
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },

  textContainer: {
    paddingTop: 36,
  },

  desctext: {
    color: '#b3b3b3',
    marginTop: 19,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  butonContainer: {
    backgroundColor: '#53B175',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 31,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  }
});
