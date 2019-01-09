import React, { Component } from 'react';
import Home from './component/home'
import {Provider} from 'react-redux'
import store from './component/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
      
    );
  }
}

export default App;
