import React from 'react';
import data from './utils/data';
import { Header } from './components/Header/Header.jsx';
import Article from './components/Article/Article.jsx';
import MediaPage  from './components/MediaPage/MediaPage.jsx';
// import Filter from './components/Filter/Filter';
import './App.css';

function App () {
  return (
      <div className="container">
        <Header />
        {/* <Filter post={data}/> */}
        <Article post={data[0]} />
        <MediaPage post={data[1]} />
        <MediaPage post={data[0]} />
        <Article post={data[1]} />
      </div>
      
  )
}

export default App;