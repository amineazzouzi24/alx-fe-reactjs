import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Ali" age={25} bio="React beginner learning hooks and styling!" />
      <Footer />
    </div>
  );
}

export default App;
