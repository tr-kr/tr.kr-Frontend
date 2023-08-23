import { useEffect, useState } from 'react';
import {
  MyCompetition,
  getCompetitionById,
  getHostCompetitionById,
} from '../util';
import MyLeagueCard from '../components/MyLeagueCard';

const TITLE_STYLE =
  'bg-primary rounded-md w-fit mb-2 flex items-center justify-center text-white text-[33px] font-B p-1 px-6 ml-6';

export default function MyLeague() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [competition, setCompetition] = useState<MyCompetition[]>([]);
  const [hostCompetition, setHostCompetition] = useState<MyCompetition[]>([]);
  // const token = localStorage.getItem('token');
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWR4Ijo2OSwiaWF0IjoxNjkyODIzODY1LCJleHAiOjE2OTI4Mjc0NjV9.cRSKCEHIf4UpWZKoD3M-YDtBH7-kLzpE70u5t0_TOrs';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCompetitionById(token);
        const hostResult = await getHostCompetitionById(token);
        setHostCompetition(hostResult);
        setCompetition(result);
      } catch (error) {
        console.error('Error fetching competitions:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="flex flex-col mt-[120px]">
      <div className="flex items-center gap-4">
        <h1 className={`${TITLE_STYLE}`}>참여한 대회</h1>
        <span className="text-white text-3xl p-1 mb-2">
          {competition?.length}회
        </span>
      </div>
      <div className="h-[1.5px] rounded-full bg-white w-[97%] mt-2 mx-auto" />
      {competition?.length > 0 && (
        <MyLeagueCard ifHost={false} info={competition} settings={settings} />
      )}
      <div className="h-[4px] bg-opacity-75" />
      <div className="flex items-center gap-4">
        <h1 className={TITLE_STYLE}>개최한 대회</h1>
        <span className="text-white text-3xl p-1 mb-2">
          {hostCompetition?.length}회
        </span>
      </div>
      <div className="h-[1.5px] rounded-full bg-white w-[97%] mt-2 mx-auto" />
      {hostCompetition?.length > 0 && (
        <MyLeagueCard
          ifHost={true}
          info={hostCompetition}
          settings={settings}
        />
      )}
    </section>
  );
}
