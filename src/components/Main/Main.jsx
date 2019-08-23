import React, { Component } from "react";
import "./Main.css";
import data from "../../utils/data";
import Article from "../Article/Article";
import DateArticle from "../DateArcticle/DateArticle";
import FilterNav from "../FilterNav/FilterNav";

class Main extends Component {
  state = {
    currentYear: null,
    currentMonth: null
  };

  handleFilterYearValue = value => {
    this.setState({
      currentYear: value
    });
  };

  handleFilterMonthValue = value => {
    this.setState({
      currentMonth: value
    });
  };

  filterDate = () => {
    if (this.state.currentMonth || this.state.currentYear) {
      return data.filter(item => {
        return (
          item.month === this.state.currentMonth ||
          item.year === this.state.currentYear
        );
      });
    }
    if (this.state.currentMonth && this.state.currentYear) {
      return data.filter(item => {
        return (
          item.month === this.state.currentMonth &&
          item.year === this.state.currentYear
        );
      });
    }
    return data;
  };

  render() {
    const filteredArray = this.filterDate();
    return (
      <>
        <FilterNav
          changeYear={this.handleFilterYearValue}
          changeMonth={this.handleFilterMonthValue}
        />
        {filteredArray.map((item, id) => {
          return (
            <div key={id} className="wrapperDataFlex">
              <DateArticle month={item.month} year={item.year} />

              <Article
                title={item.title}
                day={item.day}
                month={item.month}
                content={item.content}
                images={item.slides}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default Main;
