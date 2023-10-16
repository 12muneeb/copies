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
import Home from '../../../screens/Main/MoverScreen/Home';
import UserAppStack from '../../drawer/appDrawer';
import Settings from '../../../screens/settings/Settings';
import EditProfile from '../../../screens/Main/MoverScreen/EditProfile';
import EditVehicle from '../../../screens/Main/MoverScreen/EditVehicleDetail/EditVehicle';
import PreviousBooking from '../../../screens/Main/MoverScreen/PreviousBooking';
import VehicleDetail from '../../../screens/Main/MoverScreen/AddVehicle/VehicleDetail';
import PaymentHistory from '../../../screens/Main/MoverScreen/PaymentHistory';
import UserProfile from '../../../screens/Main/MoverScreen/UserProfile/UserProfile';
import IncomingRequest from '../../../screens/Main/MoverScreen/IncomingRequest/IncomingRequest';
import PreviousBookingDetail from '../../../screens/Main/MoverScreen/PerviousBookingDetail/PreviousBookingDetail';
import CardDetail from '../../../screens/Main/Other/CardDetails/CardDetails';
import UnblockProfile from '../../../screens/Main/MoverScreen/UnblockProfile/UnblockProfile';
import InProgress from '../../../screens/Main/MoverScreen/InProgess/InProgress';
import Message from '../../../screens/Main/Other/Message';
import SupportCenter from '../../../screens/Main/Other/SupportCenter';
const Stack = createNativeStackNavigator();

const MoverStack = ({initialRoute}) => {
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
      <Stack.Screen name="EditVehicle" component={EditVehicle} />
      <Stack.Screen name="PreviousBooking" component={PreviousBooking} />
      <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="IncomingRequest" component={IncomingRequest} />
      <Stack.Screen name="PreviousBookingDetail" component={PreviousBookingDetail} />
      <Stack.Screen name="CardDetail" component={CardDetail} />
      <Stack.Screen name="UnblockProfile" component={UnblockProfile} />
      <Stack.Screen name="InProgress" component={InProgress} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="SupportCenter" component={SupportCenter} />














    </Stack.Navigator>
  );
};

export default MoverStack;
