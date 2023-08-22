import Identifier from '../../UI/Identifier';

const Mode = () => {
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[110px] relative">
        <Identifier title="진행 모드" color="secondary" />
      </div>
      <form className="flex flx-col ml-[25px]">
        <div className="w-[640px] h-auto">
          <textarea
            placeholder="진행 모드를 입력하세요"
            className="w-full h-[110px] pl-[16px] pt-[10px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
      </form>
    </div>
  );
};

export default Mode;
