import { StyleSheet, Dimensions } from 'react-native';
import { colors,size,family } from '../../utils';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    viewStyle1: {
        backgroundColor: colors.red,
        borderRadius: 10,
    },
    viewStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        gap:10,
        paddingHorizontal:20
    },
    tchStyle1: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    tchStyle2: {
        paddingBottom: 10,
        borderBottomWidth: 0.75,
        borderColor: colors.secondary
    },
    txtStyle1: {
        color:colors.white,
        fontSize: size.xxlarge,
        fontFamily: family.Roboto_Bold,
        textAlign: 'center',
        top:15

    },
    txtStyle2: {
        color: colors.black,
        fontSize: size.normal,
        fontFamily: family.Roboto_Regular,
        textAlign: 'center',
        marginTop: 20
    },
    btnstyle: {
        alignSelf: 'center',
        width: '50%',
        backgroundColor: colors.lightshadow,
        borderRadius:5,
        height:55
    },
  
});

export default styles;
