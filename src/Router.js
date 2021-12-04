import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackScreen from './Components/TrackScreen';
import Track from './Components/Track';
import ProgramListScreen from './Components/ProgramListScreen';
import TrackListScreen from './Components/TrackListScreen';

const MainStack = createStackNavigator();

class Router extends Component {
  render() {
    return (
      <MainStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ffcd3a',
        },
        headerTintColor: '#fff',
      }}>
        <MainStack.Screen
          component={ProgramListScreen}
          name="ProgramListScreen"
          options={{ headerShown: true,title:"Programs" }}
          
        />
        <MainStack.Screen
          component={TrackListScreen}
          name="TrackListScreen"
          options={{ headerShown: true }}
          
        />
        <MainStack.Screen
          component={TrackScreen}
          name="TrackScreen"
          options={{ headerShown: true }}
          
        />
      </MainStack.Navigator>
    );
  }

}


export default Router;