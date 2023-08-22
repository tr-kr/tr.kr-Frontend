import Identifier from '../../UI/Identifier';

const Period = () => {
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[160px] relative">
        <Identifier title="일시" color="primary" />
      </div>
      <form className="flex flex-col ml-[25px]">
        <div className="w-[540px] h-[70px] mb-1">
          <div className="mb-[15px]">
            <div className="font-L text-white text-[20px] mb-[7px]">
              모집 기간
            </div>
            <div className="flex justify-between items-center w-full">
              <input
                type="date"
                className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
              <div className="font-R text-white text-[24px]">~</div>
              <input
                type="date"
                className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
          <div className="mb-[42px]">
            <div className="font-L text-white text-[20px] mb-[7px]">
              대회 기간
            </div>
            <div className="flex justify-between items-center w-full">
              <input
                type="date"
                className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
              <div className="font-R text-white text-[24px]">~</div>
              <input
                type="date"
                className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Period;
