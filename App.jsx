import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingScreen from './src/screens/OnboardingScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import EnterPhoneNumberScreen from './src/screens/EnterPhoneNumberScreen';
import OtpScreen from './src/screens/OtpScreen';
import LocationScreen from './src/screens/LocationScreen';
import MainScreen from './src/screens/MainScreen';


const stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <stack.Navigator screenOptions={{headerShown: false}} initialRouteName='mainAppScreen'>

        <stack.Screen name='onboarding' component={OnboardingScreen}/>
        <stack.Screen name='signin' component={SignInScreen }/>
        <stack.Screen name='enterPhoneNumber' component={EnterPhoneNumberScreen }/>
        <stack.Screen name='otpScreen' component={OtpScreen }/>
        <stack.Screen name='locationScreen' component={LocationScreen }/>
        <stack.Screen name='mainAppScreen' component={MainScreen }/>

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#53B175"
  }
})