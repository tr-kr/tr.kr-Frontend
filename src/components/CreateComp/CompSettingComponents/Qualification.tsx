import Identifier from '../../UI/Identifier';

const Qualification = () => {
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[135px] relative">
        <Identifier title="참가 자격" color="secondary" />
      </div>
      <form className="flex flx-col ml-[25px]">
        <div className="w-[450px] h-auto">
          <input
            type="text"
            placeholder="참가 자격을 입력하세요"
            className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
          <input
            type="text"
            placeholder="참가 자격을 입력하세요"
            className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
          <input
            type="text"
            placeholder="참가 자격을 입력하세요"
            className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
      </form>
    </div>
  );
};

export default Qualification;
