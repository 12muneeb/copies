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
const {width, height} = Dimensions.get('screen');

const Cancellation = ({
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

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [bio, setBio] = useState('');
  const handleRadioChange = value => {
    setSelectedValue(value);
  };
  const handleChangeText = value => {
    setBio(value);
  };
  const handleSubmit = () => {
    setchecked(false);
    onSubmit();
  };
  const onCross = () => {
    setchecked(false);
    oncrossSubmit();
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{marginBottom: Platform.OS === 'ios' ? width / 2.8 : null}}>
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
          <View
            style={{
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 10,
              width: '90%',
            }}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleRadioChange('option1')}>
              <Text style={styles.label}>Loreum Ipsum</Text>

              <View
                style={[
                  styles.radioCircle,
                  {
                    backgroundColor:
                      selectedValue === 'option1'
                        ? colors.secondary
                        : 'transparent',
                    borderColor: colors.secondary, // Change to your desired border color
                  },
                ]}>
                {selectedValue === 'option1' && (
                  <View style={styles.innerCircle} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleRadioChange('option2')}>
              <Text style={styles.label}>Loreum Ipsum</Text>
              <View
                style={[
                  styles.radioCircle,
                  {
                    backgroundColor:
                      selectedValue === 'option2'
                        ? colors.secondary
                        : 'transparent',
                    borderColor: colors.secondary, // Change to your desired border color
                  },
                ]}>
                {selectedValue === 'option2' && (
                  <View style={styles.innerCircle} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleRadioChange('option3')}>
              <Text style={styles.label}>Loreum Ipsum</Text>

              <View
                style={[
                  styles.radioCircle,
                  {
                    backgroundColor:
                      selectedValue === 'option3'
                        ? colors.secondary
                        : 'transparent',
                    borderColor: colors.secondary, // Change to your desired border color
                  },
                ]}>
                {selectedValue === 'option3' && (
                  <View style={styles.innerCircle} />
                )}
              </View>
            </TouchableOpacity>
          </View>

          <CustomTextInput
            textAlignVertical="top"
            maxLength={350}
            multiline
            placeholder={desc ? '' : 'Why do you want to cancel this bookings?'}
            value={bio}
            color={'black'}
            placeholderColor={colors.black}
            isBorderShow
            keyboardType={'default'}
            onChangeText={handleChangeText}
            textInputStyles={{height: 150}}
            containerStyle={{
              borderRadius: 10,
              height: 150,
              width: '90%',
              marginTop: 15,
              borderColor: 'transparent',
              backgroundColor: colors.lightshade,
            }}
          />

          <Text style={{color: 'red'}}>{alertText}</Text>

          <CustomButton
            onPress={handleSubmit}
            title={'Submit'}
            buttonStyle={styles.btnstyle}
            // textStyle={{color: colors.iconcolor}}
          />
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

export default Cancellation;
