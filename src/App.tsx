import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import reducer from './ducks';

import AppScreen from './screens/HomeScreen';

const store = createStore(combineReducers({ reducer }));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
};

export default App;
