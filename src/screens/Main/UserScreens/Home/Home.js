import React, {useCallback,useState} from 'react';
import {Alert, Dimensions, FlatList, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
// import AppBackground from '../../../components/AppBackground';
// import NavService from '../../../helpers/NavService';
// import {homeData} from '../../../utils/dummyData';
// import Card from '../../../components/Card';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {homeData, userHomedata} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import CustomTextInput from '../../../../components/CustomTextInput';
import { appIcons } from '../../../../assets';
const {width} = Dimensions.get('screen');
import styles from './styles';
import CustomCard from '../../../../components/ScreensComp/CustomCard';
import BottomModal from '../../../../container/BottomModal/BottomModal';
import BottomFilter from '../../../../container/BottomFilter/BottomFilter';

export default function Home() {
  const [searchText, setsearchText] = useState('');
  const [matchProfile, setmatchProfile] = useState(false);


 const handleOn = () => {
  NavService.navigate('MoverProfile')
 }
 const handleApply = () => {
  setmatchProfile(false)
  setTimeout(() => {
    NavService.navigate('SearchResult')
  }, 850);
 }
  return (
    <AppBackground menu title={'HOME'} notification marginHorizontal={false} >
       <CustomTextInput
       handleRightPress={() => setmatchProfile(true)}
       rightline
        rightIcons={appIcons.filter}
        maxLength={15}
        placeholder={'Search'}
        value={searchText}
        keyboardType={'default'}
        onChangeText={value => setsearchText(value)}
        containerStyle={styles.containerinput}
        emailstyle={styles.emailstyle}
      />
     <View style={{width:'98%',}}>
      <FlatList
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: width * 0.4,
        gap:8
      }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        data={userHomedata}
        renderItem={({item}) => <CustomCard item={item} handleOn={handleOn}  />}
      />
     </View>
     <BottomFilter
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => setmatchProfile(false)}
          onCross={() => setmatchProfile(false)}
          onSubmit={() => setmatchProfile(false)}
          handleApply={handleApply}
        />
    </AppBackground>
  );
}
