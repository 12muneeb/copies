import React, {Component} from 'react';
import {Alert, Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {community, homeData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import styles from './styles';
import CommunityComponent from '../../../../components/ScreensComp/CommunityComponent';
import {colors, family, size} from '../../../../utils';
import StarRating from 'react-native-star-rating';
import {appIcons} from '../../../../assets';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/MatchModal/Matched';
import BottomModal from '../../../../container/BottomModal/BottomModal';
import GiveFeedback from '../../../../container/GiveFeedback/GiveFeedback';
import Feedback from '../../../../container/Feedback/Feedback';

const {width} = Dimensions.get('screen');

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 4,
      matchProfile: false,
      isModalVisible: false,
      isModalVisible1: false,
      isModalVisible2:false,
      starCounts: 0,
    };
  }

  onStarRatingPress = rating => {
    this.setState({starCount: rating});
  };

  render() {
    const {matchProfile, isModalVisible, isModalVisible1,isModalVisible2,starCounts} = this.state;
    const handlePop = () => {
      this.setState({matchProfile: true});
    };
    const handleEdit = () => {
      this.setState({matchProfile: false});
      setTimeout(() => {
        this.setState({isModalVisible1: true});
      }, 850);
    };
    const handleDelete = () => {
      this.setState({matchProfile: false});
      setTimeout(() => {
        this.setState({isModalVisible: true});
      }, 850);
    };
    const handleReview = () => {
      this.setState({isModalVisible2: true});
    }
    return (
      <AppBackground
        back
        title={'Movers Rating & Reviews'}
        marginHorizontal={false}>
        <View style={styles.maincontainer}>
          <CustomText style={styles.txt} text="Overall Rating" />

          <Text style={styles.rating}>4.6</Text>
          <StarRating
            disabled={true}
            empty
            fullStar={appIcons.star}
            emptyStar={appIcons.emptystar}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={rating => this.onStarRatingPress(rating)}
            fullStarColor={'red'}
            halfStarEnabled={true}
            starSize={27}
            starStyle={{top: 2}}
          />
          <Text style={styles.txt2}>Based On 50 Reviews</Text>
        </View>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: colors.lightgray, height: 0.4}} />
          )}
          data={community}
          scrollEnabled={true}
          renderItem={({item}) => (
            <CommunityComponent item={item} rate popup handlePop={handlePop} />
          )}
        />
        <CustomButton
          title="Write A Review"
          buttonStyle={styles.btn}
          onPress={handleReview}
        />
        <BottomModal
          editreview
          deletereview
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Delete Review'}
          description={'Are you sure you \n want to delete this review'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
        <GiveFeedback
          isModalVisible={isModalVisible1}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          onCross={() => this.setState({isModalVisible1: false})}
          onSubmit={() => this.setState({isModalVisible1: false})}
        />
         <Feedback
         title={'Submit'}
         isModalVisible={isModalVisible2}
         onStarRatingPress={rating => {
           this?.setState({starCounts: rating});
         }}
         starCounts={starCounts}
         currentfocus={this}
         onToggle={() => this.setState({isModalVisible2: false})}
         onCross={() => this.setState({isModalVisible2: false})}
         onSubmit={() => {
           this.setState({isModalVisible2: false});
           setTimeout(() => {
             this.setState({starCounts: 0});
           }, 550);
         }}
        />
      </AppBackground>
    );
  }
}

export default Review;
