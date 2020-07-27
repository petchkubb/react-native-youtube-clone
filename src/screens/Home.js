import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
