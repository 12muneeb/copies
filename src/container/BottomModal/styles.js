import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
import {colors, family, size} from '../../utils';
export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
  },
  buttonStyle: {
    borderRadius: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'flex-start',
  },
  buttonPerfectionNext: {
    backgroundColor: colors.cgray,
    paddingHorizontal: 10,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 78,
  },
  tabsText: {
    fontSize: size.extraSmall,
  },
  active: {
    height: 4,
    width: 4,
    borderRadius: 30,
    marginBottom: 4,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 20,
    padding: 5,
  },
  modalChild: {
    width: width,
    backgroundColor: colors.white,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonStyle3: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.cgreen,
    borderRadius: 30,
  },
  buttonStyle2: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.cgreen,
    borderRadius: 30,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: size.large,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  content: {
    alignSelf: 'center',
    width: '80%',
    borderBottomWidth:0.5,
    marginLeft:10,
    paddingVertical:8
  },
  txt: {
    marginLeft: 10,
    fontSize: size.small,
    fontFamily: family.Roboto_Medium,
    color: colors.black,
  },
  img:{width: 20, height: 20}
});
