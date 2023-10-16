import {StyleSheet} from 'react-native';
import {colors, family, size} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
const styles = StyleSheet.create({
  profile: {
    borderWidth: 2,
    borderColor: colors.secondary,
    ...Shadows.shadow5,
  },
  upload: {width: 15, height: 15, resizeMode: 'contain'},
  viewStyle1: {
    width: 30,
    height: 30,
    borderRadius: 35 / 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: 5,
    right: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    ...Shadows.shadow5,
  },
  picker:{alignItems: 'center', marginTop: 20},
  picked:{
    
    resizeMode: 'cover',
    borderWidth: 4,
    borderColor:colors.secondary
  },
  subview: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width:'95%',
    alignSelf:'center',
    marginRight:5,
    marginTop:30
  },
  placehand:{width: '95%', backgroundColor: colors.white},
  phnholder:{
    backgroundColor: colors.white,
    width: '95%',
    height: 60,
  },
  bio:{
    borderRadius: 10,
    height: 150,
    width: '95%',
    backgroundColor:colors.white
  },
  btn:{
    width:'95%',
    alignSelf:'center'
  }
});

export default styles;
