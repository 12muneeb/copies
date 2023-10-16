import {StyleSheet} from 'react-native';
import {colors, family, size} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.secondary,
    alignSelf: 'center',
  },
  txt: {
    marginTop: 10,
    fontFamily: family.Roboto_Medium,
    fontSize: size.small,
    textAlign: 'center',
    color: colors.black,
  },
  container: {alignSelf: 'center', width: '100%',marginBottom:325},
  maincontainer: {
    width: '95%',
    backgroundColor: colors.white,
    ...Shadows.shadow5,
    borderRadius: 10,
    marginTop: 20,
    padding: 8,
    alignSelf:'center'
  },
  bio: {
    fontSize: size.xsmall,
    textAlign: 'center',
    fontFamily: family.Roboto_Light,
    color: colors.lightshadow,
    paddingHorizontal: 14,
    marginVertical: 13,
  },
  itemstyle: {
    borderTopWidth: 0.2,
    borderTopColor: colors.lightshadow,
    paddingVertical: 5,
  },
});

export default styles;
