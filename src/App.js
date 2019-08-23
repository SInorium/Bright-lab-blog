import React from 'react';
import { Header } from './components/Header/Header.jsx';
import Main from './components/Main/Main';

import './App.css';

const App = () => {
  return(
    <div className="container" onClick={() => this.handleChangeState(7)}>
        <Header />
        <Main />
      </div>
  )
}

export default App;