import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
// import appStyles from '../../appStyles';
const {width, height} = Dimensions.get('window');

// const makeStyles = theme => {
//   return StyleSheet.create({
//
//   });
// };
// export default makeStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  login: {
    fontSize: size.xxlarge,
    fontFamily: family.Roboto_Bold,
    color: colors.black,
  },

  forgot: {
    alignSelf: 'flex-end',
  },
  btn: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    height: 55,
    marginTop: 15,
  },
  names: {
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Regular,
    color: colors.black,
    marginVertical: 5,
    marginBottom: 20,
    // marginHorizontal:10
  },
  maincontainer: {alignItems: 'center', marginTop: -25},
});
export default styles;
