import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SocialLoginButton = ({children, color, textColor, icon}) => {
  return (
    <View style={[styles.mainContainer, {backgroundColor: color}]}>
      <Image style={styles.socialIcon} source={icon} />
      <Text style={[styles.buttonText, {color: textColor}]}>{children}</Text>
    </View>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: "start",
    marginHorizontal: 25,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    marginStart: 40,

  },

  socialIcon: {
    height: 25,
    marginStart: 35,
    marginVertical: 21
  }

});
