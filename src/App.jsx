import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="wrapper">
          <Header openLogin={openLogin} openSignup={openSignup} />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {isLoginOpen && (
          <Modal closeModal={closeLogin}>
            <Login onClose={closeLogin} />
          </Modal>
        )}

        {isSignupOpen && (
          <Modal closeModal={closeSignup}>
            <Signup onClose={closeSignup} />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;