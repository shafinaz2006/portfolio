import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './style.css';

function Header() {
  
  return (
    <header className='header'>
      <Navbar />
      <Hero />
    </header>
  )
}
export default Header;
