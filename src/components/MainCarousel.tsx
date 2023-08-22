import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Competition, getCompetition } from '../util';

export default function MainCarousel() {
  const carouselRef = useRef<Carousel>(null);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [competition, setCompetition] = useState<Competition[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCompetition();
        setCompetition(result);
      } catch (error) {
        console.error('Error fetching competitions:', error);
      }
    };
    fetchData();
  }, []);
  const goToSlide = (index: number) => {
    setSelectedItem(index);
  };
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setSelectedItem((prevSelectedItem) => (prevSelectedItem + 1) % 5);
          return 0;
        }
        return prevProgress + 0.3;
      });
    }, 10);
    return () => clearInterval(interval);
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
        interval={5000}
        transitionTime={1000}
        showIndicators={false}
      >
        {competition.map((item, index) => (
          <div key={index} className="h-[800px]">
            <img
              className="w-full h-full object-cover object-center"
              src={`//3.34.170.230/${item.poster_path}`}
              alt="carousel"
            />
            <div className="absolute bottom-5 left-10 p-8 bg-opacity-70 rounded-xl border-white border-2 bg-white text-black text-start">
              <h3 className="text-3xl text-primary font-EB">
                {item.competition_title}
              </h3>
              <p className="text-gray text-xl">{item.competition_content}</p>
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

      <div className="absolute  md:-bottom-[115px] lg:-bottom-[115px] xl:-bottom-[85px] w-full flex gap-2 my-4 justify-around">
        {competition.map((item, index) => (
          <button
            key={index}
            className={`flex-1 p-4 rounded-md border-[2px]  text-lg ${
              index === selectedItem
                ? 'bg-primary text-white font-EB'
                : ' text-primary bg-white font-R'
            }`}
            onClick={() => goToSlide(index)}
          >
            {item.competition_title}
          </button>
        ))}
      </div>
    </div>
  );
}
