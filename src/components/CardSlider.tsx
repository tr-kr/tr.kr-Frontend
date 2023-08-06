import React from 'react';
import Slider from 'react-slick';

export default function CardSlider({ cards, settings }) {
  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="p-4">
          <div className="bg-white rounded-md shadow-md overflow-hidden relative">
            <img
              src={card.imgUrl}
              alt="cardImage"
              className="object-cover xl:h-72 h-48 w-full border-b-4 border-primary"
            />
            <div className="flex flex-col px-4 py-2">
              <p className="flex justify-between items-center">
                <span className="text-[20px] font-EB">{card.title}</span>
                <span className="text-md text-gray">{card.place}</span>
              </p>
              <p className="flex items-center mt-2 gap-2 text-md text-primary font-B text-start">
                <span>{card.startDate}</span>~<span>{card.endDate}</span>
              </p>

              <p className="text-md font-EB text-right text-primary">
                {card.game}
              </p>
              <p
                className={`text-sm absolute right-3 top-3 z-10 px-4 py-2 border-2 border-white rounded-md ${
                  card.status === '모집중'
                    ? 'bg-primary text-white'
                    : card.status === '모집완료'
                    ? 'bg-gray text-white'
                    : 'bg-onReady text-white'
                }`}
              >
                {card.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
