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

const Unsubscribe = ({
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
  const [bio, setbio] = useState(false);


  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
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
        style={{marginBottom: Platform.OS === 'ios' ? width / 4 : null}}>
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
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 10,
            }}>
            {Reason.map((item, index) => {
              return (
                <View style={styles.viewStyle2}>
                  <TouchableOpacity onPress={() => setchecked(item.id)}>
                    {checked == item.id ? (
                      <Img
                        local={true}
                        src={appIcons.notempty}
                        style={styles.img}
                      />
                    ) : (
                      <Img
                        local={true}
                        src={appIcons.emptycheck}
                        style={styles.img}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.txtStyle3}>{item?.title}</Text>
                </View>
              );
            })}
          </View>
          {checked == 5 ? (
            <>
              <CustomTextInput
                textAlignVertical="top"
                maxLength={350}
                multiline
                placeholder={'Description'}
                value={bio}
                color={'black'}
                placeholderColor={colors.lightgray}
                isBorderShow
                keyboardType={'default'}
                onChangeText={value => setbio(value)}
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
              {/* <SearchBar
                placeholder={desc ? desc : 'Whats on your mind, Robert?'}
                placeholderColor={colors.black}
                value={bio}
                onChangeText={onChangeText}
                containerStyle={styles.containerheight}
                searchCustom={styles.searchcontainerheight}
                numberOfLines={2}
                multiline={true}
              /> */}
              <Text style={{color: 'red'}}>{alertText}</Text>
            </>
          ) : (
            ''
          )}
          {checked && (
            <>
              <CustomButton
                onPress={handleSubmit}
                title={'Submit'}
                buttonStyle={styles.btnstyle}
                // textStyle={{color: colors.iconcolor}}
              />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

export default Unsubscribe;
