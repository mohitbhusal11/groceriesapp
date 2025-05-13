import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingScreen from './src/screens/OnboardingScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';


const stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <stack.Navigator screenOptions={{headerShown: false}} initialRouteName='onboarding'>

        <stack.Screen name='onboarding' component={OnboardingScreen}/>
        <stack.Screen name='signin' component={SignInScreen }/>

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