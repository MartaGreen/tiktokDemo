import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';
import store from './src/redux';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
