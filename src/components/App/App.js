import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />

        <main role="main">
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        </main>
        <footer>©T.J. Patel</footer>
      

    </div>
  );
}

export default App;
