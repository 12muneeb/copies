import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabBar from '../../components/TabbarComponent';
// import {HP, colors, platform} from '../../utils';
import Home from '../../../screens/Main/MoverScreen/Home';
import Review from '../../../screens/Main/MoverScreen/Rating&Review/Review';
import Profile from '../../../screens/Main/MoverScreen/Profile';
import ChatList from '../../../screens/Main/Other/Chat/Chatlist';
import TabBar from '../../../components/TabbarComponent';
import {HP,colors,platform} from '../../../utils'
const Tab = createBottomTabNavigator();

export const Movertab = () => {
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
      <Tab.Screen name="Review" component={Review} />
      <Tab.Screen name="ChatList" component={ChatList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
