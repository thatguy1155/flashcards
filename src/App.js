import React from 'react';
import './App.css';
import {
  Route, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import Review from './Review/Review';
import Add from './Add/Add';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Review />} />
            <Route exact path="/add" element={<Add />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
