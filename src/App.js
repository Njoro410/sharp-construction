
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Pictures from './components/Pictures';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Banner from './components/Banner';




function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner/>
    <About/>
    <Services/>
    <Pictures/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
