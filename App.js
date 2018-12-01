import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Router, Scene } from 'react-native-router-flux';
import reducers from './reducers/index';
import { SearchContainer, AutoCompleteContainer } from './containers';
const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="search" component={SearchContainer}   initial={true}/>
            <Scene key="autoComplete" component={AutoCompleteContainer} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

