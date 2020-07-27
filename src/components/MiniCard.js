import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const MiniCard = ({ vedioId, channel, title }) => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${vedioId}/hqdefault.jpg`,
        }}
        style={styles.image}
      />
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: WIDTH / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {title}
        </Text>
        <Text style={{ fontSize: 12 }}>{channel}</Text>
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
