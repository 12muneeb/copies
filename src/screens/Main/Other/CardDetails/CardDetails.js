import React, {useRef, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {appIcons} from '../../../../assets';
import Shadows from '../../../../helpers/Shadows';
import {colors} from '../../../../utils';
import AppBackground from '../../../../components/AppBackground';
import {styles} from './styles';
import Img from '../../../../components/Img';
import CustomText from '../../../../components/CustomText';
import CardModal from '../../../../container/CardModal/CardModal';

const CardDetail = () => {
  const swipeListViewRef = useRef(null);
  const [itemData, setItemData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [isModalVisible1, setisModalVisible1] = useState(false);

  useEffect(() => {
    const fetchedItemData = [
      {
        id: 1,
        title: 'Apple Pay',
        description: 'Description 1',
        img: appIcons.applepay,
      },
      {
        id: 2,
        title: 'Google Pay',
        description: 'Description 2',
        img: appIcons.googlepay,
      },
      {
        id: 3,
        title: '********** 4528',
        description: 'Description 2',
        img: appIcons.visa,
      },
    ];
    setItemData(fetchedItemData);
  }, []);

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  const renderHiddenItem = ({item, index}) => (
    <View style={styles.maincard}>
      <Img local src={appIcons.delete} style={styles.delete} />
    </View>
  );

  const renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        style={styles.radioButton}
        activeOpacity={0.9}
        onPress={() => handleRadioChange(item.id)}>
        <View style={styles.dotcontainer}>
          <Img local src={item.img} resizeMode={'contain'} style={styles.dot} />
          <Text style={styles.label}>{item.title}</Text>
        </View>

        <View
          style={[
            styles.radioCircle,
            {
              backgroundColor:
                selectedValue === item.id ? colors.secondary : 'transparent',
              borderColor: colors.secondary,
            },
          ]}>
          {selectedValue === item.id && <View style={styles.innerCircle} />}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <AppBackground back title={'Card Details'}>
      <View>
        <View style={styles.maincontainer}>
          <Img
            local
            src={appIcons.cardsave}
            resizeMode={'contain'}
            style={styles.cardsave}
          />
        </View>
        <SwipeListView
          data={itemData}
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
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cardcontainer}
          onPress={() => setisModalVisible1(true)}>
          <Img src={appIcons.creditplus} local style={styles.cardimg} />
          <CustomText text="Add New Card" style={styles.cardtxt} />
        </TouchableOpacity>
      </View>
      <CardModal
        desc={'Why do you want to cancel this bookings?'}
        isModalVisible={isModalVisible1}
        title={'Add New Card'}
        currentfocus={this}
        onToggle={() => setisModalVisible1(false)}
        oncrossSubmit={() => setisModalVisible1(false)}
        onSubmit={() => setisModalVisible1(false)}
      />
    </AppBackground>
  );
};

export default CardDetail;
