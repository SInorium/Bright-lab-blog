import React from 'react';
import './MediaPage.css';
import Slider from '../Slider/Slider'

export function MediaPage({ post }) {
    return (
        <article className="containerArticleMedia">
            <h3 className="articleTitle">
                { post.title }
            </h3>
            <span className="dateArticlePost">
                { post.time }
            </span>   
            <div className="wrapperPostMedia">
                <p className="ariclePostMedia">
                    { post.content.map(page => page) }
                </p>
            </div>
            <Slider post={post} className="sliderMedia" />      
        </article>
    )
}