import React, { Component } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import { community, homeData } from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import styles from './styles';
import CommunityComponent from '../../../../components/ScreensComp/CommunityComponent';
import { colors, family, size } from '../../../../utils';
import StarRating from 'react-native-star-rating';
import { appIcons } from '../../../../assets';

const { width } = Dimensions.get('screen');

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 4,
    };
  }

  onStarRatingPress = (rating) => {
    this.setState({ starCount: rating });
  };

  render() {
    return (
      <AppBackground
        menu
        title={'Rating & Reviews'}
        notification
        marginHorizontal={false}
      >
        <View style={{ alignSelf: 'center', alignItems: 'center' ,width:'100%',borderBottomWidth:0.7,borderBottomColor:colors.lightshadow}}>
          <Text style={{ color: colors.black, fontSize: size.medium }}>
            Overall Rating
          </Text>
          <Text style={styles.rating}>4.6</Text>
          <StarRating
            disabled={true}
            empty
            fullStar={appIcons.star}
            emptyStar={appIcons.emptystar}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'red'}
            halfStarEnabled={true}
            starSize={27}
            starStyle={{ top: 2 }}
          />
          <Text
            style={{
              marginTop: 10,
              color: colors.black,
              fontSize: size.xsmall,
              marginBottom:10
            }}
          >
            Based On 50 Reviews
          </Text>
        </View>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{ backgroundColor: colors.lightgray, height: 0.4 }}
            />
          )}
          data={community}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <CommunityComponent item={item} rate timing />
          )}
        />
      </AppBackground>
    );
  }
}

export default Review;
