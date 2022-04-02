import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react';
import { Text, View } from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
