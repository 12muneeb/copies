import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../utils';
import appStyles from '../appStyles';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 55,
    justifyContent: 'center',
    alignSelf:'center'
  },
buttonInnerImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    right:10,
    tintColor:colors.white
  },
  buttonInnerText: {
    fontFamily:family.Roboto_Regular,
    ...appStyles.font16,
  },
  terms: {
    color: colors.white,
    // top: 7,
    marginLeft: 2,
    padding: 2,
    ...appStyles.font14,
    // ...appStyles.family_Jost_Medium,
    ...appStyles.family_Poppins_Bold,
    textDecorationLine:'underline'
  },
  txt2: {
    color: colors.white,
    alignSelf: 'center',
    ...appStyles.font14,
    ...appStyles.family_Poppins_SemiBold,
  },
  txt1: {
    color: colors.white,
    ...appStyles.font14,
    ...appStyles.family_Poppins_SemiBold,
    alignSelf: 'center',
    ...appStyles.family_Jost_Bold,
  },
  txt3: {
    color: colors.white,
    alignSelf: 'center',
    ...appStyles.font14,
    ...appStyles.fontBold,
    textDecorationLine:'underline',
  

    // top: 2,
    marginLeft: 2,
    marginBottom: Platform.OS == 'android' ? 2 : 0,
    ...appStyles.family_Jost_Medium,
  },
  bottomView: {
    bottom: 10,
    position: 'absolute',
    paddingBottom: Platform.OS == 'ios' ? 20 : 10,
  },
  main: {
    ...appStyles.directionRow,
    // marginTop: 5,
    // backgroundColor:'red',
    alignItems: 'center',
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  space: {
    height:'30%'
  },
});

export default style;
