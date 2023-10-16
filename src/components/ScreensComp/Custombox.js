import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appIcons, appImages} from '../../assets';
import Shadows from '../../helpers/Shadows';
import {size, colors, family} from '../../utils';
import Img from '../Img';
import CustomText from '../CustomText';

const Custombox = ({
  item,
  rightarrow,
  rightbtn,
  address,
  time,
  locate,
  handleProfile,
  handleAccept,
  handleReject,
  handleArrow,
}) => {
  return (
    <Pressable
    onPress={handleArrow}
      style={[
        styles.container,
        {
          paddingVertical: rightbtn ? 25 : 15,
          alignItems: time ? 'center' : 'flex-start',
        },
      ]}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleProfile}>
        <Img
          local
          src={appImages.profile}
          resizeMode={'contain'}
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={{marginHorizontal: 10}}>
        <CustomText
          style={{
            fontSize: size.xsmall,
            color: colors.black,
            fontFamily: family.Roboto_Bold,
          }}
          text={item.name}
        />
        {address && (
          <>
            <Text
              style={{
                fontSize: size.xxsmall,
                fontFamily: family.Roboto_Regular,
                color: colors.black,
              }}>
              Address:{' '}
              <CustomText
                style={{
                  fontSize: size.tiny,
                  fontFamily: family.Roboto_Regular,
                  color: colors.black,
                }}
                text={item.address}
              />
            </Text>
            <Text
              style={{
                fontSize: size.xxsmall,
                fontFamily: family.Roboto_Regular,
                color: colors.black,
              }}>
              Distance: <Text>{item.distance}</Text>
            </Text>
          </>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: size.xxsmall,
              color: colors.black,
              fontFamily: family.Roboto_Regular,
              marginVertical: 2,
            }}>
            Date: <Text>{item.date}</Text>
          </Text>
        </View>

        {time && (
          <>
            <Text style={{fontSize: size.tiny, color: colors.black}}>
              Time:{item.time}
            </Text>
          </>
        )}
      </View>
      {locate && (
        <View style={{position: 'absolute', right: 5, bottom: 15}}>
          <CustomText
            style={{
              fontSize: size.tiny,
              color: colors.black,
              right: 15,
              fontFamily: family.Roboto_Regular,
            }}
            text={item.locate}
          />
        </View>
      )}
      {rightarrow && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            alignSelf: 'center',
            padding: 5,
          }}
        >
          <Img
            local
            src={appIcons.rightarrow}
            resizeMode="contain"
            style={{width: 15, height: 15}}
          />
        </TouchableOpacity>
      )}
      {rightbtn && (
        <View style={styles.btncontainer}>
          <TouchableOpacity
            onPress={handleAccept}
            style={[
              styles.btn,
              {marginTop: 15, backgroundColor: colors.secondary},
            ]}>
            <CustomText
              style={{color: colors.white, fontSize: size.xsmall}}
              text="Accept"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleReject}
            style={[
              styles.btn,
              {paddingHorizontal: 22, backgroundColor: colors.lightshadow},
            ]}>
            <CustomText
              style={{color: colors.white, fontSize: size.xsmall}}
              text="Reject"
            />
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
};

export default Custombox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 8,
    //   width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    ...Shadows.shadow5,
    width: '95%',
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 8,
  },
  btncontainer: {
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    gap: 5,
  },
});
