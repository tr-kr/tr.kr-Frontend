import Slider from 'react-slick';
import { Competition } from '../util';
import { getCurrentStatus } from '../util/index';
import { useNavigate } from 'react-router-dom';
interface CardSliderProps {
  info: Competition[];
  settings: any;
}
export default function CardSlider({ info, settings }: CardSliderProps) {
  const navigate = useNavigate();
  return (
    <Slider {...settings}>
      {info.map((item, index) => {
        const status = getCurrentStatus(item.recruit_period);

        return (
          <div key={index} className="p-4 flex flex-col">
            <div
              onClick={() => navigate(`/detail/${item.id}`)}
              className="bg-white rounded-md shadow-md overflow-hidden relative flex flex-col"
            >
              <img
                src={`//ryueclipse.shop/${item.poster_path}`}
                alt="cardImage"
                className="object-cover xl:h-72 h-48 w-full border-b-[3px] border-primary"
              />
              <div className="flex flex-col px-4 py-2 flex-grow">
                <p className="flex justify-between items-center">
                  <span className="text-[20px] font-EB">
                    {item.competition_title}
                  </span>
                  <span className="text-xl font-EB text-orange-400 ">
                    {item.prize}
                  </span>
                </p>
                <p className="h-16 line-clamp-2">{item.competition_content}</p>
                <span className="flex items-center gap-2 text-md justify-center text-primary font-B">
                  {`${item.recruit_period}`}
                </span>
                <p className="text-md font-EB text-center bg-primary text-white rounded-lg">
                  {item.event}
                </p>
                <p
                  className={`text-sm absolute right-3 top-3 z-10 px-4 py-2 border-2 border-white rounded-md ${
                    status === '모집중'
                      ? 'bg-primary text-white'
                      : status === '모집마감'
                      ? 'bg-gray text-white'
                      : 'bg-onReady text-white'
                  }`}
                >
                  {status}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
