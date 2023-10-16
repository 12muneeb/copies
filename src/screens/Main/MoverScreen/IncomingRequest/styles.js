import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors,size,family } from '../../../../utils';
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
  backgroundColor:'red',
    paddingVertical: 5,
  },
  flatcard:{
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    ...Shadows.shadow5,
    borderRadius:10
  
  },
 
  container:{
    paddingVertical:5
  }
});
