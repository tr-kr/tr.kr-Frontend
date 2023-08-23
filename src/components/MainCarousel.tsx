import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Competition, getCompetition } from '../util';
import Banner_image1 from '../assets/images/BannerImage.png';
import Banner_image2 from '../assets/images/banner3.png';
import Banner_image3 from '../assets/images/Banner1.jpeg';
import Banner_image4 from '../assets/images/Banner7.jpeg';
import Banner_image5 from '../assets/images/Banner10.png';

type BannerType = {
  id: number;
  poster_path: string;
  competition_title: string;
  competition_content: string;
};
export default function MainCarousel() {
  const carouselRef = useRef<Carousel>(null);

  const Banner: BannerType[] = [
    {
      id: 1,
      poster_path: Banner_image1,
      competition_title: 'TR.KR이란?',
      competition_content: '대학생을 위한 E스포츠 플랫폼 TR.KR',
    },
    {
      id: 2,
      poster_path: Banner_image2,
      competition_title: 'TR.KR 소개',
      competition_content:
        '한양대 에리카 동아리 ECCA의 스크림 이벤트 모집 중 ! ',
    },
    {
      id: 3,
      poster_path: Banner_image3,
      competition_title: '주간스크림',
      competition_content: 'ECCA내 주간 스크림 모집 중! (DISCORD로 문의)',
    },
    {
      id: 4,
      poster_path: Banner_image4,
      competition_title: '으슬으슬 칼바람',
      competition_content: 'ECCA에서 개최하는 칼바람 대회 인원 모집중 ! ',
    },
    {
      id: 5,
      poster_path: Banner_image5,
      competition_title: 'TR.KR 칼바람 격전',
      competition_content: '칼바람 격전 대회 인원 모집중 ! 기존 팀 참여 가능',
    },
  ];
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
        {Banner.map((item, index) => (
          <div key={index} className="">
            <img
              className="w-full h-full object-contain object-center"
              src={item.poster_path}
              alt="carousel"
            />
            <div className="flex flex-col gap-4 absolute bottom-6 left-12 p-8 py-4 bg-opacity-60 rounded-xl border-primary border-[5px] bg-white text-black text-start">
              <h3 className="text-3xl text-primary font-EB">
                {item.competition_title}
              </h3>
              <p className="text-gray text-2xl font-B">
                {item.competition_content}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="w-full flex gap-[1.5px] mt-[1px] mb-1 justify-around">
        {Banner.map((item, index) => (
          <button
            key={index}
            className={`flex-1 p-4 py-6 rounded-md border-[2px]  text-2xl ${
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
      <div className="h-4">
        <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
