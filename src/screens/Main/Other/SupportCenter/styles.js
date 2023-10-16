import {StyleSheet} from 'react-native';
import {colors, size, family} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: '100%',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    width: '90%',
  },

  flatListCont: {
    flexGrow: 1,
    paddingHorizontal: 3,
    marginHorizontal: 20,
    // paddingTop: width * 0.04,
  },

  flatListStyle: {
    flex: 1,
    marginBottom: 10,
  },

  messageView: {
    justifyContent: 'space-between',
    height: 52,
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    paddingRight: 10,
    ...Shadows.shadow5,
    marginBottom: 20,
  },

  textInput: {
    flex: 1,
    height: '100%',
    color: colors.black,
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Medium,
    left: 20,
  },

  icon: {
    width: 24,
    height: 24,
  },
  icon1: {
    width: 19,
    height: 19,
  },
  verticalLine: {
    width: 1.2,
    height: 25,
    backgroundColor: colors.gray,
    marginHorizontal: 8,
  },

  titlestyle: {
    color: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendCont: {
    backgroundColor: colors.yellow,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 31,
    height: 31,
    marginRight: 10,
  },
  msg: {
    right: 10,
    justifyContent: 'center',
  },
  accept: {
    width: '50%',
    borderRadius: 8,
    backgroundColor: colors.black,
    marginRight: 10,
    alignSelf: 'flex-end',
    height: 45,
    marginVertical: 5,
  },
  textStyle: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
  },
  title: {
    fontFamily: family.Roboto_Bold,
    fontSize: size.h2,
    color: colors.black,
  },
  subtitle: {
    fontSize: size.normal,
    fontFamily: family.Roboto_Regular,
    marginTop: 10,
    marginBottom: 30,
    color:colors.black
  },
});

export default styles;
