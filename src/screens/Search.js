import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';

import { colors } from '../utils/constants';

const SearchScreen = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.textInput}
        />
        <Ionicons name="md-send" size={32} />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
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
