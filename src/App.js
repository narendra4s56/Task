import React from 'react';
// import Header from './components/Header';
import DarkWebThreats from './components/DarkWebThreats';
import CryptoTransactions from './components/CryptoTransactions';
import SuspectProfiles from './components/SuspectProfiles';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar></Navbar>
      <div style={{ padding: '20px' }}>
        <Home></Home>
        <DarkWebThreats />
        <CryptoTransactions />
        <SuspectProfiles />
        <Analytics />
      </div>
      <Footer />
    </div>
  );
}

export default App;