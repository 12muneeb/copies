import {StyleSheet, Dimensions} from 'react-native';
import {colors, size, family} from '../../utils';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  viewStyle1: {
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  viewStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //   tchStyle1: {
  //     position: 'absolute',
  //     right: 20,
  //     top: 20,
  //     padding: 5,
  //   },
  tchStyle2: {
    paddingBottom: 10,
    borderBottomWidth: 0.75,
    borderColor: colors.secondary,
  },
  txtStyle1: {
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Roboto_Bold,
    textAlign: 'center',
  },
  txtStyle2: {
    color: colors.black,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Medium,
    textAlign: 'center',
    paddingHorizontal: '20%',
    marginTop: 20,
  },
  txtStyle3: {
    color: colors.black,
    fontFamily: family.Roboto_Light,
    fontSize: size.small,
    left: 0,
    top: 5,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
  },
  cont: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.5,
    elevation: 7,
    height: 85,
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    right: 5,
    top: 5,
  },
  empty: {borderWidth: 1},
  containerheight: {
    height: 150,
    width: '100%',
    backgroundColor: colors.belege,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: colors.red,
  },
  searchcontainerheight: {
    height: 120,
  },
  cancel: {width: 15, height: 15},
  button: {position: 'absolute', bottom: 10, width: '100%'},
});

export default styles;
