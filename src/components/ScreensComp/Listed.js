import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Img from '../Img';
import CustomButton from '../CustomButton';
import {colors, size, family} from '../../utils';
import Shadows from '../../helpers/Shadows';
const Listed = ({
  item,
  current,
  pending,
  unblock,
  onSubmit,
  onPress,
  Accepted,
  CancelButton,
}) => {
  const [accepted, setaccepted] = useState(false);
  const [status, setstatus] = useState(false);
  const handleAccept = item => {
    setaccepted(item);
  };
  if (status === 'rejected') {
    return null;
  }
  const handleReject = item => {
    setstatus('rejected');
    setaccepted(item);
  };
  return (
    <TouchableOpacity
      style={styles.mainView}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={styles.flex}>
        <Img local={true} src={item.image} style={styles.placeholder} />
        <View style={styles.viewstyle1}>
          <Text style={styles.textstyle1}>{item.title}</Text>
          <Text style={styles.textstyle2}>
            {accepted ? 'Accept Your Request' : item?.desc}
          </Text>
        </View>
      </View>
      {current && (
        <View style={styles.toggle}>
          {!accepted && (
            <CustomButton
              onPress={handleAccept}
              title={'Accept'}
              buttonStyle={styles.accept}
              textStyle={styles.textStyle}
            />
          )}
          {!accepted && (
            <CustomButton
              onPress={handleReject}
              title={'Reject'}
              buttonStyle={[styles.accept, {...Shadows.shadow5}]}
              textStyle={styles.textStyle}
            />
          )}
          {accepted && (
            <CustomButton
              onPress={Accepted}
              title={'Message Her'}
              buttonStyle={styles.accepted}
              textStyle={styles.textStyle}
            />
          )}
        </View>
      )}
      {pending && (
        <CustomButton
          onPress={() => CancelButton(item?.id)}
          title={'Cancel'}
          buttonStyle={styles.accept}
          textStyle={styles.textStyle}
        />
      )}
      {unblock && (
        <TouchableOpacity
          style={styles.cancel}
          activeOpacity={0.8}
          onPress={onSubmit}>
          <Text style={styles.canceltxt}>Unblock</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Listed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  emailstyle: {
    tintColor: colors.secondary,
  },
  containerStyle: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '95%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: 50,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    ...Shadows.shadow5,
    borderRadius: 10,
  },
  placeholder: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  viewstyle1: {
    left: 12,
  },
  textstyle1: {
    color: colors.black,
    fontFamily: family.Roboto_Bold,
    fontSize: size.small,
  },
  textstyle2: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Light,
    fontSize: size.tiny,
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  current: {
    borderBottomWidth: 3,
    width: '50%',
    alignItems: 'center',
  },
  pending: {
    borderBottomWidth: 2,
    width: '50%',
    alignItems: 'center',
  },
  pendingtxt: {
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Bold,
    paddingVertical: 7.5,
    color: colors.black,
  },
  accept: {
    borderRadius: 5,
    width: '35%',
    height: 36,
    marginHorizontal: 4,
    backgroundColor: colors.yellow,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
  },
  accepttxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Regular,
  },
  cancel: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  canceltxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
  },
  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.RedHatDisplay_SemiBold,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  accepted: {
    width: '60%',
    backgroundColor: colors.secondary,
    height: 36,
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  cancel: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    width: 102,
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
  },
  canceltxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
  },
});
