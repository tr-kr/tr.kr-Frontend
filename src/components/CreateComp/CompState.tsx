import { useState } from 'react';

const transitionVariants = {
  beforeToggle:
    'before:transition-all before:duration-[0.3s] before:cubic-bezier(0.18, 0.89, 0.35, 1.15)',
  toggle: 'transition-all duration-[0.3s] cubic-bezier(0.18, 0.89, 0.35, 1.15)',
  transform: 'before:translate-x-[79px] before:bg-[#d9d9d94d]',
};

const fontColorVariants = {
  activate: 'text-white',
  disabled: 'text-[#b7b7b7]',
};

const CompState = () => {
  const [compAccess, setCompAccess] = useState(true);
  const [compRecruitState, setCompRecruitState] = useState(true);

  const handleCompAccessButtonClick = () => {
    setCompAccess((prev) => !prev);
  };
  const handleCompRecruitButtonClick = () => {
    setCompRecruitState((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[57.5rem] h-auto mt-[148px]">
        <div className="flex justify-between items-center">
          <button
            className={`flex items-center relative w-[9.9969rem] h-[2.5rem] rounded-[1.875rem] border-[1px] border-[#d9d9d9] border-solid bg-[#d9d9d94d] box-border cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[80px] before:h-[38px] before:rounded-[25px] before:border-[2px] before:border-solid before:border-[#d9d9d9] before:bg-[#3f4fe1] ${
              transitionVariants.beforeToggle
            } ${compAccess ? null : transitionVariants.transform} `}
            onClick={handleCompAccessButtonClick}
          >
            <div className="w-full pt-[1px] flex justify-between items-center shrink-0">
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-[2px] mr-0 box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  compAccess
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                공개
              </div>
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-0 mr-[2px] box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  !compAccess
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                비공개
              </div>
            </div>
          </button>
          <button
            className={`flex items-center relative w-[170px]  h-[2.4rem] rounded-[1.875rem] border-[1px] border-[#d9d9d9] border-solid bg-[#d9d9d94d] box-border cursor-pointer before:content-[''] before:absolute before:left-0 before:h-[37px] before:rounded-[25px] before:border-[2px] before:border-solid before:border-[#d9d9d9] before:bg-[#3f4fe1] ${
              transitionVariants.beforeToggle
            } ${compRecruitState ? 'before:w-[80px]' : 'before:w-[90px]'} 
            ${compRecruitState || transitionVariants.transform} `}
            onClick={handleCompRecruitButtonClick}
          >
            <div className="w-full pt-[1px] flex justify-between items-center ">
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-[2px] mr-0 box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  compRecruitState
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                모집중
              </div>
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-0 pr-[12px] box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  !compRecruitState
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                모집완료
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompState;
