// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// drawerComponentt

// @stack screens
// import HomeStack from '.././stacks/HomeStack';
// import GroupStack from '.././stacks/GroupStack';
// import CategoryStack from '.././stacks/CategoryStack';
// import CheckOutfitStack from './CheckOutfitStack';
// screens
import Home from '../../../screens/Main/UserScreens/Home';
import UserAppStack from '../../drawer/appDrawer';
import Settings from '../../../screens/settings/Settings';
import EditProfile from '../../../screens/Main/UserScreens/EditProfile';
import OngoingBookingDetails from '../../../screens/Main/UserScreens/OngoingBookingDetails/OngoingBookingDetails';
import Message from '../../../screens/Main/Other/Message';
import MoverProfile from '../../../screens/Main/UserScreens/MoverProfile/MoverProfile';
import RatingReview from '../../../screens/Main/UserScreens/Rating&Review';
import CheckList from '../../../screens/Main/UserScreens/CheckList/CheckList';
import CreateCheckList from '../../../screens/Main/UserScreens/CreateCheckList/CreateCheckList';
import MoverReservation from '../../../screens/Main/UserScreens/MoverReserVation/MoverReservation';
import BookingDetails from '../../../screens/Main/UserScreens/BookingDetails/BookingDetails';
import PaymentMethod from '../../../screens/Main/UserScreens/PaymentMethod/PaymentMethod';
import SubscriptionPayment from '../../../screens/Main/UserScreens/SubscriptionPayment/SubscriptionPayment';
import CheckListDetails from '../../../screens/Main/UserScreens/CheckListDetails/CheckListDetails';
import EditCheckList from '../../../screens/Main/UserScreens/EditCheckList/EditCheckList';
import TrackLocation from '../../../screens/Main/UserScreens/TrackLocation/TrackLocation';
import SearchResult from '../../../screens/Main/UserScreens/SearchResult/SearchResult';
import UnblockProfile from '../../../screens/Main/MoverScreen/UnblockProfile/UnblockProfile';
import CardDetail from '../../../screens/Main/Other/CardDetails/CardDetails';
const Stack = createNativeStackNavigator();

const UserStack = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="OngoingBookingDetails" component={OngoingBookingDetails} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="MoverProfile" component={MoverProfile} />
      <Stack.Screen name="RatingReview" component={RatingReview} />
      <Stack.Screen name="CheckList" component={CheckList} />
      <Stack.Screen name="CreateCheckList" component={CreateCheckList} />
      <Stack.Screen name="MoverReservation" component={MoverReservation} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="SubscriptionPayment" component={SubscriptionPayment} />
      <Stack.Screen name="CheckListDetails" component={CheckListDetails} />
      <Stack.Screen name="EditCheckList" component={EditCheckList} />
      <Stack.Screen name="TrackLocation" component={TrackLocation} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="UnblockProfile" component={UnblockProfile} />
      <Stack.Screen name="CardDetail" component={CardDetail} />








      





    </Stack.Navigator>
  );
};

export default UserStack;
