import { Dispatch } from 'react';
import { modalState, renderedTeam } from './BracketModal';
import axios from 'axios';

export interface qualiferProps {
  setModalOpen: Dispatch<React.SetStateAction<modalState>>;
  team: renderedTeam;
  setTeam: Dispatch<React.SetStateAction<renderedTeam>>;
  modalState: modalState;
  putTeamDone: boolean;
}

const FirstQualifer = ({
  setModalOpen,
  team,
  setTeam,
  modalState,
  putTeamDone,
}: qualiferProps) => {
  const updateWinnerFirstTeam = async () => {
    try {
      await axios.post('https://ryueclipse.shop/api/tournament/1/1/1/1');
    } catch (err) {
      console.error(err);
    }
    setTeam({ ...team, fifth: team.first });
  };

  const updateWinnerSecondTeam = async () => {
    try {
      await axios.post('https://ryueclipse.shop/api/tournament/1/2/1/1');
    } catch (err) {
      console.error(err);
    }
    setTeam({ ...team, fifth: team.second });
  };

  return (
    <div className="flex flex-col justify-between items-center relative h-[90px]">
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer"
        onClick={() => {
          if (putTeamDone) updateWinnerFirstTeam();
          else setModalOpen({ ...modalState, open: true, callId: 'first' });
        }}
      >
        {team.first}
      </div>
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer"
        onClick={() => {
          if (putTeamDone) updateWinnerSecondTeam();
          else setModalOpen({ ...modalState, open: true, callId: 'second' });
        }}
      >
        {team.second}
      </div>
      <div className="absolute top-[15px] -right-[80px] w-[80px] h-[60px] border-l-[0px] border-r border-y border-solid border-[#fff]"></div>
    </div>
  );
};

export default FirstQualifer;
