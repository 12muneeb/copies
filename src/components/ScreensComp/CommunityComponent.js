import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import Img from '../Img';
import { colors,family,size } from '../../utils';
import { appIcons,appImages } from '../../assets';
import Shadows from '../../helpers/Shadows';

const CommunityComponent = ({
  item,
  dots,
  onClick,
  time,
  desc,
  rate,
  btn,
  Dotsbtn,
  handleOn,
  handleSubmit,
  buttons,
  timing,
  popup,
  handlePop
}) => {
  const [starCount, setStarCount] = useState(4);

  const onStarRatingPress = rating => {
    setStarCount(rating);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.flex}>
        <View onPress={handleOn}>
          <Img local src={appImages.profile} style={styles.placeholder} />
        </View>
        <View style={styles.viewstyle1}>
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View onPress={handleSubmit}>
                <Text style={[styles.textstyle1, {}]}>{item.name}</Text>
              </View>
              {buttons && (
                <TouchableOpacity
                  style={{position: 'absolute', right: 5, top: -5, padding: 3}}
                  onPress={Dotsbtn}>
                  <Img
                    local
                    src={btn ? item?.btn : null}
                    style={{width: 15, height: 15}}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
              {popup && (
                 <TouchableOpacity
                 onPress={handlePop}
                 activeOpacity={0.8}
                 style={{
                   position: 'absolute',
                   top:-5,
                   right: 0,
                   padding: 3,
                   alignItems:'flex-end',
                 }}>
                  <Img 
                  local
                  resizeMode={'contain'}
                  src={item.btn}
                  style={{width:14,height:14,padding:6,}}
                  />
                 <Text
                   style={{
                     fontSize: size.tiny,
                     color: colors.lightgray,
                     fontFamily: family.Roboto_Light,
                     top:2
                   }}>
                   {item.timming}
                 </Text>
               </TouchableOpacity>
              )}
              {timing && (
                <View
                  style={{
                    position: 'absolute',
                    right: -20,
                    // top: -5,
                    padding: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: size.tiny,
                      color: colors.lightgray,
                      fontFamily: family.Roboto_Light,
                    }}>
                    {item.timming}
                  </Text>
                </View>
              )}
            </View>
            {desc && (
              <Text style={[styles.time, {color: colors.inputtext}]}>
                {item.time}
              </Text>
            )}
            {rate && (
              <View style={{flexDirection: 'row'}}>
                <StarRating
                  disabled={true}
                  empty
                  fullStar={appIcons.star}
                  emptyStar={appIcons.emptystar}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={starCount}
                  selectedStar={rating => onStarRatingPress(rating)}
                  fullStarColor={'red'}
                  halfStarEnabled={true}
                  starSize={14}
                  starStyle={{top: 2}}
                />
                <Text style={[styles.time]}>{'  '}4.5</Text>
              </View>
            )}
          </View>
          {dots && (
            <Pressable onPress={onClick}>
              <Img
                local={true}
                src={appIcons.horizontaldots}
                style={styles.dots}
                resizeMode={'contain'}
                tintColor={colors.border}
              />
            </Pressable>
          )}
        </View>
      </View>
      {time && (
        <View style={{alignSelf: 'flex-end', right: 20, top: -20}}>
          <Text style={[styles.time, {color: colors.inputtext}]}>
            {item.time}
          </Text>
        </View>
      )}
      <View style={styles.toggle}>
        <Text style={[styles.textstyle2, {color: colors.lightgray}]}>
          {item.desc}
        </Text>
      </View>
    </View>
  );
};

export default CommunityComponent;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  viewstyle1: {
    left: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  textstyle1: {
    fontFamily: family.Roboto_Bold,
    fontSize: size.xsmall,
    color:colors.black
  },
  textstyle2: {
    fontFamily: family.Roboto_Light,
    fontSize: size.tiny,
    width: '80%',
    left: 3,
    lineHeight: 18,
  },
  toggle: {
    top: 8,
    width: '100%',
  },
  time: {
    fontSize: size.tiny,
    fontFamily: family.Roboto_Medium,
    color: colors.black,
  },
  list: {backgroundColor: colors.red, paddingHorizontal: 5, borderRadius: 10},
  count: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.RedHatDisplay_Bold,
  },
  dots: {width: 19, height: 12, right: 25},
  imgcontainer: {width: '100%', height: 198, borderRadius: 12, marginTop: 15},
  backgroundimg: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
