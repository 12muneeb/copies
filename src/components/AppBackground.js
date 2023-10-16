import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets/index';
import {appImages} from '../assets';
import {colors} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';

function AppBackground({
  children,
  title,
  back = false,
  menu = false,
  nav = '',
  rightIcon = appIcons.notification,
  marginHorizontal = true,
  edit,
  celendar,
  chat,
  popup,
  handlePopup,
  childrenContainerStyle = {},
  rightIconNav = () => {
    NavService.navigate('Notification');
  },
  notification = false,
}) {
  return (
    <View style={{flex: 1, backgroundColor:colors.white}}>
      <View
        style={{
          marginTop: getStatusBarHeight() * 1.4,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
          
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              nav.length
                ? NavService.navigate(nav)
                : back
                ? NavService.goBack()
                : NavService.openDrawer();
            }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: menu ? colors.secondary : 'transparent',
              borderRadius: menu ? 10 : 0,
              left: 20,
              width: 40,
              height: 40,
              justifyContent: 'center',
              // ...Shadows.shadow3,
            }}>
            {back && (
              <Image
                source={appIcons.back}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.secondary,
                }}
              />
            )}
            {menu && (
              <Image
                source={appIcons.drawer}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            )}
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: '700',
                fontSize: 20,
              }}>
              {title}
            </Text>
          </View>
          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Notification');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.secondary,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 24,
                  height: 27,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('EditProfile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.secondary,
              }}>
              <Image
                source={appIcons.edit}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {celendar && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // NavService.navigate('EditProfile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.secondary,
              }}>
              <Image
                source={appIcons.celendar}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
             {popup && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePopup}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
               
              }}>
              <Image
                source={appIcons.popup}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
               {chat && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Message');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: colors.secondary,
              }}>
              <Image
                source={appIcons.chat}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
