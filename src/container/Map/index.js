import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {appIcons, appImages} from '../../assets';
import {colors} from '../../utils';
import CustomText from '../../components/CustomText';
import mapStyle from './mapStyle.json';
const Map = ({cord, onMarkerPress, mark}) => {
  console.log(onMarkerPress, 'markereee');

  const markers = [
    {
      latitude: 41.8389,
      longitude: -87.613177,
      icon: appImages.profile,
      StoreName: 'Pizza Shop',
    },
    {
      latitude: 41.8389,
      longitude: -87.643177,
      icon: appImages.profile,
      StoreName: 'Levis',
    },
    {
      latitude: 41.8589,
      longitude: -87.643177,
      icon: appImages.profile,

      StoreName: 'Addidas',
    },
    {
      latitude: 41.8989,
      longitude: -87.623177,
      icon: appImages.profile,

      StoreName: 'Mart',
    },
  ];
  return (
    <MapView
      //   initialRegion={{
      //     latitude: parseFloat(cord?.latitude),
      //     longitude: parseFloat(cord?.longitude),
      //     latitudeDelta: 40.7128,
      //     longitudeDelta: 40.7128,
      //   }}
      region={{
        latitude: parseFloat(41.8781),
        longitude: parseFloat(-87.623177),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={PROVIDER_GOOGLE}
      zoomEnabled
      customMapStyle={mapStyle}
      style={{width: '100%', height: '100%'}}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          onPress={() => onMarkerPress(marker.latitude, marker.longitude)}>
          {/* <TouchableOpacity onPress={'he;lll'}> */}
          <View
            style={
              {
                // height:500,
                // width:500,
                // justifyContent: 'center',
                // alignItems: 'center',
                // position: 'absolute',
                // backgroundColor: 'red',
              }
            }>
            <Image
              source={marker.icon}
              style={{
                resizeMode: 'contain',

                // tintColor: 'black',
                width: 60,
                height: 60,
                // alignItems: 'center',
                // paddingTop: 7,
                // tintColor: colors.black,
                // resizeMode: 'contain',
              }}
            />
            <CustomText
              text={marker.StoreName}
              style={{
                color: colors.black,
                // ...appStyles.family_RedHatDisplay_Bold,
                alignSelf: 'center',
              }}
            />
            {/* <Image
              source={marker.subicon}
              style={{
                position: 'absolute',
                width: 50,
                // backgroundColor:'red',
                // borderRadius: 50,
                // height: 50,
                // top: 0.5,
                resizeMode: 'contain',
              }}
            /> */}
          </View>
          {/* </TouchableOpacity> */}
        </Marker>
      ))}
    </MapView>
  );
};
export default Map;
