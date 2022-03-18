import React from 'react';
import '../product/Product.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const slides = [
        {
          'slide': '/icon/image/1p13pro-cut.jpg',
          'span': ' iPhone 13 Pro',
          'osho': '  Oh.So.Pro.   ',
          'Learnmore': 'Learn more'
        },
      ]
  return (
    <div>
         <div>
        {slides.map((slide, index) => (
          <div key={index}>
            <span className='span-title'>{slide.span} </span>
            <span className='span-title-head'>{slide.osho} </span>
            <span>
              <Link className='span-title-head-Learnmore' to='#'>{slide.Learnmore} </Link>
            </span>
            <div><img src={slide.slide} alt='' className="panner-iphone" /> </div>

          </div>
        ))}
      </div>
    </div>
  )
}
