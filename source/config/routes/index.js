import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  SplashScreenPage,
  LoginPage,
  HalamanUtamaPage,
  ProfilePage,
  ActivityPage,
  MateriListPage,
  DetailMateriPage,
  NotFoundPage,
} from '../../page/index';

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="SplashScreenPage">
    <Stack.Screen
      name="HalamanUtamaPage"
      component={BottomTabs}
      options={{
        title: 'HalamanUtamaPage',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{
        title: 'LoginPage',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SplashScreenPage"
      component={SplashScreenPage}
      options={{
        title: 'SplashScreenPage',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NotFoundPage"
      component={NotFoundPage}
      options={{
        title: 'NotFoundPage',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MateriListPage"
      component={MateriListPage}
      options={{
        title: 'List Materi',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="DetailMateriPage"
      component={DetailMateriPage}
      options={{
        title: 'Detail Materi',
        headerShown: true,
        options: {
          headerTitleStyle: {
            alignItems: 'center',
          },
        }
      }}
    />
  </Stack.Navigator>
);

const BottomTabs = () => {
    return(
        <MaterialBottom.Navigator
            shifting={false}
            activeColor="#E56F02"
            inactiveColor="#676767"
            barStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0.3, borderColor: 'lightGrey' }}
        >
            <MaterialBottom.Screen name="HalamanUtamaPage" component={HalamanUtamaPage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#E56F02" ?
                                    // <Image source={{ uri: 'https://test123-xx-project.000webhostapp.com/test_01/assets/icon/home-active.png' }} style={{ height: 30, width: 30 }} />
                                    <Icon name="home" size={25} color="#E56F02" />
                                    :
                                    <Icon name="home" size={25} />
                            }
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="MateriListPage" component={MateriListPage}
                options={{
                    tabBarLabel: 'Institue',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#E56F02" ?
                                    <Icon name="book" size={25} color="#E56F02" />
                                    :
                                    <Icon name="book" size={25} />
                            }
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="ProfilePage" component={ProfilePage}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#E56F02" ?
                                    <Icon name="people" size={25} color="#E56F02" />
                                    :
                                    <Icon name="people" size={25} />
                            }
                        </View>
                    )
                }}
            />
        </MaterialBottom.Navigator>
    )
}

export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <HomeStack />
            </NavigationContainer>
        );
    }
}
