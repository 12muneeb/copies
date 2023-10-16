import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../../utils';

export const styles = StyleSheet.create({
  title: {
    fontFamily: family.Roboto_Bold,
    color: colors.black,
    fontSize: size.xsmall,
  },
  gendercolor: {
    color: colors.lightshadow,
    fontSize: size.xsmall,
    left: 15,
    fontWeight: '300',
  },
  gendercolorafter: {
    color: colors.black,
    fontFamily: family.Roboto_Regular,
    fontSize: size.small,
    left: 15,
  },
  gender: {
    height: 55,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 15,
    borderWidth: 2,
    width: '99%',
    borderColor:colors.secondary
  },
  placehand:{width: '99%', backgroundColor: colors.white,height:55},
  imgcontainer:{
    marginTop: 10,
    width: 130,
    height: 90,
    borderRadius: 8,
  },
  img:{width: 130, height: 90, borderRadius: 8},
  tchimg:{
    borderRadius: 10,
    padding: 4,
    justifyContent: 'center',
    width: 30,
    height: 30,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  imgstack:{width: 20, height: 20}
});
