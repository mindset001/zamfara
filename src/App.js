// import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration";
import Application from "./components/Application.jsx";
import Footer from './components/Footer';
import Disclaimer from "./components/Disclaimer";
import Message from './components/Message';

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
      <Message/>
      <Application/>
      <Registration/>
      <Disclaimer/>
      <Footer/>
    </div>
  );
}

export default App;
