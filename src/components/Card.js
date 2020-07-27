import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../utils/constants';

const WIDTH = Dimensions.get('screen').width;

const Card = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
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
            This is youtube vedio
          </Text>
          <Text>This is youtube vedio</Text>
        </View>
      </View>
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
