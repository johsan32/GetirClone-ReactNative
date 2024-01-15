import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
//import MyTabs from './src/navigation/TabNavigation';
import MyStackNavigation from './src/navigation/StackNavigation';
import MyTabs from './src/navigation/RouteNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
