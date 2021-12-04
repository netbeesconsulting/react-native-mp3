import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import 'react-native-gesture-handler';
import Router from './Router';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from 'native-base';

class App extends Component {

  render() {
    return (
      <Root>
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Provider>
      </Root>
    );
  }
}

export default App;
