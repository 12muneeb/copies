import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Img from '../Img';
import {colors, family, size} from '../../utils';
import Shadows from '../../helpers/Shadows';
import {appIcons} from '../../assets';
import CustomText from '../CustomText';
const {width} = Dimensions.get('screen');
const CustomDetail = ({item, edit, bin, btn,handleDelete,handleEdit,handleNow}) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginBottom: 15,
            flexDirection: 'row',
          }}>
          <CustomText style={styles.txt} text={'Vehicle Details'} />
          <View
            style={{
              position: 'absolute',
              right: 2,
              flexDirection: 'row',
              gap: 10,
            }}>
            {edit && (
              <TouchableOpacity onPress={handleEdit}>
                <Img
                  local
                  src={appIcons.edit}
                  resizeMode={'contain'}
                  style={styles.head}
                  tintColor={'#5956F8'}
                />
              </TouchableOpacity>
            )}
            {bin && (
              <TouchableOpacity onPress={handleDelete}>
                <Img
                  local
                  src={appIcons.delete}
                  resizeMode={'contain'}
                  style={styles.head}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Img local src={item.img1} resizeMode={'cover'} style={styles.img} />
          <Img local src={item.img2} resizeMode={'cover'} style={styles.img} />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 15,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Img
            local
            src={appIcons.truck}
            resizeMode={'contain'}
            style={{width: 20, height: 20}}
          />
          <CustomText
            text={'Total'}
            style={{marginLeft: 8, fontSize: size.xsmall}}
            color={colors.black}
          />
          <Text style={{color: colors.black, marginLeft: 4}}>
            (<Text>{item.total}</Text>
            <Text>)</Text>
          </Text>
        </View>
        <View style={{alignSelf: 'center', flexDirection: 'row'}}>
          <CustomText
            text={item.capacity}
            style={{fontSize: size.xsmall}}
            color={colors.black}
          />
          <CustomText
            text={'Ft Truck ('}
            style={{fontSize: size.xsmall, marginLeft: 5}}
            color={colors.black}
          />
          <Img
            local
            src={appIcons.riyal}
            resizeMode={'contain'}
            style={{width: 18, height: 18, marginLeft: 4}}
          />
          <CustomText
            text={item.km}
            style={{fontSize: size.xsmall, marginLeft: 5}}
            color={colors.black}
          />
          <CustomText
            text={'Per KM)'}
            style={{fontSize: size.xsmall, marginLeft: 5}}
            color={colors.black}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <CustomText
            text={item.desc}
            // color={colors.black}
            style={{fontSize: size.tiny, color: colors.lightshadow,fontFamily:family.Roboto_Regular}}
          />
        </View>
      </View>
      {btn && (
        <TouchableOpacity style={styles.btn} activeOpacity={1} onPress={handleNow}>
          <CustomText text={'Book Now'} color={colors.white} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...Shadows.shadow5,
    padding: 8,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 8,
    paddingBottom: 30,
    width: '95%',
  },
  img: {
    width: '48%',
    height: 120,
    borderWidth: 2,
    borderColor: colors.skyBlue,
    borderRadius: 10,
  },
  txt: {
    color: colors.black,
    fontSize: size.small,
    paddingLeft: width / 3.2,
    fontFamily:family.Roboto_Regular
  },
  head: {
    width: 18,
    height: 18,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    height: 55,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: -30,
  },
});
