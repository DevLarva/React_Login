import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { GlobalContextProvider } from './GlobalContext';
import './styles.css';
import PasswordFd from './PasswordFd';
import UseridFd from './UseridFd';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/:location" element={<Home />} />
          <Route path="/find-userid" element={<UseridFd />} />
          <Route path="/find-password" element={<PasswordFd />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
