import {StyleSheet} from 'react-native';
// import {colors, HP, WP, size} from '../../../utils';
import { colors,family,size } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  maincontainer:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:13,alignItems:'center'},
  heading:{fontFamily:family.Roboto_Bold,fontSize:size.large},
  subtitle:{marginTop:8,color:colors.black,fontFamily:family.Roboto_Medium,fontSize:size.xsmall},
  mainimg:{backgroundColor:colors.secondary,padding:10,borderRadius:25},
  imgtag:{width:30,height:30}
});

export default styles;
