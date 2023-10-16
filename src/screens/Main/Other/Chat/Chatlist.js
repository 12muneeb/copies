import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
// import { appIcons } from '../../../assets';
// import { colors } from '../../../utils';
// import Shadows from '../../../helpers/Shadows';
import {appIcons, appImages} from '../../../../assets';
import {colors, size} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CustomTextInput from '../../../../components/CustomTextInput';
import {ChatListData} from '../../../../utils/dummyData';
import NavService from '../../../../helpers/NavService';

const ChatList = () => {
  const swipeListViewRef = useRef(null);
  const [searchText, setsearchText] = useState('');
  const renderHiddenItem = ({item, index}) => (
    <View style={styles.hiddencontainer}>
      <Img
        local
        src={appIcons.delete}
        resizeMode={'contain'}
        style={styles.deleteicn}
      />
    </View>
  );

  const renderItem = ({item, index}) => (
    <Pressable
      activeOpacity={0.9}
      onPress={() => NavService.navigate('Message')}>
      <View style={styles.maincontainer}>
        <Img
          local
          src={appImages.profile}
          style={styles.profile}
          resizeMode={'contain'}
        />
        <View style={styles.heading}>
          <CustomText style={styles.name} text={item.text} />
          <CustomText style={styles.desc} text={item.desc} />
        </View>
        <View style={styles.mainright}>
          <View style={styles.countcontainer}>
            <CustomText style={styles.count} text={'1'} />
          </View>
          <CustomText style={styles.time} text="5:45 PM" />
        </View>
      </View>
    </Pressable>
  );

  return (
    <AppBackground menu notification title={'Messages'}>
      <CustomTextInput
        rightIcons={appIcons.search}
        maxLength={15}
        placeholder={'Search'}
        value={searchText}
        keyboardType={'default'}
        onChangeText={value => setsearchText(value)}
        containerStyle={styles.containerinput}
        emailstyle={styles.emailstyle}
      />
    
      <SwipeListView
      scrollEnabled={true}
        data={ChatListData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        keyExtractor={item => item.id}
        onRowOpen={(rowKey, rowMap) => {
          if (swipeListViewRef.current) {
            swipeListViewRef.current.setRowKey(rowKey);
          }
        }}
        swipeListViewRef={swipeListViewRef}
      />
 
    </AppBackground>
  );
};

export default ChatList;
