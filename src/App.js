import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './greeting';

class App extends React.Component {
  render () {
    return (
      <Router>
          <Routes>
            <Route path="/" element= {<h1>Home</h1>} />
            <Route path="/greetings" element= {<Greeting greeting="first load"/>} />
          </Routes>
        </Router>
    );
  }
}

export default App;
