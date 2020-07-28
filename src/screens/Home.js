import React from 'react';
import {  SafeAreaView,FlatList } from 'react-native';
import {useSelector} from 'react-redux' 
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () =>{

  const cardData = useSelector(state=>{
    return state.data
  })
  return (
    <SafeAreaView>
      <Header />
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
    </SafeAreaView>
  );
  
}

export default Home;
