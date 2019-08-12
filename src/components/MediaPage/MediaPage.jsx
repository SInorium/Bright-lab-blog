import React from 'react';
import './MediaPage.css';
import Slider from '../Slider/Slider'

export function MediaPage({ post }) {
    return (
        <div className="containerArticleMedia">
            <h3 className="articleTitle">
                { post.title }
            </h3>
            <span className="dateArticlePost">
                { post.time }
            </span>
            <Slider post={post} className="sliderMedia" />      
            <div className="wrapperPostMedia">
                <p className="ariclePostMedia">
                    { post.content.map(page => page) }
                </p>
            </div>
               
        </div>
    )
}