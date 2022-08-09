import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

import HelloWorld from './HelloWorld';

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<h1>Hello World</h1>} />
            <Route path="/hello" element={<HelloWorld greeting="Friend" />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
