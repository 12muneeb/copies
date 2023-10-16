import {StyleSheet} from 'react-native';
import { colors,family,size } from '../../utils';
import Shadows from '../../helpers/Shadows';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  trackon: {
    width: 42,
    height: 24,
  },
  trackoff: {
    width: 42,
    height: 24,
    backgroundColor: colors.white,
  },
  thumbon: {
    height: 18,
    width: 18,
    marginLeft: 0,
    backgroundColor: colors.red,
  },
  thumboff: {
    height: 18,
    width: 18,
    marginLeft: 3,
    backgroundColor: colors.yellow,
  },
  placeholder: {
    width: 8,
    height: 14,
    resizeMode: 'contain',
  },
  mainView: {
    backgroundColor: colors.yellow,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    ...Shadows.shadow5,
  },
  title: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_SemiBold,
  },
  btn: {
    backgroundColor: colors.secondary,
    marginVertical: 15,
    borderRadius: 8,
  },
  buttonChangeTheme: {
    backgroundColor: colors.yellow,
    marginVertical: 7,
    borderRadius: 8,
  },
  gendercolor: {
    fontSize: size.large,
    fontFamily: family.Roboto_Light,
    color: colors.black,
    left: 15,
   
  },
  gendercolorafter: {
    fontSize: size.large,
    fontFamily: family.Roboto_Light,
    color: colors.black,
    left: 15,
  },
  gender: {
    height: 55,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    justifyContent:'space-between',
    paddingRight:15,
    width:'95%',
    alignSelf:'center'

    
    
  },
})
