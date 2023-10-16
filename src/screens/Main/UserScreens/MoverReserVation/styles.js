import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shadows from '../../../../helpers/Shadows'
import { colors, family, size } from '../../../../utils'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal:10,
        gap:20
      },
      calendarContainer: {
        borderRadius: 20,
       ...Shadows.shadow5,
     marginHorizontal:10,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:10
      },
      arrow: {
        // Style your custom arrow icons here
      },
      txt:{
        marginLeft:10,
        color:colors.black,
        fontFamily:family.Roboto_Bold,
        fontSize:size.small
      },
      maincontainer: {
        backgroundColor: colors.lightshade,
        ...Shadows.shadow5,
        borderRadius: 10,
        padding:15,
        alignSelf:'center',
        width:'95%',
        marginTop:10
      },
      bio: {
        fontSize: size.xsmall,
        fontFamily: family.Roboto_Light,
        color: colors.lightshadow,
      },
      txt4: {
        marginTop: 10,
        fontFamily: family.Roboto_Bold,
        fontSize: size.small,
        color: colors.lightshadow,
      },
      placehand:{width: '99%', backgroundColor: colors.white,height:55},
      gendercolor: {
        color: colors.black,
        fontSize: size.xsmall,
        fontFamily:family.Roboto_Bold,
        right:15

      },
      gendercolorafter: {
        color: colors.black,
        fontFamily: family.Roboto_Regular,
        fontSize: size.small,
        right:15


      },
      gender: {
        height: 50,
       backgroundColor:'transparent',
        width: 100,
        ...Shadows.shadow0
      },
      title:{marginVertical: 12, marginLeft: 8},
      timecontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        height: 55,
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
      },
      timepick:{
        flexDirection: 'row',
        width: '25%',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        height: 50,
      },
      timepicker:{height: 55, marginHorizontal: 5, paddingLeft: 10,width:'70%',color:colors.black},
      biocontainer:{
        borderRadius: 10,
        height: 110,
        width: '99%',
        backgroundColor: colors.white,
        marginTop: 10,
      },
      arrow:{width: 15, height: 15},
      containerinput:{
        backgroundColor:colors.white,
        marginVertical:15
      },
      btmbutton:{
        alignSelf:'center',
        bottom:20
      }
    
})