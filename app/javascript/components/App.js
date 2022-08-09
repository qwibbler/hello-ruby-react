import React from "react"
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Greeting from "./Greeting.js";

import store from "../redux/configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
       <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
       </Router>
      </Provider>
    );
  }
}

export default App;