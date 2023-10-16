import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {colors, size} from '../../utils';
// import Shadows from '../../helpers/Shadows';
// import {appIcons} from '../../assets';
// import Img from '../Img';
// import CustomText from '../CustomText';
import {colors, size, family} from '../../utils';
import Shadows from '../../helpers/Shadows';
import {appIcons} from '../../assets';
import Img from '../Img';
import CustomText from '../CustomText';

const {width} = Dimensions.get('screen');
const CustomData = ({imgright, item, imgleft, bottomimg, cash}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.maincontainer, {alignItems: 'center'}]}>
        <View style={styles.cardcontainer}>
          {imgleft && (
            <Img
              local
              src={appIcons.truck}
              resizeMode={'contain'}
              style={styles.leftimg}
            />
          )}
          <CustomText
            text={imgleft ? 'Total(06)' : 'Additional Service Charges'}
            style={styles.title}
          />
          {/* <Text ></Text> */}
        </View>

        {imgright && (
          <Img
            local
            src={imgleft ? item.icn : appIcons.righticon}
            resizeMode={'contain'}
            style={styles.imgright}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: imgright ? 0 : 8,
        }}>
        {bottomimg && (
          <Img
            local
            src={appIcons.box}
            resizeMode={'contain'}
            style={{width: 45, height: 45}}
          />
        )}
        <View style={{width: '85%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {bottomimg && (
              <CustomText
                text={'Packing Charges'}
                style={{fontSize: size.small}}
              />
            )}
            {imgleft && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: imgleft ? 8 : 0,
                }}>
                <CustomText
                  text={item.title}
                  style={{
                    fontSize: size.small,
                    color: colors.black,
                    fontFamily: family.Roboto_Regular,
                  }}
                />
                <CustomText
                  text={'Ft Truck ('}
                  style={{fontSize: size.small}}
                />
                <Img
                  local
                  src={appIcons.riyal}
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 2,
                    marginTop: 3,
                  }}
                />
                <CustomText text={'80 '} style={{fontSize: size.small}} />
                <CustomText text={'Per KM)'} style={{fontSize: size.small}} />
              </View>
            )}
            {cash && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Img
                  local
                  src={appIcons.riyal}
                  resizeMode={'contain'}
                  style={{width: 18, height: 18}}
                />
                <CustomText
                  text={item.price}
                  style={{
                    fontSize: size.xsmall,
                    color: colors.primary,
                    fontFamily: family.Roboto_Bold,
                  }}
                />
              </View>
            )}
          </View>
          <CustomText
            numberOfLines={1}
            text={item.desc}
            style={{
              fontSize: size.tiny,
              color: colors.lightshadow,
              fontFamily: family.Roboto_Light,
              marginTop: imgleft ? 8 : 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomData;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    ...Shadows.shadow5,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardcontainer: {flexDirection: 'row', alignItems: 'center'},
  leftimg: {width: 25, height: 25, marginRight: 10},
  title: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Regular,
  },
  imgright: {width: 35, height: 35},
});
