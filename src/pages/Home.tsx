import React from 'react';
import MainCarousel from '../components/MainCarousel';

const Home = () => {
  const category: string[] = ['인기순', '참여자순', '게임인기순'];
    return (
        <section>
          <div className='flex justify-between items-center px-8 py-4'>
            <h1 className='font-B text-4xl'>주목해야할 TR.KR 대회</h1>
          </div>
            <MainCarousel />
            {/* 다른 컴포넌트들 */}
        </section>
    );
};

export default Home;
