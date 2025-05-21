import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SettingOptionsCard from '../components/SettingOptionsCard';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileDetailsContainer}>
        <Image
          style={styles.imgView}
          source={require('../assets/profile_ic.jpg')}
        />
        <View style={styles.nameAndGmailContainer}>
          <View style={styles.nameViewContainer}>
            <Text style={styles.nameText}>Afsar Hossen</Text>
            <Image
              style={styles.editImgView}
              source={require('../assets/edit_ic.png')}
            />
          </View>

          <Text style={styles.gmailText}>Imshuvo97@gmail.com</Text>
        </View>
      </View>
      <View style={styles.dividerView} />
      <SettingOptionsCard
        myIcon={<Feather name="shopping-bag" size={20} color="black" />}
      >
        Orders
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<MaterialIcons name="payment" size={20} color="black" />}
      >
        My Details
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<Ionicons name="location-outline" size={20} color="black" />}
      >
        Delivery Address
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<MaterialIcons name="payment" size={20} color="black" />}
      >
        Payment Methods
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<Ionicons name="ticket-outline" size={20} color="black" />}
      >
        Promo Cord
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<Ionicons name="notifications-outline" size={20} color="black" />}
      >
        Notifications
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<Feather name="help-circle" size={20} color="black" />}
      >
        Help
      </SettingOptionsCard>

      <SettingOptionsCard
        myIcon={<Feather name="info" size={20} color="black" />}
      >
        About
      </SettingOptionsCard>

      <View style={styles.btnContainer} >
        <Pressable style={styles.pressableView} >
          <MaterialIcons size={18} style={styles.logoutIcon} name="logout" color="#53B175" />
          <Text style={styles.logoutText} >Log Out</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
  },

  profileDetailsContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 20,
  },

  imgView: {
    width: 65,
    height: 65,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#53B175',
  },

  nameAndGmailContainer: {
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginStart: 20,
  },

  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },

  gmailText: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#7C7C7C',
  },

  nameViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  editImgView: {
    width: 15,
    height: 15,
    marginStart: 10,
  },

  dividerView: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 30,
  },

  btnContainer: {
    flex: 1,
  },

  pressableView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    paddingVertical: 26,
    marginTop: 52,
    marginHorizontal: 25,
    borderRadius: 20,
  },

  logoutIcon: {
    position: "absolute",
    left: 25
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#53B175"
  }
});
