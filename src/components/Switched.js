import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {size, family, colors} from '../utils';
const Switched = ({txt, title, onToggle, isOn}) => {
  // const [check,setcheck] = useState(false)
  return (
    <View>
      <Pressable style={[styles.mainView, {}]} activeOpacity={0.8}>
        <Text style={styles.title}>{title}</Text>
        <ToggleSwitch
          // isOn={check}
          isOn={isOn}
          // onToggle={() => setcheck(!check)}
          onToggle={onToggle}
          trackOnStyle={styles.trackon}
          trackOffStyle={styles.trackoff}
          thumbOnStyle={styles.thumbon}
          thumbOffStyle={styles.thumboff}
          onColor={colors.white}
          offColor="red"
          size="small"
        />
      </Pressable>
    </View>
  );
};

export default Switched;

const styles = StyleSheet.create({
  trackon: {
    width: 42,
    height: 24,
    backgroundColor: colors.secondary,
  },
  trackoff: {
    width: 42,
    height: 24,
    // backgroundColor: colors.white,
    backgroundColor: 'black',
  },
  thumbon: {
    height: 18,
    width: 18,
    marginLeft: 0,
    backgroundColor: colors.white,
  },
  thumboff: {
    height: 18,
    width: 18,
    marginLeft: 3,
    backgroundColor: colors.white,
  },
  mainView: {
    backgroundColor: colors.white,
    width: '95%',
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    ...Shadows.shadow5,
    alignSelf: 'center',
  },
  title: {
    // color: colors.white,
    fontSize: size.large,
    fontFamily: family.Roboto_Medium,
    color: colors.black,
  },
});
