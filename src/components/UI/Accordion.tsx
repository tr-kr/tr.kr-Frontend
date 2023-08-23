import { ReactNode, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  title?: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div onClick={handleClick}>
      <div
        className={`flex flex-col justify-between items-center w-[216px] rounded-[25px] border-[3px] border-solid border-[#D9d9D9] ${
          isToggle ? 'max-h-[110px]' : 'max-h-[35px]'
        } transition-[max-height] ease-in duration-[0.2s] overflow-hidden`}
      >
        <div className="flex justify-between items-center w-[85%] h-full">
          <span className="flex justify-center items-center w-[151px] font-R text-[20px] font-[400] text-white cursor-pointer">
            {title}
          </span>
          <FontAwesomeIcon
            className={`text-white transition-all ease-in duration-[0.2s] ${
              isToggle && 'rotate-180'
            }`}
            icon={faAngleDown}
            size="xl"
          />
        </div>
        <div className="flex flex-col justify-between items-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
