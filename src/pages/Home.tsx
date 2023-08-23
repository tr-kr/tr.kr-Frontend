import MainCarousel from '../components/MainCarousel';

const Home = () => {
  return (
    <section>
      <div className="bg-gray pt-2">
        {/* <div className="flex justify-between items-center px-8 py-4">
          <h1 className="font-EB text-4xl text-white">TR.KR 대회 리스트</h1>
        </div> */}
        <MainCarousel />
      </div>
    </section>
  );
};

export default Home;
