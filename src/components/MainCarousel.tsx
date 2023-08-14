import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

interface Image {
  title: string;
  description: string;
  imgUrl: string;
}

const images: Image[] = [
  {
    title: 'Beautiful Landscape',
    description: 'A breathtaking view of mountains and rivers.',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1673002094186-c7d8988b0f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'City at Night',
    description: 'A dazzling cityscape illuminated at night.',
    imgUrl:
      'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Desert Oasis',
    description: 'A serene oasis in the heart of a desert.',
    imgUrl:
      'https://images.unsplash.com/photo-1690626826433-08108e7a4516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
  },
  {
    title: 'Tropical Beach',
    description: 'A tranquil beach with palm trees and clear blue water.',
    imgUrl:
      'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Snowy Mountains',
    description: 'A stunning view of snow-capped mountains and icy peaks.',
    imgUrl:
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  },
];

export default function MainCarousel() {
  const carouselRef = useRef<Carousel>(null);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const onNext = () => {
    carouselRef.current?.increment();
  };

  const onPrev = () => {
    carouselRef.current?.decrement();
  };
  const goToSlide = (index: number) => {
    setSelectedItem(index);
  };
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setSelectedItem(
            (prevSelectedItem) => (prevSelectedItem + 1) % images.length,
          );
          return 0;
        }
        return prevProgress + 0.3;
      });
    }, 10);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [selectedItem]);
  return (
    <div className="relative">
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        showArrows={false}
        selectedItem={selectedItem}
        showStatus={false}
        infiniteLoop={true}
        // autoPlay={true}
        interval={5000}
        transitionTime={1000}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index} className="h-[800px]">
            <img
              className="w-full h-full object-cover object-center"
              src={image.imgUrl}
              alt="carousel"
            />
            <div className="absolute bottom-5 left-10 pt-5 pb-3 pl-5 pr-3 bg-opacity-70 rounded-xl border-white border-2 bg-white text-black text-start">
              <h3 className="text-xl text-primary font-EB">{image.title}</h3>
              <p className="text-gray">{image.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="h-4 bg-gray-200 relative">
        <div
          className="absolute h-full bg-primary"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="absolute md:-bottom-[115px] lg:-bottom-[85px] w-full flex gap-2 my-4 justify-around">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-1 p-4 rounded-md border-[2px]  text-lg ${
              index === selectedItem
                ? 'bg-primary text-white font-EB'
                : ' text-primary bg-white font-R'
            }`}
            onClick={() => goToSlide(index)}
          >
            {image.title}
          </button>
        ))}
      </div>
    </div>
  );
}
