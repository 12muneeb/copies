import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, size, family} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';

export const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.secondary,
    alignSelf: 'center',
  },
  txt: {
    marginTop: 10,
    fontFamily: family.Roboto_Medium,
    fontSize: size.small,
    textAlign: 'center',
    color: colors.black,
  },
  itemstyle: {
    backgroundColor: 'red',
    paddingVertical: 5,
  },
  flatcard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    ...Shadows.shadow5,
    borderRadius: 10,
  },

  container: {
    paddingVertical: 5,
  },
  timercontainer: {
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    ...Shadows.shadow5,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  title:{
    fontFamily:family.Roboto_Bold,
    color:colors.black,
    fontSize:size.small
  },
  subtitle:{
    fontSize:size.small,
    fontFamily:family.Roboto_Regular
  },
  otptext:{
    color:colors.white,
    fontFamily:family.Roboto_Medium,
    fontSize:size.small
  },
  locate:{
    fontFamily:family.Roboto_Bold,
    fontSize:size.small,
    color:colors.black
  }
});
