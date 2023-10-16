import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, family, size} from '../utils';
import NavService from '../helpers/NavService';
import {appIcons, appImages, appLogos} from '../assets';
import ProfileImage from '../components/ProfileImage';
import {logoutUser} from '../redux/actions/authAction';
const menuItems = [
  {
    icon: appIcons.home,
    title: 'Home',
    nav: 'BottomTabs',
  },
  {
    icon: appIcons.timequater,
    title: 'Previous Bookings',
    nav: 'PreviousBooking',
  },
  {
    icon: appIcons.plus,
    title: 'Add Vehicle',
    nav: 'VehicleDetail',
  },
  {
    icon: appIcons.dollor,
    title: 'Payment History',
    nav: 'PaymentHistory',
  },
  {
    icon: appIcons.livechat,
    title: 'Support Center',
    nav: 'SupportCenter',
  },

  {
    icon: appIcons.power,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: appIcons.logout,
    title: 'Logout',
    nav: 'logout',
  },
];
const userItem = [
  {
    icon: appIcons.home,
    title: 'Home',
    nav: 'BottomTabs',
  },
  {
    icon: appIcons.timequater,
    title: 'Previous Bookings',
    nav: 'PreviousBooking',
  },
  {
    icon: appIcons.info,
    title: 'Educational Content',
    nav: 'Profile',
  },
  {
    icon: appIcons.checklist,
    title: 'Checklist',
    nav: 'CheckList',
  },
  {
    icon: appIcons.livechat,
    title: 'Support Center',
    nav: 'SupportCenter',
  },

  {
    icon: appIcons.power,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: appIcons.logout,
    title: 'Logout',
    nav: 'logout',
  },
];

class Drawer extends Component {
  render() {
    const {user} = this.props;
    const RenderItem = ({item, index}) => {
      const {title, icon, nav} = item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (title === 'Logout') {
              this.props.logoutUser();
            } else if (item?.browser) {
              Linking.openURL(item?.browser);
            } else {
              this.props.navigation.navigate(nav);
            }
          }}
          style={{
            width: title == 'Logout' ? '60%' : '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            // borderBottomWidth: index == menuItems.length - 1 ? 0 : 0.5,
            // borderColor: colors.white,
            backgroundColor: title == 'Logout' ? colors.white : null,
            paddingHorizontal: 20,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: title == 'Logout' ? 40 : 0,
            paddingVertical: title == 'Logout' ? 5 : 0,
          }}>
          <View
            style={{
              paddingVertical: 10,
              borderRadius: 7,
              marginBottom: 5,
            }}>
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: title == 'Logout' ? null : colors.white,
                marginTop: title == 'Logout' ? 5 : 0,
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 10,
              color: title == 'Logout' ? colors.secondary : colors.white,
              fontSize: 16,
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.secondary,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            marginTop: 40,
            // flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            paddingBottom: 40,
            position: 'relative',
          }}>
          <Image
            source={appImages.profile}
            resizeMode="contain"
            style={{
              borderRadius: 50,
              width: 80,
              height: 80,
              borderWidth: 4,
              borderColor: colors.white,
            }}
          />

          <Text
            numberOfLines={1}
            style={{
              color: colors.white,
              fontSize: size.xsmall,
              marginTop: 10,
              fontFamily: family.Roboto_Regular,
            }}>
            Robert Fox
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: colors.white,
              fontSize: size.xxsmall,
              marginTop: 3,
              fontFamily: family.Roboto_Regular,
            }}>
            Robert.fox@email.com
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 10, width: '100%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={user.role == 'User' ? userItem : menuItems}
            style={{
              height: '100%',
              // paddingHorizontal: 20,
            }}
            renderItem={props => <RenderItem {...props} />}
          />
        </View>
      </View>
    );
  }
}

// // function mapState({user: {userData}}) {
// //   return {
// //     user: userData,
// //   };
// // }
// const actions = {logoutUser};
// export default connect(null, actions)(Drawer);
function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {logoutUser};
export default connect(mapStateToProps, actions)(Drawer);
