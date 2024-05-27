import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { GlobalContextProvider } from './GlobalContext';
import './styles.css';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/:location" element={<Home />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
