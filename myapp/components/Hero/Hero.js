'use client'

import React from 'react'
import ImageSlider from './ImageSlider'

const Hero = () => {
  return (
    <section className='px-4 text-black py-16'>
    <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to DonutShop
        </h1>
        <p className="text-2xl">
          Your Source for Delicious Donuts
        </p>
      </div>
      <ImageSlider />
    </section>
  )
}

export default Hero