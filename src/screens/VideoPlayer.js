import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const WIDTH = Dimensions.get('screen').width;

const VideoPlayer = ({ route }) => {
  const {vedioId, title} = route.params
  console.log(`https://www.youtube.com/embed/${vedioId}`);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 200 }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${vedioId}`,
          }}
        />
      </View>
      <Text style={{ fontSize: 20, width: WIDTH - 50, margin: 9 }} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
};

export default VideoPlayer;
