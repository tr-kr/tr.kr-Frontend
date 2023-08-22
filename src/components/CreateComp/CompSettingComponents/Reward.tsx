import Identifier from '../../UI/Identifier';

const Reward = () => {
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[227px] relative">
        <Identifier title="보상" color="primary" />
      </div>
      <form className="flex flex-col ml-[25px]">
        <div className="w-[450px] h-auto mb-1">
          <div className="mb-[22px]">
            <div className="font-L text-white text-[20px] mb-[7px]">1위</div>
            <div className="flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="보상을 입력하세요"
                className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
          <div className="mb-[22px]">
            <div className="font-L text-white text-[20px] mb-[7px]">2위</div>
            <div className="flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="보상을 입력하세요"
                className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white cursor-pointer">
            <div className="text-white font-R text-[15px]">+ 보상 추가하기</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reward;
