import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Search from './screens/Search';

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Home /> */}
        <Search />
      </>
    );
  }
}
