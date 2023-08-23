import Slider from 'react-slick';
import { MyCompetition } from '../util';
import { useNavigate } from 'react-router-dom';
interface CardSliderProps {
  info: MyCompetition[];
  settings: any;
  ifHost: boolean;
}
export default function MyLeagueCard({
  info,
  settings,
  ifHost,
}: CardSliderProps) {
  const navigate = useNavigate();
  return (
    <Slider {...settings}>
      {info.map((item, index) => {
        return (
          <div key={index} className="p-4 px-6 flex flex-col">
            <div
              onClick={() => navigate(`/banner/${item.id}`)}
              className="bg-white relative rounded-md shadow-md overflow-hidden flex flex-col"
            >
              <div className="flex flex-col p-6 flex-grow">
                <p className="flex justify-between items-center ">
                  <span className="text-3xl font-EB shrink-0">
                    {item.competition_title}
                  </span>
                  <span className="text-2xl font-EB text-orange-400 shrink-0 ">
                    {item.prize}
                  </span>
                </p>
                <p className="py-1 line-clamp-2 text-xl my-1">
                  {item.competition_content}
                </p>
                <span className="text-primary font-B tracking-wide text-lg">
                  {`${item.recruit_period}`}
                </span>
                <div className="flex justify-between w-full gap-1">
                  <p className="flex justify-start items-center text-2xl text-md flex-1 font-EB text-center text-black rounded-md">
                    {item.event}
                  </p>
                  {!ifHost && (
                    <div className="flex-1/4 text-2xl text-white font-EB bg-primary p-3 px-6 rounded-lg">
                      {item.grade}위
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
