import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('screen').width;

const MiniCard = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        }}
        style={styles.image}
      />
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: WIDTH / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          This is youtube vedio This is youtube vedio This is youtube vedio This
          is youtube vedio This is youtube vedio
        </Text>
        <Text style={{ fontSize: 12 }}>reacat native youtube clone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '45%',
    height: 100,
  },
  root: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
});

export default MiniCard;
