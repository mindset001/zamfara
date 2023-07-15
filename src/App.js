// import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration";
import Application from "./components/Application.jsx";
import Footer from './components/Footer';
import Disclaimer from "./components/Disclaimer";
import Message from './components/Message';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Category from './components/Category';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Hero/>
      <Message/>
      <Objective/>
      <Category/>
      <Application/>
      <Registration/>
      <Disclaimer/>
      <Footer/>
    </div>
  );
}

export default App;
