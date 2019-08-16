import React, { Component } from "react";
import Post from "./Post";

import "./Filter.css";

const posts = [
  {
    title: "Заголовок",
    text: "Это пост 2001 года",
    year: 2001,
    mounth: "Jan"
  },
  {
    title: "Заголовок",
    text: "Это пост 2002 года",
    year: 2002,
    mounth: "Feb"
  },
  {
    title: "Заголовок",
    text: "Это пост 2003 года",
    year: 2003,
    mounth: "Mar"
  }
];

class Filter extends Component {
  state = {
    filteredYear: null,
    filteredMounth: null
  };

  handleFilterValueYear = value => {
    this.setState({ filteredYear: value });
  };
  handleFilterValueMounth = value => {
      this.setState({ filteredMounth: value});
  };

  render() {
    const { filteredYear } = this.state;
    const { filteredMounth } = this.state;

    const filteredPostsYear = posts.filter(el => el.year === filteredYear);
    const filteredPostsMounth = posts.filter(el => el.mounth === filteredMounth)

    const collectionYear = filteredYear === null ? posts : filteredPostsYear;
    const collectionMounth = filteredMounth === null ? posts : filteredPostsMounth; 
    return (
      <div className="App">
        <div onClick={() => this.handleFilterValueYear(2001)} className="button">
          2001
        </div>
        <div onClick={() => this.handleFilterValueYear(2002)} className="button">
          2002
        </div>
        <div onClick={() => this.handleFilterValueMounth('Jan')} className="button">
            Jan
        </div>
        <div onClick={() => this.handleFilterValueMounth('Mar')} className="button">
            Mar
        </div>
        {collectionMounth.map((el, i) => (
            <Post key={i} postInfo={el} />
        ))}
        {collectionYear.map((el, i) => (
          <Post key={i} postInfo={el} />
        ))}
      </div>
    );
  }
}

export default Filter