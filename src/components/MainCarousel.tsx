import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainCarousel = () => {
    return (
        <div className="rounded-xl border-2 border-gray-300 overflow-hidden w-4/5 mx-auto"> 
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                showArrows={true}
            >
                <div>
                    <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39" alt="Image 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1677611998429-1baa4371456b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80" alt="Image 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691" alt="Image 3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default MainCarousel;
