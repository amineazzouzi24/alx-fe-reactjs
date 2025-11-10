import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Ali" age={25} bio="Frontend developer who loves React!" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
