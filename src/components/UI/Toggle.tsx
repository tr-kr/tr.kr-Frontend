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

interface Props {
  leftTitle: string;
  rightTitle: string;
  width?: string;
  animationDistance?: string;
  togglePeriod?: () => void;
}

const Toggle = ({
  leftTitle,
  rightTitle,
  width,
  animationDistance,
  togglePeriod,
}: Props) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleClick = () => {
    setIsToggled((prev) => !prev);
    if (togglePeriod) togglePeriod();
  };

  return (
    <button
      className={`flex items-center relative ${
        width || 'min-w-[160px]'
      } h-[2.5rem] rounded-[1.875rem] border-[1px] border-[#d9d9d9] border-solid bg-[#d9d9d94d] box-border cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[80px] before:h-[38px] before:rounded-[25px] before:border-[2px] before:border-solid before:border-[#d9d9d9] before:bg-[#3f4fe1] ${
        transitionVariants.beforeToggle
      } ${
        animationDistance && isToggled ? 'before:w-[80px]' : animationDistance
      } ${isToggled ? null : transitionVariants.transform} `}
      onClick={handleClick}
    >
      <div className="w-full pt-[1px] flex justify-between items-center shrink-0">
        <div
          className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-[2px] mr-0 box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
            isToggled ? fontColorVariants.activate : fontColorVariants.disabled
          } ${transitionVariants.toggle}`}
        >
          {leftTitle}
        </div>
        <div
          className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-0 ${
            width ? 'pr-[12px]' : 'pr-[2px]'
          }  box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
            !isToggled ? fontColorVariants.activate : fontColorVariants.disabled
          } ${transitionVariants.toggle}`}
        >
          {rightTitle}
        </div>
      </div>
    </button>
  );
};

export default Toggle;
