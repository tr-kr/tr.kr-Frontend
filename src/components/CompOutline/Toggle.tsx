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

interface ToggleProps {
  togglePeriod: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ togglePeriod }) => {
  const [compAccess, setCompAccess] = useState(true);

  const handleCompAccessButtonClick = () => {
    setCompAccess((prev) => !prev);
    togglePeriod();
  };

  return (
      <div className="mt-[30px]">
          <button
            className={` relative w-[9.9969rem] h-[2.5rem] rounded-[1.875rem] border-[1px] border-[#d9d9d9] border-solid bg-[#d9d9d94d] box-border cursor-pointer before:content-[''] before:absolute before:left-0 before:w-[4.6755rem] before:h-[2.0619rem] before:rounded-[1.5625rem] before:ml-[2px] before:border-[2px] before:border-[#d9d9d9] before:border-solid before:bg-[#3f4fe1] ${
              transitionVariants.beforeToggle
            } ${compAccess ? null : transitionVariants.transform} `}
            onClick={handleCompAccessButtonClick}
          >
            <div className="pt-[1px] flex justify-between shrink-0">
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-[2px] mr-0 box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  compAccess
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                모집 기간
              </div>
              <div
                className={`flex justify-center items-center w-[4.6755rem] h-[2.0619rem] ml-0 mr-[2px] box-border text-center font-R text-[17px] not-italic font-normal leading-[1.2] z-[1] ${
                  !compAccess
                    ? fontColorVariants.activate
                    : fontColorVariants.disabled
                } ${transitionVariants.toggle}`}
              >
                대회 기간
              </div>
            </div>
          </button>
      </div>
  );
};

export default Toggle;