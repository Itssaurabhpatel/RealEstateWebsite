import logo from './logo.svg';
import './App.css';
import Header from './component/Header/header';
import Hero from './component/hero/hero';
import Company from './component/companies/company';
import Resedencies from './component/resedencies/resedencies';
import OurValues from './component/ourValues/ourValues';
import Contact from './component/contact/contact';
import GetStarted from './component/getSarted/getStarted';
import Footer from './component/footer/footer';

function App() {
  return (
    <>
    <div>
      <Header/>
      <Hero/>
      <Company/>
      <Resedencies/>
      <OurValues/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
