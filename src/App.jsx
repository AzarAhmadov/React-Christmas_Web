import Css from '../src/Css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Santa from './components/Santa';
import Party from './components/Party';
import Gifts from './components/Gifts';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Santa />
      <Party />
      <Gifts />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
