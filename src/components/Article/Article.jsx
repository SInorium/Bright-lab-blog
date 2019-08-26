import React from "react";
import "./Article.css";
import Slider from "../Slider/Slider";

export default function Article({ ...item }) {
  return (
    <article className="wrapperDataFlex">
      <div className="wrapperArticle">
        <h3 className="articleTitle">{item.title}</h3>
        <span className="dateArticlePost">
          {item.day}
          {item.month}
        </span>
        <div className="wrapperPost">
          <p className="articlePost">{item.content}</p>
        </div>
      </div>
      {
        item.images.length > 0 ? (
        <Slider images={item.images} className="sliderMedia" />
      ) : null
      }
    </article>
  );
}
