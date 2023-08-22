import Identifier from '../UI/Identifier';
import Button from '../UI/Button';

const TeamName = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="relative w-[80px]">
        <Identifier title="팀명" color="secondary" />
      </div>
      <input
        type="text"
        placeholder="팀명을 입력하세요"
        className="w-[350px] h-[45px] pl-2 rounded-[7px] border border-solid border-[#fff] bg-[#d9d9d91a] text-[#9f9f9f] font-R placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
      />
      <div className="w-[80px] h-[45px]">
        <Button buttonTitle="중복확인" color={false} bigText={false} />
      </div>
    </div>
  );
};

export default TeamName;
