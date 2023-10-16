import {StyleSheet} from 'react-native';
// import {colors, HP, WP, size} from '../../../utils';
import {colors, family, size} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.7,
    borderColor: colors.secondary,
  },
  name: {
    color: colors.black,
    fontFamily: family.Roboto_Bold,
    fontSize: size.xsmall,
  },
  desc: {
    color: colors.lightgray,
    fontFamily: family.Roboto_Regular,
    fontSize: size.xxsmall,
    top: 4,
  },
  heading: {marginLeft: 8, marginTop: -5},
  time: {
    color: colors.lightgray,
    fontSize: size.xxsmall,
    fontFamily: family.Roboto_Regular,
  },
  count: {color: colors.white, fontSize: size.xxsmall},
  countcontainer: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 4,
    borderRadius: 40,
    marginBottom: 5,
    marginRight: 5,
  },
  mainright: {position: 'absolute', right: 20, alignItems: 'flex-end'},
  maincontainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  deleteicn: {width: 18, height: 18},
  hiddencontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    padding: 5,
    ...Shadows.shadow5,
    borderRadius: 20,
    width: 40,
    height: 40,
    right: 10,
    top: 20,
    right:20
  },
  containerinput:{backgroundColor:colors.white,marginHorizontal:18,marginTop:10,borderColor:colors.lightpurple,marginBottom:15}
});

export default styles;
