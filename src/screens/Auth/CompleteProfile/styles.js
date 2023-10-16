import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
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
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
  subview: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '95%',
  },
  btn: {},
  wrapmper: {
    borderRadius: 8,
    width: '95%',
    backgroundColor: colors.darkBlue,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  // contStyles: {
  //   backgroundColor: colors.red,
  //   height: 100,
  //   width: 100,
  // },

  contStyles: {
    backgroundColor: 'transparent',
    fontFamily: family.Roboto_Bold,
    color: colors.black,
  },
  gender: {
    height: 55,
    borderRadius: 8,
    backgroundColor: colors.darkBlue,
    justifyContent: 'flex-start',
    width: '50%',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  gendercolor: {
    color: colors.black,
    fontSize: size.xsmall,
    left: 15,
    fontWeight: '300',
  },
  gendercolorafter: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15,
  },
  genders: {
    height: 55,
    borderRadius: 8,
    backgroundColor: colors.darkBlue,
    justifyContent: 'flex-start',
    width: '48%',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  gaphorizontal: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '95%',
    gap: 5,
    marginTop: 10,
  },
});

export default styles;
