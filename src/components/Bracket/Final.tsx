import { modalProps } from './BracketModal';

const Final = ({ team }: modalProps) => {
  return (
    <div
      className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer "
      // onClick={() =>
      //   setModalOpen({ ...modalState, open: true, callId: 'seventh' })
      // }
    >
      {team.seventh}
    </div>
  );
};

export default Final;
