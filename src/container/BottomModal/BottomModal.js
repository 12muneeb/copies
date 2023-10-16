import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {colors, size, family} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import CustomText from '../../components/CustomText';
import {styles} from './styles';

const width = Dimensions.get('screen');

const BottomModal = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  EditFeedback,
  DeleteFeedback,
  editbtn,
  deletebtn,
  unmatcheduser,
  block,
  report,
  User,
  Blockbtn,
  Reportbtn,
  post,
  handleBlock,
  handleReport,
  editreview,
  deletereview,
  handleEdit,
  handleDelete
}) => {
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View style={styles.mainContainer}>
        <View style={styles.modalChild}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={onCross}>
            <Img
              local
              src={appIcons.crosson}
              style={{width: 80, height: 6, borderRadius: 8}}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 25,
              gap: 15,
            }}>
            {editreview ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Img
                  local
                  src={appIcons.edit}
                  resizeMode={'contain'}
                  style={styles.img}
                  tintColor={colors.primary}
                />
                <TouchableOpacity
                  style={styles.content}
                  activeOpacity={0.9}
                  onPress={handleEdit}>
                  <CustomText text="Edit Review" style={styles.txt} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Img
                  local
                  src={appIcons.block}
                  resizeMode={'contain'}
                  style={styles.img}
                />
                <TouchableOpacity
                  style={styles.content}
                  activeOpacity={0.9}
                  onPress={handleBlock}>
                  <CustomText text="Block Mover" style={styles.txt} />
                </TouchableOpacity>
              </View>
            )}
            {deletereview ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Img
                  local
                  src={appIcons.delete}
                  resizeMode={'contain'}
                  style={styles.img}
                />
                <TouchableOpacity
                  style={styles.content}
                  activeOpacity={0.9}
                  onPress={handleDelete}>
                  <CustomText text="Delete Review" style={styles.txt} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Img
                  local
                  src={appIcons.report}
                  resizeMode={'contain'}
                  style={styles.img}
                />
                <TouchableOpacity
                  style={styles.content}
                  activeOpacity={0.9}
                  onPress={handleReport}>
                  <CustomText text="Report Mover" style={styles.txt} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

export default BottomModal;
