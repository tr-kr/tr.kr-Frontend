import Button from '../UI/Button';
import Information from './CompSettingComponents/Information';
import Period from './CompSettingComponents/Period';
import Reward from './CompSettingComponents/Reward';
import Mode from './CompSettingComponents/Mode';
import Rule from './CompSettingComponents/Rule';
import Qualification from './CompSettingComponents/Qualification';
import { Dispatch, useState } from 'react';
import axios from 'axios';

export type compSettingType = {
  competition_title: string;
  competition_content: string;
  event: string;
  qualification: string;
  prize: string;
  recruit_period: string;
  competition_period: string;
  format: string;
  scale: number;
};
export interface CompSettingProps {
  compSetting: compSettingType;
  setCompSetting: Dispatch<React.SetStateAction<compSettingType>>;
}

const CompSetting = () => {
  const [compSetting, setCompSetting] = useState({
    competition_title: '',
    competition_content: '',
    event: '',
    qualification: '',
    prize: '',
    recruit_period: '',
    competition_period: '',
    format: '',
    scale: 0,
  });

  // const [buttonValid, setButtonValid] = useState(false);

  const createComp = async () => {
    try {
      await axios.post('https://ryueclipse.shop/api/competition', compSetting);
      console.log('성공');
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   if (
  //     compSetting.competition_title &&
  //     compSetting.competition_content &&
  //     compSetting.event &&
  //     compSetting.qualification &&
  //     compSetting.prize &&
  //     compSetting.recruit_period &&
  //     compSetting.competition_period &&
  //     compSetting.format &&
  //     compSetting.scale
  //   ) {
  //     setButtonValid(true);
  //   }
  // }, [compSetting]);

  console.log(compSetting);
  return (
    <div className="flex flex-col justify-center w-[57.5rem] h-auto mb-[100px]">
      <div className="flex flex-col justify-between items-center mb-[200px]">
        <Information
          compSetting={compSetting}
          setCompSetting={setCompSetting}
        />
        <Period compSetting={compSetting} setCompSetting={setCompSetting} />
        <Qualification
          compSetting={compSetting}
          setCompSetting={setCompSetting}
        />
        <Reward compSetting={compSetting} setCompSetting={setCompSetting} />
        <Mode compSetting={compSetting} setCompSetting={setCompSetting} />
        <Rule />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[16px] w-[300px] h-[62px]">
          <Button
            buttonTitle="대회 등록하기"
            color={true}
            bigText={true}
            // disabled={buttonValid}
            onClick={createComp}
          />
        </div>
        {/* <div className="mb-[72px] w-[300px] h-[62px]">
          <Button buttonTitle="대회 수정하기" color={false} bigText={true} />
        </div> */}
      </div>
    </div>
  );
};

export default CompSetting;
