
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { colors, size } from '../utils';
import Img from './Img';
import CustomText from './CustomText';
import Shadows from '../helpers/Shadows';
import moment from 'moment';
import { appIcons, appImages } from '../assets';

const SwipeList = (props) => {
  const { ChatlistData, handleClick } = props;
  const [openRowKey, setOpenRowKey] = useState(null);
  const rowSwipeRef = useRef(null);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <SwipeListView
      ref={rowSwipeRef}
      data={ChatlistData}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[
              styles.rowFront,
              {
                backgroundColor:
                  openRowKey === item.key ? 'transparent' : 'transparent',
              },
            ]}
          >
            <TouchableOpacity onPress={() => handleClick(item)}>
            <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <View style={{ ...Shadows.shadow5 }}>
                  <Img src={appImages.profile} style={styles.react} local />
                </View>
                <View style={styles.main}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CustomText style={styles.names} text={item?.name} />
                  </View>
                  <CustomText
                    style={styles.details}
                    text={item?.message}
                    numberOfLines={2}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          {openRowKey === data.item.key && (
            <View style={{ ...styles.backRightBtn, backgroundColor: 'red' }}>
              <TouchableOpacity
                style={styles.mainimgstyle}
                onPress={() => {
                  // Handle delete action here
                  closeRow(rowMap, data.item.key);
                }}
              >
                <Img
                  src={appIcons.delete}
                  style={{ width: 25, height: 25 }}
                  resizeMode={'contain'}
                  local
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      leftOpenValue={0}
      rightOpenValue={-75}
      disableLeftSwipe={false}
      disableRightSwipe={true}
      onRowOpen={(rowKey) => {
        setOpenRowKey(rowKey);
      }}
      onRowClose={() => {
        setOpenRowKey(null);
      }}
    />
  );
};

const styles = StyleSheet.create({
  rowFront: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.lightshadow,
    width: '100%',
  },
  rowBack: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    marginTop: 10,
    height: 80,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  mainimgstyle: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    ...Shadows.shadow5,
  },
  day: {
    color: colors.gray,
    fontSize: size.tiny,
    right: 70,
  },
  react: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
  },
  main: {
    width: '100%',
    marginLeft: 10,
  },
  names: {
    color: colors.black,
    fontWeight: '600',
    fontSize: size.xxsmall,
  },
  details: {
    color: colors.black,
    fontSize: size.tiny,
    fontWeight: '300',
    top: 2,
    width: '60%',
  },
});

export default SwipeList;

