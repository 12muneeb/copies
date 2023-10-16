// import React, {useState} from 'react';

// const CardModal = () => {
//

//   return (
//     <View style={styles.container}>
//       {/* <TextInput
//         style={styles.input}
//         placeholder="Card Holder"
//         value={cardHolder}
//         onChangeText={(text) => setCardHolder(text)}
//       /> */}
//       <CustomTextInput
//         // customStyless={{width: '50%',}}
//         containerStyle={styles.placehand}
//         maxLength={30}
//         placeholder={'Card Holder'}
//         value={cardHolder}
//         placeholderColor={colors.lightgray}
//         borderRadius={20}
//         isBorderShow
//         borderColor={colors.primary}
//         keyboardType={'default'}
//         onChangeText={value => setCardHolder({value})}
//       />
//       <CustomTextInput
//         // customStyless={{width: '50%',}}
//         containerStyle={styles.placehand}
//         maxLength={30}
//         placeholder={'Card Number'}
//         value={cardNumber}
//         placeholderColor={colors.lightgray}
//         borderRadius={20}
//         isBorderShow
//         borderColor={colors.primary}
//         keyboardType={'default'}
//         onChangeText={value => setCardNumber({value})}
//       />
//       <View style={styles.rowContainer}>
//         <TextInput
//           style={[styles.input, styles.expDateInput]}
//           placeholder="Exp Date"
//           value={expDate}
//           onFocus={showDatePicker}
//         />
//          <CustomTextInput
//         // customStyless={{width: '50%',}}
//         containerStyle={styles.placehand}
//         maxLength={30}
//         placeholder={'Cvv'}
//         value={cvv}
//         placeholderColor={colors.lightgray}
//         borderRadius={20}
//         isBorderShow
//         borderColor={colors.primary}
//         keyboardType={'default'}
//         onChangeText={value => setCvv({value})}
//       />
//       </View>
//       <Button title="Pick Exp Date" onPress={showDatePicker} />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleDateConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//
// });

// export default CardModal;
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {colors} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Img from '../../components/Img';
import styles from './styles';
import {Reason} from '../../utils/dummyData';
const {width, height} = Dimensions.get('screen');

const CardModal = ({
  isModalVisible = false,
  title,
  desc,
  onToggle = () => {},
  oncrossSubmit = () => {},
  onSubmit = () => {},
  onChangeText,
  alertText = null,
}) => {
  const [description, setDescription] = useState('');
  const [checked, setchecked] = useState(false);

  // const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [bio, setBio] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    // Format the date as needed
    const formattedDate = date.toISOString().split('T')[0]; // Example format: '2023-10-10'
    setExpDate(formattedDate);
    hideDatePicker();
  };
  const handleSubmit = () => {
    setchecked(false);
    onSubmit();
  };
  const onCross = () => {
    setchecked(false);
    oncrossSubmit();
  };
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
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{marginBottom: Platform.OS === 'ios' ? width / 4 : null}}> */}
        <View style={styles.viewStyle1}>
          <View
            style={{
              backgroundColor: colors.primary,
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 15,
              justifyContent: 'center',
            }}>
            <Text style={styles.txtStyle1}>{title ? title : 'Report'}</Text>
            <TouchableOpacity
              onPress={onCross}
              style={{position: 'absolute', right: 20}}>
              <Img local={true} src={appIcons.cross} style={styles.cancel} />
            </TouchableOpacity>
          </View>
          <View style={{gap: 10, marginHorizontal: 15, marginVertical: 25}}>
            <CustomTextInput
              // customStyless={{width: '50%',}}
              containerStyle={styles.contast}
              maxLength={20}
              placeholder={'Card Holder'}
              value={cardHolder}
              placeholderColor={colors.black}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'default'}
              onChangeText={value => setCardHolder({value})}
            />
            <CustomTextInput
              // customStyless={{width: '50%',}}
              containerStyle={styles.contast}
              maxLength={15}
              placeholder={'Card Number'}
              value={cardNumber}
              placeholderColor={colors.black}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'phone-pad'}
              onChangeText={value => setCardNumber({value})}
            />
            <View style={styles.rowContainer}>
              <CustomTextInput
                editable={false}
                rightImage={appIcons.celendar}
                rightImagetintColor={colors.red}
                showSoftInputOnFocus={false}
                containerStyle={{
                  width: '95%',
                  backgroundColor: colors.white,
                  color: colors.black,
                  marginLeft: -5,
                }}
                maxLength={30}
                placeholder={'Exp Date'}
                value={expDate}
                placeholderColor={colors.lightgray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                onFocus={showDatePicker}
                handlePress={showDatePicker}
              />

              <CustomTextInput
                containerStyle={{
                  width: '95%',
                  backgroundColor: colors.white,
                  color: colors.black,
                  marginLeft: -2,
                }}
                maxLength={10}
                placeholder={'CVV'}
                value={cvv}
                placeholderColor={colors.lightgray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'phone-pad'}
                onChangeText={value => setCvv({value})}
              />
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <CustomButton
            onPress={handleSubmit}
            title={'Submit'}
            buttonStyle={styles.btnstyle}
            // textStyle={{color: colors.iconcolor}}
          />
        </View>
      {/* </KeyboardAvoidingView> */}
    </CustomModal>
  );
};

export default CardModal;
