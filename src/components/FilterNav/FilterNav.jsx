import React from "react";
import data from "../../utils/data";
import "./FilterNav.css";

const FilterNav = ({ changeYear, changeMonth }) => {
  return (
    <nav>
      {data.map((item, id) => (
        <button key={id} onClick={() => changeYear(item.year)}>
          {item.year}
        </button>
      ))}
      {data.map((item, id) => (
        <button key={id} onClick={() => changeMonth(item.month)}>
          {item.month}
        </button>
      ))}
    </nav>
  );
};

export default FilterNav;
