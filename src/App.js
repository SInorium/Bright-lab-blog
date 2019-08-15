import React from 'react';
import data from './utils/data';
import { Header } from './components/Header/Header.jsx';
import { Article } from './components/Article/Article.jsx';
import { MediaPage } from './components/MediaPage/MediaPage.jsx';
import './App.css';

function App () {
  return (
      <div className="container">
        <Header />
        <Article post={data[0]} />
        <MediaPage post={data[0]} />
        <MediaPage post={data[0]} />
        <Article post={data[0]} />
      </div>
      
  )
}

export default App;