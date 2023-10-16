import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabs} from '../tabs/BottomTabs';
import DrawerComp from '../../components/Drawer';
import { Usertab } from '../tabs/Usertab/Usertab';
import { Movertab } from '../tabs/Movertab/Movertab';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const UserAppStack = () => {
  const loggedInUser = useSelector(({authReducer}) => authReducer?.user);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'Home'}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="BottomTabs"
        component={
          loggedInUser?.role == 'User'
            ? Usertab
            : Movertab
        }
      />
    </Drawer.Navigator>
  );
};

export default UserAppStack;
