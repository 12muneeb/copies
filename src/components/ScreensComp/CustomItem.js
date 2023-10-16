import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family} from '../../utils';
import Shadows from '../../helpers/Shadows';
import {size} from '../../utils';
import CustomText from '../CustomText';
import Img from '../Img';
import {appIcons} from '../../assets';

const CustomItem = ({item, containerStyle}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          justifyContent: item.name === 'Payment' ? null : 'space-between',
          alignItems: item.name === 'Payment' ? 'center' : null,
        },
      ]}>
      <CustomText
        style={{fontSize: size.xxsmall, fontFamily: family.Roboto_Bold}}
        text={item?.name}
      />
      {item.name === 'Payment' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
          }}>
          <Img
            local
            src={appIcons.riyal}
            resizeMode={'contain'}
            style={{width: 15, height: 15}}
          />
          <CustomText
            style={{
              fontSize: size.xxsmall,
              fontFamily: family.Roboto_Regular,
              color: colors.black,
              marginHorizontal:3
            }}
            text={item.subtitle}
          />
           <CustomText
            style={{
              fontSize: size.xxsmall,
              fontFamily: family.Roboto_Regular,
              color: colors.black,
            }}
            text={'(Cash)'}
          />
        </View>
      ) : (
        <CustomText
          style={{
            fontSize: size.xxsmall,
            fontFamily: family.Roboto_Regular,
            color: colors.black,
            paddingLeft:
              item.name === 'Pickup Location' ||
              item.name === 'Drop-off Location' ||
              item.name === 'Address'
                ? 3
                : 0,
            width:
              item.name === 'Pickup Location' ||
              item.name === 'Drop-off Location' ||
              item.name === 'Address'
                ? '35%'
                : null,
          }}
          text={item.subtitle}
        />
      )}
    </View>
  );
};

export default CustomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
});
