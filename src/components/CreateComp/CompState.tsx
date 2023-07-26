import { useState } from 'react';

const transitionVariants = {
  beforeToggle: 'before:transition-all before:duration-[0.3s] before:ease',
  toggle: 'transition-all before:duration-[0.3s] ease',
  transform: 'before:translate-x-[84px]',
};

const fontColorVariants = {
  activate: 'text-white',
  disabled: 'text-[#b7b7b7]',
};

const CompState = () => {
  const [isToggle, setIsToggle] = useState(true);
  const handleClick = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div className="w-full h-auto">
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center relative w-[10.3094rem] h-[2.5rem] rounded-[1.875rem] border-[1px] border-[#d9d9d9] border-solid bg-[#d9d9d94d] box-border cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[4.6755rem] before:h-[2.0619rem] before:rounded-[1.5625rem] before:ml-[2px] before:border-[2px] before:border-[#d9d9d9] before:border-solid before:bg-[#3f4fe1] ${
            transitionVariants.beforeToggle
          } ${isToggle ? null : transitionVariants.transform} `}
          onClick={handleClick}
        >
          <div className="w-full pt-[1px] flex justify-between items-center ">
            <div
              className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-[2px] mr-0 box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                isToggle
                  ? fontColorVariants.activate
                  : fontColorVariants.disabled
              } ${transitionVariants.toggle}`}
            >
              공개
            </div>
            <div
              className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-0 mr-[2px] box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                !isToggle
                  ? fontColorVariants.activate
                  : fontColorVariants.disabled
              } ${transitionVariants.toggle}`}
            >
              비공개
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CompState;
