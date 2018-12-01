import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import { SearchContainer } from './containers';
const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchContainer />
        {/* <Router>
          <Scene key="root" hideNavBar>
            <Scene exact key="home" component={SearchContainer} initial={true}/>
          </Scene>
        </Router> */}
      </Provider>
    );
  }
}

