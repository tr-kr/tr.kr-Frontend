import { useEffect, useState } from 'react';
import Identifier from '../../UI/Identifier';
import { CompSettingProps } from '../CompSetting';

const Reward = ({ compSetting, setCompSetting }: CompSettingProps) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const handleCompPrize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
  };

  const handleCompSecondPrize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecond(e.target.value);
  };

  useEffect(() => {
    if (first && second) {
      const totalPrize = first + ',';
      const prize = totalPrize + second;
      setCompSetting({ ...compSetting, prize: prize });
    }
  }, [first, second]);
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[227px] relative">
        <Identifier title="보상" color="primary" />
      </div>
      <form className="flex flex-col w-full ml-[25px]">
        <div className="w-full h-auto mb-1">
          <div className="mb-[22px]">
            <div className="font-L text-white text-[20px] mb-[7px]">1위</div>
            <div className="flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="보상을 입력하세요"
                value={first}
                onChange={handleCompPrize}
                className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
          <div className="mb-[22px]">
            <div className="font-L text-white text-[20px] mb-[7px]">2위</div>
            <div className="flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="보상을 입력하세요"
                value={second}
                onChange={handleCompSecondPrize}
                className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white cursor-pointer">
            <div className="text-white font-R text-[15px]">+ 보상 추가하기</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reward;
