import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
      {/* <header class="hidden">
        <h2>T.J. Patel</h2>
      </header> */}
  
      <ul class="nav-links">
        <li className="nav-link"><a href="#about-me">About me</a></li>
        <li className="nav-link"><a href="#projects">Projects</a></li>
        <li className="nav-link"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    )
  }
}

export default Nav;