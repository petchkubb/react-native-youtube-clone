import React from 'react';
import {View, StyleSheet, Text, SafeAreaView,FlatList,ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux' 


const LitleCard = ({name}) => {
  return (
    <View style={styles.titleCardContainer}>
      <Text style={styles.titleText}>{name}</Text>
    </View>
  )
}

const Explore = () => {
  const cardData = useSelector(state=>{
    return state.data
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
          <LitleCard name="Gaming"/>
          <LitleCard name="Sport"/>
          <LitleCard name="Music"/>
          <LitleCard name="Trending"/>
          <LitleCard name="Movies"/>
          <LitleCard name="Fashion"/>
        </View>
        <View style={{borderBottomWidth:1,marginHorizontal:8}}>
          <Text style={{margin:8,fontSize:22,borderBottomWidth:1}}>Trending Vedios</Text>
        </View>
        <FlatList
          data={cardData}
          keyExtractor={(item,index)=>String(index)}
          renderItem={({item})=>{
            return <Card
              vedioId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleCardContainer:{
    backgroundColor:'red',
    width:180,
    height:50,
    borderRadius:4,
    marginTop:10,
    justifyContent:'center'
  },
  titleText:{
    textAlign:'center',
    color:'white',
    fontSize:22
  }
})

export default Explore;
