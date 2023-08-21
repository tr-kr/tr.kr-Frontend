import Accordion from '../components/UI/Accordion';
import { useState } from 'react';

const BracketPage = () => {
  const [modes, setModes] = useState([
    '싱글 엘레미네이션',
    '더블 엘레미네이션',
    '프리포올',
  ]);

  const handleSecondElementClick = () => {
    const copyModes = [...modes];
    copyModes.splice(0, 2, copyModes[1], copyModes[0]);
    setModes(copyModes);
  };

  const handleThirdElementClick = () => {
    const copyModes = [...modes];
    copyModes.splice(0, 3, copyModes[2], copyModes[1], copyModes[0]);
    setModes(copyModes);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full mt-10">
        <div className="flex justify-between items-center w-[70%]">
          <div className="flex flex-col justify-between items-center h-[130px]">
            <div className="font-R text-[50px] font-[400] text-white">
              VX OPEN CHALLANGE
            </div>
            <div className="flex justify-between items-center w-[90%]">
              <div className="flex justify-center items-center w-[105px] h-[34px] rounded-[25px] border-[3px] border-solid border-[#D9D9D9] bg-[#3f4fe1] font-R text-[20px] font-[400] text-white">
                진행중
              </div>
              <div className="font-R text-[24px] font-[400] text-white">
                20XX. XX. XX ~ 20XX. XX. XX
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start w-[330px] h-[100px] pt-12">
            <Accordion title={modes[0]}>
              <div
                className="font-R text-[20px] font-[400] text-[#ffffff99]"
                onClick={handleSecondElementClick}
              >
                {modes[1]}
              </div>
              <div
                className="font-R text-[20px] font-[400] text-[#ffffff99]"
                onClick={handleThirdElementClick}
              >
                {modes[2]}
              </div>
            </Accordion>
            <div className="flex justify-center items-center w-[90px] h-[35px] rounded-[25px] border-[3px] border-solid border-[#D9d9D9] bg-[#d9d9d938] font-R text-[20px] font-[400] text-white">
              6팀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BracketPage;
