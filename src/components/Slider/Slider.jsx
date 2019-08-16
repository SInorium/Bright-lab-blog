import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  state = {
    currentSlide: 0
  }

  handleChangeSlide = (slide) => {
    this.setState({
      currentSlide: slide
    })
  }
  
  render() {
    const { post } = this.props
    const { currentSlide } = this.state

    return (
      <section className="containerSlider"> 
        <div className="slider">
          <div className="slider-inner">
            <div className="slider-slides">
              <img src={post.slides[currentSlide]} alt="" />
            </div>
          </div>
          <div className="slider-controls">
            {
              post.slides.map((_, key) => {
                let isActive = key === currentSlide
                let activeClass = 'slider-control__active'

                return (
                  <div
                    key={key}
                    className={`slider-control ${isActive && activeClass}`}
                    onClick={() => this.handleChangeSlide(key)}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Slider
