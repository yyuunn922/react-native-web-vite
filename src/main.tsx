import {Text, View} from 'react-native';
import React from 'react';

export const Main = () => {
  return (
    <View className={'border bg-red-600 relative'}>
      <View className={'absolute -translate-x-1/2'}>
        <Text>TEST TEST TEST</Text>
      </View>
    </View>
  );
};
