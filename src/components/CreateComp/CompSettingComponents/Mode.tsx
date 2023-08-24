import { useEffect, useState } from 'react';
import Identifier from '../../UI/Identifier';
import { CompSettingProps } from '../CompSetting';

const Mode = ({ compSetting, setCompSetting }: CompSettingProps) => {
  const [format, setFormat] = useState('');
  const [event, setEvent] = useState('');
  const [scale, setScale] = useState(0);

  const handleCompFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormat(e.target.value);
  };
  const handleCompEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
  };
  const handleCompScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScale(Number(e.target.value));
  };

  useEffect(() => {
    if (format && event && scale) {
      setCompSetting({
        ...compSetting,
        format: format,
        event: event,
        scale: scale,
      });
    }
  }, [format, scale, event]);

  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[256px] relative">
        <Identifier title="진행 모드" color="secondary" />
      </div>
      <form className="flex flex-col w-full ml-[25px]">
        <div className="flex flex-col justify-between items-start w-full h-[90px]">
          <label className="text-[20px] text-white font-R" htmlFor="event">
            종목
          </label>
          <input
            type="text"
            placeholder="종목을 입력하세요 (예시 : 리그오브레전드 등)"
            id="event"
            value={event}
            onChange={handleCompEvent}
            className="w-full h-[40px] pl-[10px] pt-[1px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
        <div className="flex flex-col justify-between items-start w-full h-[90px]">
          <label className="text-[20px] text-white font-R" htmlFor="method">
            경기 방식
          </label>
          <input
            type="text"
            placeholder="경기 방식을 입력하세요 (예시 : 싱글 엘레미네이션, BO3 등)"
            id="method"
            value={format}
            onChange={handleCompFormat}
            className="w-full h-[40px] pl-[10px] pt-[1px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
        <div className="flex flex-col justify-between items-start w-full h-[90px]">
          <label className="text-[20px] text-white font-R" htmlFor="scale">
            참가 규모
          </label>
          <input
            type="text"
            placeholder="참가 규모를 입력하세요 (예시 : 8팀 이내, 4팀~8팀 등)"
            id="scale"
            value={scale}
            onChange={handleCompScale}
            className="w-full h-[40px] pl-[10px] pt-[1px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
          />
        </div>
      </form>
    </div>
  );
};

export default Mode;
