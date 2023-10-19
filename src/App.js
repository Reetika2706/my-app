import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Link,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
  <Router>
    <div className='App' >
    <nav>
      <Link to='/' className='Nav-item'> Home </Link>
      <Link to='/about' className='Nav-item'> About </Link>
      <Link to='/contact' className='Nav-item'> Contact </Link>

    </nav>
    <Routes>
      <Route path='/' exect element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/contact'  element={<Contact/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
