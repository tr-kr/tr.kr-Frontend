import axios from 'axios';
import { qualiferProps } from './FirstQualifer';

const SecondQualifer = ({
  setModalOpen,
  team,
  setTeam,
  modalState,
  putTeamDone,
}: qualiferProps) => {
  const updateWinnerFirstTeam = async () => {
    try {
      await axios.post('https://ryueclipse.shop/api/tournament/1/1/1/2');
    } catch (err) {
      console.error(err);
    }
    setTeam({ ...team, sixth: team.third });
  };

  const updateWinnerSecondTeam = async () => {
    try {
      await axios.post('https://ryueclipse.shop/api/tournament/1/2/1/2');
    } catch (err) {
      console.error(err);
    }
    setTeam({ ...team, sixth: team.fourth });
  };
  return (
    <div className="flex flex-col justify-between items-center relative h-[90px]">
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer"
        onClick={() => {
          if (putTeamDone) updateWinnerFirstTeam();
          else setModalOpen({ ...modalState, open: true, callId: 'third' });
        }}
      >
        {team.third}
      </div>
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer"
        onClick={() => {
          if (putTeamDone) updateWinnerSecondTeam();
          else setModalOpen({ ...modalState, open: true, callId: 'fourth' });
        }}
      >
        {team.fourth}
      </div>
      <div className="absolute top-[15px] -right-[80px] w-[80px] h-[60px] border-l-[0px] border-r border-y border-solid border-[#fff]"></div>
    </div>
  );
};

export default SecondQualifer;
