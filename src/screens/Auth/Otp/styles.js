import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import appStyles from '../../appStyles';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS == 'ios' ? 30 : 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  title: {
    color: colors.black,
   fontSize:size.xxlarge,
   fontFamily:family.Roboto_Bold,
   marginBottom:8
   
  },
  disabledResend: {
    color: colors.white,
    fontFamily:family.Roboto_Bold
  },
  underlineStyleBase: {
    width: 53,
    height: 53,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
    ...Shadows.shadow3,
    borderColor:colors.secondary,
    borderWidth: 2,
    color: 'black',
    fontSize: 17,
    marginHorizontal:2
  },
  textNormal: {
    ...appStyles.font15,
    ...appStyles.family_Poppins_Regular,
    // fontWeight: '700',
    color: colors.white,
  },
  textNormalWithColor: {
    color: colors.white,
    ...appStyles.font15,
    // fontWeight: '700',
    marginTop: -2,
    ...appStyles.family_Poppins_SemiBold,
    textDecorationLine:'underline'
  },
  time: {
    color: colors.white,
    ...appStyles.family_Poppins_SemiBold,

  },
  otpInput: {
    width: '90%',
    height: 55,
    alignSelf: 'center',
    marginVertical: 40,
  },
  timerText: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 13,
    marginBottom: 10,
    marginRight: 27,
  },
  clock:{
    // backgroundColor:colors.darkBlue,
},
subtitle:{
  fontSize:size.xsmall,
  fontFamily:family.Roboto_Regular
},
logoStyle:{
  // backgroundColor:'red'
}
});

export default styles;
