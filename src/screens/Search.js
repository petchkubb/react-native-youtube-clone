import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';
import { colors } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Config from 'react-native-config';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=song&type=vedio&key=API_KEY

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  // const [minicard, setMinicard] = useState([]);
  const minicard = useSelector((state) => {
    return state;
  });
  const [value, setValue] = useState('');

  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=vedio&key=${Config.API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        // setMinicard(data.items);
        dispatch({ type: 'ADD', payload: data.items });
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.textInput}
        />
        <Ionicons name="md-send" size={32} onPress={() => fetchData()} />
      </View>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color="red"
          style={{ marginTop: 10 }}
        />
      ) : null}
      <FlatList
        data={minicard}
        keyExtractor={(item,index) => String(index)}
        renderItem={({ item }) => {
          return (
            <MiniCard
              vedioId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    elevation: 4,
    backgroundColor: 'white',
    shadowOffset: {
      height: 4,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  textInput: {
    width: '70%',
    backgroundColor: colors.grey,
  },
});

export default SearchScreen;
