import {SafeAreaView} from 'react-native';
import React from 'react';
import './global.css';
import {Main} from './src/main.tsx';

export const App = () => {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
};
