import Identifier from '../../UI/Identifier';
import { CompSettingProps } from '../CompSetting';

const Information = ({ compSetting, setCompSetting }: CompSettingProps) => {
  const handleCompName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompSetting({ ...compSetting, competition_title: e.target.value });
  };

  const handleCompIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCompSetting({ ...compSetting, competition_content: e.target.value });
  };
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[71px]">
      <div className="h-[122px] relative">
        <Identifier title="정보" color="secondary" />
      </div>
      <form className="ml-[25px]">
        <div className="pb-[9px]">
          <input
            type="text"
            placeholder="대회명"
            onChange={handleCompName}
            className="w-[536px] h-[32px] pl-[13px] text-white rounded-[7px] border border-solid border-white bg-[#d9d9d91a] placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
          />
        </div>
        <div>
          <textarea
            placeholder="대회 한 줄 소개"
            onChange={handleCompIntroduce}
            className="w-[536px] h-[82px] pl-[13px] pt-[7px] resize-none text-white rounded-[7px] border border-solid border-white bg-[#d9d9d91a] placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Information;
