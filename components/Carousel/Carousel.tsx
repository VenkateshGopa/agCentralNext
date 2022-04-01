import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef, useState } from 'react'

import classe from './Carousel.module.css'

interface Carouseltype {
  children: object
  noofslides: number
}
const Carousel = (props: Carouseltype) => {
  const sliderRef = useRef<Slider>(null)
  const [slide, setslide] = useState<number>(0)
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => sliderRef.current!.slickPrev()}
        disabled={slide === 0}
        className={`${classe.blue} w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed`}
      >
        <i className="fa fa-thin fa-angle-left"></i>
      </button>
      <div className="w-11/12">
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          arrows={false}
          ref={sliderRef}
          slidesToShow={1}
          slidesToScroll={1}
          beforeChange={(c, n) => {
            setslide(n)
          }}
        >
          {props.children}
        </Slider>
      </div>

      <button
        disabled={slide == props.noofslides - 1}
        onClick={() => sliderRef.current!.slickNext()}
        className={`${classe.blue} w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed`}
      >
        <i className="fa fa-thin fa-angle-right"></i>
      </button>
    </div>
  )
}

export default Carousel
