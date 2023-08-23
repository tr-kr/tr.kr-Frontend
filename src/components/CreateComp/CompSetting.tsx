import Button from '../UI/Button';
import Information from './CompSettingComponents/Information';
import Period from './CompSettingComponents/Period';
import Reward from './CompSettingComponents/Reward';
import Mode from './CompSettingComponents/Mode';
import Rule from './CompSettingComponents/Rule';
import Qualification from './CompSettingComponents/Qualification';

const CompSetting = () => {
  return (
    <div className="flex flex-col justify-center w-[57.5rem] h-auto mb-[100px]">
      <div className="flex flex-col justify-between items-center mb-[200px]">
        <Information />
        <Period />
        <Qualification />
        <Reward />
        <Mode />
        <Rule />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[16px] w-[300px] h-[62px]">
          <Button buttonTitle="대회 등록하기" color={true} bigText={true} />
        </div>
        <div className="mb-[72px] w-[300px] h-[62px]">
          <Button buttonTitle="대회 수정하기" color={false} bigText={true} />
        </div>
      </div>
    </div>
  );
};

export default CompSetting;
