import { modalProps } from './BracketModal';

const SecondQualifer = ({ setModalOpen, modalState, team }: modalProps) => {
  return (
    <div className="flex flex-col justify-between items-center relative h-[90px]">
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B "
        onClick={() =>
          setModalOpen({ ...modalState, open: true, callId: 'third' })
        }
      >
        {team.third}
      </div>
      <div
        className="w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d]"
        onClick={() =>
          setModalOpen({ ...modalState, open: true, callId: 'fourth' })
        }
      >
        {team.fourth}
      </div>
      <div className="absolute top-[15px] -right-[80px] w-[80px] h-[60px] border-l-[0px] border-r border-y border-solid border-[#fff]"></div>
    </div>
  );
};

export default SecondQualifer;
