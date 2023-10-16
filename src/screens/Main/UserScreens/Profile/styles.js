import {StyleSheet} from 'react-native';
import { colors,size,family } from '../../../../utils';
export const styles = StyleSheet.create({
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
  flatcard:{
    backgroundColor: colors.white,
    marginVertical: 20,
    padding: 10,
    ...Shadows.shadow5,
    borderRadius:10
  
  },
  container:{
    padding:5
  }
});

export default styles;
