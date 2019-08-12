import React, {useState} from 'react';
import './Slider.css'

export function Slider({slides, index}) {
    const [img, setImg] = useState(slides[0]);
    

    const changeSlide = (slide) => {
        setImg(slide)
    }
    return (
        <div className="Slider">
            <div className="SliderImg">
                <img src={img} alt="Slider" width="1000" height="600"/>
            </div>
            <div className="SliderBtn">
                {slides.map(slide => {
                    
                    return (
                        <>
                            <input type="radio" id={slide+index} name={`radio${index}`} onChange={() => changeSlide(slide)} />
                            <label htmlFor={slide+index}>
                            </label>
                        </>
                    )
                })}
            </div>
        </div>
    )
}