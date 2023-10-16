import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, family, size } from '../../../utils'



export const styles = StyleSheet.create({
    title:{
        fontFamily:family.Roboto_Regular,
        color:colors.white,
        fontSize:size.xsmall
    },
    gendercolor: {
        color: colors.black,
        fontSize: size.xsmall,
        left: 15,
        fontWeight:'300',
      },
      gendercolorafter: {
        color: colors.black,
        fontFamily: family.RedHatDisplay_Medium,
        fontSize: size.small,
        left: 15,
      },
      gender: {
        height: 55,
        borderRadius: 8,
        backgroundColor: colors.darkBlue,
        justifyContent: 'flex-start',
        justifyContent:'space-between',
        paddingRight:15

        
        
      },
})