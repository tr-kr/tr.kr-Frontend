import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const images = [
  'https://plus.unsplash.com/premium_photo-1673002094186-c7d8988b0f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1690626826433-08108e7a4516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
];

export default function MainCarousel() {
  const carouselRef = useRef(null);

  const onNext = () => {
    carouselRef.current.increment();
  };

  const onPrev = () => {
    carouselRef.current.decrement();
  };

  return (
    <div>
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="carousel" />
          </div>
        ))}
      </Carousel>
      <button className="bg-primary p-4 text-white" onClick={onPrev}>
        Previous
      </button>
      <button className="bg-primary p-4 text-white" onClick={onNext}>
        Next
      </button>
    </div>
  );
}
