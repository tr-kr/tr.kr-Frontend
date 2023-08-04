import React, { useState } from 'react';

const cards = [
  { title: 'Card 1', content: 'This is card 1' },
  { title: 'Card 2', content: 'This is card 2' },
  { title: 'Card 3', content: 'This is card 3' },
  { title: 'Card 4', content: 'This is card 4' },
  { title: 'Card 5', content: 'This is card 5' },
  { title: 'Card 6', content: 'This is card 6' },
  { title: 'Card 7', content: 'This is card 7' },
  { title: 'Card 8', content: 'This is card 8' },
];

const League = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 4 + cards.length) % cards.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 4) % cards.length);
  };

  const Card = ({ data }) => {
    return (
      <div className="border p-4">
        <h2 className="text-xl">{data.title}</h2>
        <p>{data.content}</p>
      </div>
    );
  };

  return (
    <div className="flex items-center">
      <button className="p-4" onClick={handlePrev}>
        Prev
      </button>
      <div className="grid grid-cols-2 gap-4">
        {cards.slice(activeIndex, activeIndex + 4).map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
      <button className="p-4" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default League;
