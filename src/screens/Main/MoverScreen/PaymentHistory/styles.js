import {StyleSheet} from 'react-native';
// import {colors, HP, WP, size} from '../../../utils';
import { colors,family,size } from '../../../../utils';

const styles = StyleSheet.create({
  maincontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container:{
    backgroundColor: colors.white,
    ...Shadows.shadow5,
    width: '95%',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  card:{flexDirection: 'row', alignItems: 'center'},
  txt:{color:colors.black},
  txt1:{color:colors.black,marginLeft:5},
  txt2:{marginTop:5,color:colors.black}
});

export default styles;
