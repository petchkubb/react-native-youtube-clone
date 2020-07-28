import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import { colors } from '../utils/constants';

const WIDTH = Dimensions.get('screen').width;

const Card = ({vedioId, channel, title}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={()=>navigation.navigate('videoPlayer',{vedioId, channel, title})}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${vedioId}/hqdefault.jpg`,
          }}
          style={styles.image}
        />
        <View style={styles.descriptionContainer}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color={colors.black1}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 20, width: WIDTH - 100 }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {title}
            </Text>
            <Text>{channel}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  descriptionContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  root: {
    margin: 10,
  },
});

export default Card;
