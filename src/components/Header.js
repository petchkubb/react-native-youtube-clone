import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigation,useTheme } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const currentTheme = useSelector(state=>{
    return state.theme
  })
  const {color} = useTheme()
  const mycolor = color.iconColor
  return (
    <View style={[styles.container,{backgroundColor: color.headerColor}]}>
      <View style={styles.iconContainer}>
        <AntDesign
          name="youtube"
          size={32}
          color="red"
          style={{ marginLeft: 20 }}
        />
        <Text style={styles.text}>Youtube</Text>
      </View>
      <View>
        <View style={styles.backContainer}>
          <FontAwesome name="video-camera" size={32} color={mycolor} />
          <Ionicons
            name="search-outline"
            size={32}
            color={mycolor}
            onPress={() => {
              navigation.navigate('search');
            }}
          />
          <MaterialCommunityIcons
            name="account-circle"
            size={32}
            color={mycolor}
            onPress={()=>{
              dispatch({type:'CHANGE_THEME',payload:!currentTheme})
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowOffset: {
      height: 4,
    },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    margin: 5,
  },
});

export default Header;
