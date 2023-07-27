import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MainCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalImages = 5;  // total number of images
    const [progress, setProgress] = useState(0);

    const handleChange = (index) => {
        setActiveIndex(index);
        setProgress(0);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const newProgress = oldProgress + 1;
                return newProgress;
            });
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="relative">
            <Carousel 
            autoPlay 
            interval={5000} 
            onChange={handleChange} 
            infiniteLoop
            showArrows={true}>
                <div>
                    <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39" />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1558979158-65a1eaa08691' />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39" />
                </div>
            </Carousel>
            
            <div className="absolute bottom-0 w-full flex justify-center items-center p-4">
                {[...Array(totalImages)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 mx-1 rounded-full transition-all duration-5000 ${activeIndex === i ? 'bg-primary' : 'bg-gray'}`} 
                        style={{width: activeIndex === i ? `${progress}%` : '0%'}}
                    />
                ))}
            </div>
        </div>
    );
}
