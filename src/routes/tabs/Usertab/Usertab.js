import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabBar from '../../components/TabbarComponent';
// import {HP, colors, platform} from '../../utils';
import Home from '../../../screens/Main/UserScreens/Home';
import ChatList from '../../../screens/Main/Other/Chat/Chatlist';
import Profile from '../../../screens/Main/UserScreens/Profile';
import TabBar from '../../../components/TabbarComponent';
import MyBookings from '../../../screens/Main/UserScreens/MyBookings/MyBookings';
import { HP,colors,platform } from '../../../utils';

const Tab = createBottomTabNavigator();

export const Usertab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyBookings" component={MyBookings} />
      <Tab.Screen name="ChatList" component={ChatList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
