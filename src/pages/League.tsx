import { useEffect, useState } from 'react';
import CardSlider from '../components/CardSlider';
import { Competition, getCompetition } from '../util';

const TITLE_STYLE = 'text-white text-4xl pt-4 px-4';

export default function League() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
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
  return (
    <section className="bg-gray flex flex-col gap-1">
      <h1 className={`${TITLE_STYLE}`}>대학교 게임 대회</h1>
      {competition.length > 0 && (
        <CardSlider info={competition} settings={settings} />
      )}
      <div className="h-[4px] bg-opacity-75" />
      <h1 className={TITLE_STYLE}>직장인 PC방 대회</h1>
      {competition.length > 0 && (
        <CardSlider info={competition} settings={settings} />
      )}
    </section>
  );
}
