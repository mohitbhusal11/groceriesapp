import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingScreen from './src/screens/OnboardingScreen'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <OnboardingScreen/>
    </View>
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