import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { GlobalContextProvider } from './GlobalContext';
import './styles.css';
import PasswordFd from './PasswordFd';
import UseridFd from './UseridFd';
import AndnMain from './Main/AndnMain';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute
import ClientMain from './Main/ClientMain';
import OutsourcingMain from './Main/OutsourcingMain';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/find-userid" element={<UseridFd />} />
          <Route path="/find-password" element={<PasswordFd />} />
          <Route
            path="/home/:location"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/AndnMain"
            element={
              <PrivateRoute>
                <AndnMain />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;




/* TODO:
- 로그인 여부에 따라 제한 접근 라우팅 구현 필요
- 로그인 이후에 분기 처리 필요

*/