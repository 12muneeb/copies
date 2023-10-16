import React, {Children, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  Platform,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {appIcons} from '../assets';
import {colors, size, family} from '../utils';
import CustomText from './CustomText';
import appStyles from '../screens/appStyles';
import Shadows from '../helpers/Shadows';
import CustomButton from './CustomButton';
import ActionSheetComponent from './ActionSheetComponent';

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    Iconcolor,
    Lineiconcolor,
    Lineicon,
    onSubmitEditing,
    labeltext,
    label,
    multiline,
    rightImage,
    rightimagetext,
    rightImagetintColor,
    textInputStyles,
    onChangeText,
    handlePress,
    rightIcons,
    styleRight,
    rightline,
    handleRightPress,

  } = props;
  return (
    <View>
      <View
        style={[
          {
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.darkBlue,
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 2,
            height: 55,
            borderWidth: 2,
            borderColor: colors.secondary,
            // marginVertical: 0,
            // backgroundColor:'red',
            ...Shadows.shadow3,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: Iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}

        {props?.Lineicon ? (
          <Image
            source={props?.Lineicon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: Lineiconcolor,
              marginHorizontal: -10,
            }}
          />
        ) : null}
        <View
          style={[
            {
              flex: 1,
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              // alignItems: 'center',
              // borderLeftWidth: 0
            },
            borderStyles,
          ]}>
          <TextInput
            placeholderTextColor={props?.placeholderColor || colors.black}
            multiline={multiline}
            returnKeyType="done"
            blurOnSubmit={true}
            style={[
              {
                flex: 1,
                color: colors.black,
                // left: label ? -1 : 0,
                // alignItems: 'center',
                // top: label ? 7 : 0,
                // justifyContent: 'center',
                // marginTop: label ? -20 : Platform.OS == 'android' ? 0 : 0,
                fontSize: size.xsmall,
                fontFamily: family.Poppins_Medium,
              },
              textInputStyles,
            ]}
            secureTextEntry={hidden}
            autoCapitalize="none"
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            {...props}
          />
          {/* <TextInput
            placeholderTextColor={props?.placeholderColor || colors.black}
            style={{
              flex: 1,
              color: colors.black,
              // backgroundColor: 'red',
              // paddingTop: 12,
              left: label ? -1 : 0,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: label ? -10 : 0,
              // paddingLeft: 10,
              fontSize: size.small,
              fontFamily: family.Outfit_Regular,
            }}
            secureTextEntry={hidden}
            autoCapitalize="none"
            {...props}
          /> */}
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.eye : appIcons.eyeNot}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {rightline && (
            <View style={{right: 20, bottom: 1}}>
              <CustomText
                text="|"
                style={{fontSize: size.h3, color: colors.black}}
              />
            </View>
          )}
      
          {props?.rightIcons && (
            <TouchableOpacity activeOpacity={0.8} onPress={handleRightPress}>
              <Image
                source={props?.rightIcons}
                style={[
                  {
                    height: 18,
                    width: 18,
                    resizeMode: 'contain',
                    right: 10,
                  },
                  styleRight,
                ]}
              />
            </TouchableOpacity>
          )}

          {props?.rightImage && (
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.8}
              style={{
                position: 'absolute',
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 13,
                marginRight: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={rightImage}
                style={{
                  tintColor: rightImagetintColor,
                  height: 18,
                  width: 18,
                  resizeMode: 'contain',
                }}
              />
              {/* <CustomText
                style={{
                  color: colors.secondary,
                  ...appStyles.family_Poppins_Medium,
                  ...appStyles.font13,
                }}
                text={rightimagetext}
              /> */}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const {icon} = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        paddingHorizontal: 10,

        // backgroundColor: colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{width: 15, height: 15, resizeMode: 'contain'}}
      />

      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: colors.primary,
          marginLeft: 10,
          fontFamily: family.Outfit_Regular,
        }}
        placeholderTextColor={'#7E7E7E'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    phoneNumber,
  } = props;
  return (
    <View>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.darkBlue,
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
            borderWidth: 2,
            borderColor: colors.secondary,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.secondary,
              marginHorizontal: 10,
              // marginTop: 5,
            }}
          />
        ) : null}
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            alignItems: 'center',
            // borderLeftWidth: 1,
            borderLeftColor: colors.border,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              style={{
                flex: 1,
                color: colors.black,
                paddingLeft: 10,
                fontSize: size.small,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                      dddMask: '9 (999) 999 - ',
                    }
                  : {
                      dddMask: '(999) 999 - ',
                    }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
