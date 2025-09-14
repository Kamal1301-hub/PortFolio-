// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path="/skills" element={<Skills />} />
          <Route path='/Projects' element={<Projects/>}  />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
