import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';

export const styles = StyleSheet.create({
  txt: {
    color: colors.black,
    fontSize: size.normal,
    fontFamily: family.Roboto_Bold,
  },
  plus: {
    width: 20,
    height: 20,
  },
  itemcontent: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    ...Shadows.shadow5,
    marginVertical: 10,
    width:'90%',
    alignSelf:'center'
  },
  content: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  itemcontent1: {
    flexDirection: 'row',
    backgroundColor: colors.lightshade,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    ...Shadows.shadow5,
    marginVertical: 10,
    width:'90%',
    alignSelf:'center'
  },
  itemcontext:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  listis:{marginLeft: 25, marginTop: 30},
  bioinpuut:{
    borderRadius: 10,
    height: 150,
    width: '90%',
    marginTop: 15,
    borderColor: 'transparent',
    backgroundColor: colors.lightshade,
  },
  titleinput:{
    borderRadius: 10,
    width: '90%',
    marginTop: 15,
    borderColor: 'transparent',
    backgroundColor: colors.lightshade,
  },
  additem:{
    borderRadius: 10,
    width: '90%',
    marginTop: 15,
    borderColor: 'transparent',
    backgroundColor: colors.lightshade,
  
  },
  btmbtn:{alignSelf:'center',flex:1,justifyContent:'flex-end',bottom:20}
});
