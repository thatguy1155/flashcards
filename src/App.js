import React from 'react';
import './App.css';
import {
  Route, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/header';
import Review from './Review/Review';
import Add from './Add/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Review />} />
          <Route exact path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
