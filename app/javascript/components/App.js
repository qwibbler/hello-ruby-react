import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HelloWorld from "./HelloWorld"

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Hello World</h1>} />
          <Route path="/hello" element={<HelloWorld greeting="Friend" />} />
        </Routes>
      </Router>
    );
  }
}

export default App
