import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingOptionsCard = ({children, myIcon}) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.rightSideContainer}>
          {myIcon}
          <Text>{children}</Text>
        </View>
        <AntDesign name="right" size={15} color="black" />
      </View>
      <View style={styles.dividerView} />
    </View>
  );
};

export default SettingOptionsCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },

  rightSideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  
    dividerView: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 20,
  },
});
