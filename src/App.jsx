import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residencies from './components/Residencies/Residencies.jsx'
import Values from "./components/Values/Values.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App"> 
    
      <div className="main">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
