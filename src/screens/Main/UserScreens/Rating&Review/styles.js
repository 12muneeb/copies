import {StyleSheet} from 'react-native';
import { family,colors,size } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  rating:{color:colors.secondary,fontFamily:family.Roboto_Bold,fontSize:size.title,marginTop:8},
  maincontainer:{ alignSelf: 'center', alignItems: 'center' ,width:'100%',borderBottomWidth:0.4,borderBottomColor:colors.lightshadow},
  txt:{ color: colors.black, fontSize: size.medium },
  txt2:{
    marginTop: 10,
    color: colors.black,
    fontSize: size.xsmall,
    marginBottom:10
  },
  btn:{marginBottom:15}
});

export default styles;
