import Identifier from '../UI/Identifier';
import Button from '../UI/Button';

const TeamName = () => {
  return (
    <div className="flex justify-between items-start w-full h-[70px]">
      <div className="relative w-[80px]">
        <Identifier title="팀명" color="secondary" />
      </div>
      <div className="flex flex-col justify-between items-center relative w-[350px] h-full">
        <input
          type="text"
          placeholder="팀명을 입력하세요"
          className="w-full h-[45px] pl-2 rounded-[7px] border border-solid border-[#fff] bg-[#d9d9d91a] text-[#9f9f9f] font-R placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
        />
        <div className="before:content-['사용_가능한_팀명입니다.'] before:absolute before:left-0 before:-bottom-[5px] before:w-full before:h-[26px] before:text-[20px] before:text-[#00ff47] before:font-R" />
      </div>
      <div className="w-[80px] h-[45px]">
        <Button buttonTitle="중복확인" color={false} bigText={false} />
      </div>
    </div>
  );
};

export default TeamName;
