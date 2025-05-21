import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SimpleLargeBtn = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.textView}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default SimpleLargeBtn

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: '#53B175',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  textView: {
    color: '#FCFCFC',
    fontSize: 16,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: "center"
  },
});