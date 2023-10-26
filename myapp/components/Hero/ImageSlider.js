'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
  return (
    <Carousel className='h-[500px]' showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000}>
      <div>
        <img src="https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" />
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1785852/pexels-photo-1785852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1785852/pexels-photo-1785852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 3" />
      </div>
    </Carousel>
  );
}

export default ImageSlider;
