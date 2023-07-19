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
      <div className=" sticky top-0 left-0 right-0"> <Header /></div>
     
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
