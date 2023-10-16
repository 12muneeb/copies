import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
// import {colors, family, size} from '../../../utils';
// import CustomModal from '../../../components/CustomModal';
// import {appIcons} from '../../../assets';
// import CustomButton from '../../../components/CustomButton';
// import Img from '../../../components/Img';
// import styles from './styles';
// import Shadows from '../../../helpers/Shadows';
// import CustomTextInput from '../../../components/CustomTextInput';
// import {SearchBar} from '../../../components/CustomTextInput';
import StarRating from 'react-native-star-rating';
import {colors, size, family} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import styles from './styles';
import Shadows from '../../helpers/Shadows';
import CustomTextInput from '../../components/CustomTextInput';
const width = Dimensions.get('screen');

const Feedback = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  match,
  onClick,
  tip,
  title,
  description,
  starCounts,
  onStarRatingPress,
}) => {
  console.log('selected', selected);
  const [check, ischeck] = useState('');
  const [bio, setbio] = useState('');
  const [name, setname] = useState('');
  //   const [starCount, setStarCount] = useState(4);

  //   const onStarRatingPress = rating => {
  //     setStarCount(rating);
  //   };

  return (
    <CustomModal
      visible={isModalVisible}
      togglePopup={onToggle}
      animationType="fade">
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors.white,
            paddingBottom: 20,
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
          <Text style={styles.txtStyle1}>Edit Feedback</Text>
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
          Rate Your Experience
        </Text>
        <View style={{width: '40%', alignSelf: 'center', marginTop: 10}}>
          <StarRating
            disabled={false}
            fullStar={appIcons.star}
            // emptyStar={appIcons.address}
            emptyStar={appIcons.darkstar}
            halfStar={appIcons.darkstar}
            maxStars={5}
            rating={starCounts}
            selectedStar={rating => onStarRatingPress(rating)}
            halfStarEnabled={true}
            starSize={25}
          />
        </View>

        <CustomTextInput
          textAlignVertical="top"
          maxLength={350}
          multiline
          placeholder={''}
          value={bio}
          color={colors.black}
          placeholderColor={colors.black}
          isBorderShow
          keyboardType={'default'}
          onChangeText={value => setbio({bio: value})}
          textInputStyles={{height: 150, marginLeft: -10}}
          containerStyle={{
            borderRadius: 10,
            height: 150,
            width: '85%',
            marginTop: 15,
            borderColor: 'transparent',
            backgroundColor: colors.lightshade,
          }}
        />

        <CustomButton
          onPress={onSubmit}
          title={'Submit'}
          buttonStyle={[styles.btnstyle]}
        />
      </View>
    </CustomModal>
  );
};

export default Feedback;
