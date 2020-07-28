import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions,TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native'

const WIDTH = Dimensions.get('screen').width;

const MiniCard = ({vedioId, channel, title}) => {
  const navigation = useNavigation()
  const {color} = useTheme()
  const textColor = color.iconColor
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('videoPlayer',{vedioId, channel, title})}>
      <View style={styles.root}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${vedioId}/hqdefault.jpg`,
          }}
          style={styles.image}
        />
        <View style={{paddingLeft: 7}}>
          <Text
            style={{fontSize: 17, width: WIDTH / 2,color:textColor}}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {title}
          </Text>
          <Text style={{fontSize: 12,color:textColor}}>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
