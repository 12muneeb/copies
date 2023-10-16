import {StyleSheet} from 'react-native';
import { family,colors,size } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  rating:{color:colors.secondary,fontFamily:family.Roboto_Bold,fontSize:size.title,marginTop:8}
});

export default styles;
