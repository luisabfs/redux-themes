import React from 'react';
import { View, Text, StatusBar } from 'react-native';

declare const global: { HermesInternal: null | {} };

const App: React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};
export default App;
