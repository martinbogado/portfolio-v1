import React, { useState } from 'react';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className={'app ' + ( darkTheme ? 'theme--dark' : 'theme--default')}>
      <Navbar changeTheme={changeTheme} darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} />
      <About />
      <Work />
      <Skills />
      <Footer darkTheme={darkTheme} />
    </div>
  )
}

export default App