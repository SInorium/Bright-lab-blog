import React from 'react';
import './Article.css';

export function Article({ post }) {
    return (
    <article className="wrapperDataFlex">
      <span className="datePost">March 2018</span>
        <div className="wrapperArticle">
          <h3 className="articleTitle">
            { post.title}
          </h3>
            <span className="dateArticlePost">
              { post.time}
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