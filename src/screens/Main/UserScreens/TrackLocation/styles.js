import {StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utils';
import appStyles from '../../../appStyles';
import Shadows from '../../../../helpers/Shadows';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  MainContainer: {
    position: 'relative',
    flex: 1,
  },
  time: {
    alignSelf: 'flex-end',
    ...appStyles.font13,
    color: colors.gray,
  },
  BottomView: {
    marginLeft: 20,
    bottom: 20,
  },
  innerView: {
    backgroundColor: colors.white,
    // left: 10,
    alignSelf: 'center',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 30,
    ...Shadows.shadow3,
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  rating: {
    width: 100,
    height: 15,
  },
  Resturant: {
    alignSelf: 'center',
    // marginLeft: 10,
    ...appStyles.font12,
  },
  openTime: {
    left: '40%',
    alignSelf: 'center',
    ...appStyles.font12,
  },
  rateno: {
    color: colors.gray,
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font13,
    marginLeft: 5,
  },
  textHeader: {
    color: colors.gray,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  appimage: {
    marginHorizontal: 10,
    height: 50,
    borderRadius: 100,
    width: 50,
  },
  group: {
    marginTop: -40,
    width: 80,
    height: 80,
  },
  maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  subcontainer: {flexDirection: 'row', alignItems: 'center'},
  profile: {width: 45, height: 45, borderRadius: 30},
  chat: {width: 20, height: 20},
  txtcontainer: {marginLeft: 8},
  chatcontainer: {
    backgroundColor: Colors.white,
    ...Shadows.shadow5,
    padding: 15,
    borderRadius: 30,
  },
  txt: {
    fontSize: size.small,
    fontFamily: family.Roboto_Medium,
    color: colors.black,
  },
  txt1: {
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Regular,
    color: colors.black,
  },
  btmtxt:{
    borderTopWidth: 0.2,
    marginTop: 12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:8,
    paddingTop:8,
    borderColor:colors.lightshadow
  }
});

export default styles;
