import React from 'react';
import Routes from './PWA/config/router';
import { Provider } from 'react-redux';
import { store } from './PWA/config/store';

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
