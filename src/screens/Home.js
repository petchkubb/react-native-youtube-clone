import React from 'react';
import {  SafeAreaView,FlatList,Animated } from 'react-native';
import {useSelector} from 'react-redux' 
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () =>{
  const scrollY = new Animated.Value(0)
  const diffClamp = Animated.diffClamp(scrollY,0,100)
  const translateY = diffClamp.interpolate({
    inputRange:[0,45],
    outputRange:[0,-45]
  })

  const cardData = useSelector(state=>{
    return state.data
  })
  return (
    <SafeAreaView>
      <Animated.View style={{
        transform:[{translateY:translateY}], 
        zIndex:100,
        elevation: 4}}>
        <Header />
      </Animated.View>
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
        onScroll={(e)=>{
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      />
    </SafeAreaView>
  );
  
}

export default Home;
