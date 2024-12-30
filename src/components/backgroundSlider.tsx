'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = ['./image1.jpeg', './image2.jpeg', './image3.jpeg']

export default function BackgroundSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  }

  return (
    <div className={'fullscreen-background'}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
