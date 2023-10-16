import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import {colors} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import styles from './styles';
const width = Dimensions.get('screen');

const Matched = ({
  isModalVisible = false,
  currentfocus,
  title,
  color,
  btncolor,
  description,
  onCross = () => {},
  onCancel = () => {},
  onToggle = () => {},
  onSubmit = () => {},
  block,
}) => {
  return (
    <CustomModal
    //   backdropOpacity={0.3}
      visible={isModalVisible}
      togglePopup={onToggle}
      animationType='fade'
    //   style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
      >
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors.white,
            paddingBottom: 20,

            // borderColor: colors.constantcolor,
          },
        ]}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: '100%',
            height: 60,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={styles.txtStyle1}>{title}</Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 20, top: 20}}
            onPress={onCross}>
            <Img
              local={true}
              src={appIcons.cross}
              style={{width: 14, height: 14}}
              tintColor={colors.text}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.txtStyle2,

            // {color: colors.inputtext}
          ]}>
          {description}
        </Text>
        {block ? (
          <View style={styles.viewStyle2}>
            <CustomButton
              title={'Cancel'}
              buttonStyle={[
                styles.btnstyle,
              
              ]}
              textStyle={{color: colors.filterinput}}
              onPress={onCancel}
            />
            <CustomButton
              title={'Block'}
              buttonStyle={[
                styles.btnstyle,
                // {marginLeft: 10, backgroundColor: '#FA2020'},
              ]}
              onPress={onSubmit}
            />
          </View>
        ) : (
          <View style={styles.viewStyle2}>
            <CustomButton
              title={'Cancel'}
              buttonStyle={[
                styles.btnstyle,
             
              ]}
             
              onPress={onCancel}
            />
            <CustomButton
              title={'Yes'}
              buttonStyle={[
                styles.btnstyle,
                { backgroundColor: btncolor ? colors.red : colors.secondary},
              ]}
             
              onPress={onSubmit}
            />
          </View>
        )}
      </View>
    </CustomModal>
  );
};

export default Matched;
