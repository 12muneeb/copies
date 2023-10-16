// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// // import {colors, family, size} from '../../../utils';
// // import CustomModal from '../../../components/CustomModal';
// // import {appIcons} from '../../../assets';
// // import CustomButton from '../../../components/CustomButton';
// // import Img from '../../../components/Img';
// // import styles from './styles';
// // import Shadows from '../../../helpers/Shadows';
// import {colors, family, size} from '../../utils';
// import CustomModal from '../../components/CustomModal';
// import {appIcons} from '../../assets';
// import CustomButton from '../../components/CustomButton';
// import Img from '../../components/Img';
// import styles from './styles';
// import Shadows from '../../helpers/Shadows';
// const Tips = ({onSubmit}) => {
//   return (
//     <View style={styles.viewStyle1}>
//       <ImageBackground
//         source={appIcons.smile}
//         style={styles.imgbg1}
//         resizeMode="contain"></ImageBackground>
//       <Text style={styles.txtStyle2}>
//         Lorem ipsum dolor sit amet consectetur {'\n'} adipiscing elit facilisi
//       </Text>
//       <CustomButton
//         onPress={onSubmit}
//         title={'Continue'}
//         buttonStyle={styles.btnstyle}
//         textStyle={styles.txtbtn}
//       />
//     </View>
//   );
// };

// export default Tips;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import {colors} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Img from '../../components/Img';
import styles from './styles';
import {Reason} from '../../utils/dummyData';
import {ImageBackground} from 'react-native';
const {width, height} = Dimensions.get('screen');

const Cancellation = ({
  isModalVisible = false,
  title,
  desc,
  onToggle = () => {},
  onSubmit = () => {},
  onCross = () => {},
}) => {
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => {
  //       setIsKeyboardVisible(true);
  //     },
  //   );

  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setIsKeyboardVisible(false);
  //     },
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{marginBottom: Platform.OS === 'ios' ? width / 4 : null}}>
        <View style={styles.viewStyle1}>
          <TouchableOpacity
            style={{position: 'absolute', right: 20, top: 20, padding: 5}}
            onPress={onCross}>
            <Img
              local
              src={appIcons.cross}
              resizeMode={'contain'}
              style={{width: 15, height: 15}}
              tintColor={colors.black}
            />
          </TouchableOpacity>
          <ImageBackground
            source={appIcons.smile}
            style={styles.imgbg1}
            resizeMode="contain"></ImageBackground>
          <Text style={styles.txtStyle1}>Congratulations</Text>

          <Text style={styles.txtStyle2}>
            Lorem ipsum dolor sit amet consectetur {'\n'} adipiscing elit
            facilisi
          </Text>
          <CustomButton
            onPress={onSubmit}
            title={'Back to Home'}
            buttonStyle={styles.btnstyle}
            textStyle={styles.txtbtn}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

export default Cancellation;
