import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

export default function MainCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (index) => {
        setActiveIndex(index);
        setProgress(0);
    }

    const images = [
        { title: 'Image 1', url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39' },
        { title: 'Image 2', url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691' },
        { title: 'Image 3', url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39' },
        { title: 'Image 4', url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691' },
        { title: 'Image 5', url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39' },
    ];

    return (
        <div className="relative">
            <Carousel 
            selectedItem={activeIndex}
            showThumbs={false}
            interval={5000} 
            onChange={handleChange} 
            infiniteLoop
            showArrows={true}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt={image.title} />
                    </div>
                ))}
            </Carousel>
            <div className="absolute bottom-0 w-full flex  items-center p-4">
                <div className="flex items-center justify-center w-12 h-12 text-4xl bg-white rounded-full cursor-pointer shadow-lg">
                <AiOutlineCaretLeft/>
                </div>
                <div className="flex items-center justify-between w-full">
                        {images.map((image, index) => (
                            <div 
                            onClick={()=> handleChange(index)}
                            key={index} className={`cursor-pointer w-1/3 overflow-scroll h-auto p-4  rounded-full mx-1 text-gray
                            ${activeIndex === index ? 'bg-primary' : ' bg-white'}
                            `}>
                                {image.title}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 text-4xl bg-white rounded-full cursor-pointer shadow-lg">
                <AiOutlineCaretRight/>
                </div>
            </div>
        </div>
    );
}
