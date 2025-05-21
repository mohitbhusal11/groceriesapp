import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopScreen from './ShopScreen';
import ExploreScreen from './ExploreScreen';
import CartScreen from './CartScreen';
import FavouriteScreen from './FavouriteScreen';
import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        initialRouteName="accountScreen"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            height: 70,
          },
        }}>
        <Tab.Screen
          name="homeScreen"
          options={{
            title: 'Shop',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={require('../assets/shop.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#53B175',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
          component={ShopScreen}
        />
        <Tab.Screen
          name="exploreScreen"
          options={{
            title: 'Explore',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={require('../assets/explore.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#53B175',
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
          component={ExploreScreen}
        />
        <Tab.Screen
          name="cartScreen"
          options={{
            title: 'Cart',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={require('../assets/cart.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#53B175',
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
          component={CartScreen}
        />
        <Tab.Screen
          name="favouriteScreen"
          options={{
            title: 'Favourite',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={require('../assets/favourite.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#53B175',
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
          component={FavouriteScreen}
        />
        <Tab.Screen
          name="accountScreen"
          options={{
            title: 'Account',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={require('../assets/account.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            },
            tabBarActiveTintColor: '#53B175',
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
