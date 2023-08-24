import Identifier from '../../UI/Identifier';
import { CompSettingProps } from '../CompSetting';

const Qualification = ({ compSetting, setCompSetting }: CompSettingProps) => {
  const handleCompQualification = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCompSetting({ ...compSetting, qualification: e.target.value });
  };
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[135px] relative">
        <Identifier title="참가 자격" color="secondary" />
      </div>
      <form className="flex flx-col w-full ml-[25px]">
        <div className="w-full">
          <textarea
            placeholder="참가 자격을 입력하세요"
            onChange={handleCompQualification}
            className="w-full h-[137px] pt-[8px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
      </form>
    </div>
  );
};

export default Qualification;
