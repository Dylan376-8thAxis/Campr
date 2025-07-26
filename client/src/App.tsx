import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Campsites from './pages/Campsites';
import MyPassports from './pages/MyPassports';
import Rewards from './pages/Rewards';

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/campsites" element={<Campsites />} />
            <Route path="/mypassports" element={<MyPassports />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;