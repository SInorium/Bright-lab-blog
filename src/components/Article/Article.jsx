import React from 'react';
import './Article.css';

export default function Article({ post }) {
    return (
    <article className="wrapperDataFlex">
      <span className="datePost"> 
      { post.month }
      <br/> 
      { post.year }
      </span>
        <div className="wrapperArticle">
          <h3 className="articleTitle">
            { post.title }
          </h3>
            <span className="dateArticlePost">
              { post.time }
              { post.month }
            </span>
              <div className="wrapperPost">
                <p className="ariclePost">
                  { post.content }
                </p>
                <p className="ariclePost">
                  { post.content }
                </p>
              </div>
        </div>
    </article>

    )
}