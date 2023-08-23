import { modalProps } from './BracketModal';
import axios from 'axios';

const SemiFinal = ({ team, setTeam, putTeamDone }: modalProps) => {
  const updateWinnerFirstTeam = async () => {
    try {
      await axios.post('http://3.34.170.230/api/tournament/1/1/2/1');
    } catch (err) {
      console.error(err);
    }
    if (setTeam) setTeam({ ...team, seventh: team.fifth });
  };

  const updateWinnerSecondTeam = async () => {
    try {
      await axios.post('http://3.34.170.230/api/tournament/1/2/2/1');
    } catch (err) {
      console.error(err);
    }
    if (setTeam) setTeam({ ...team, seventh: team.sixth });
  };

  return (
    <div className="flex flex-col justify-between items-center relative h-[150px]">
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B hover:cursor-pointer"
        onClick={() => {
          if (putTeamDone) updateWinnerFirstTeam();
        }}
      >
        {team.fifth}
      </div>
      <div
        className="flex justify-center items-center w-[145px] h-[42px] rounded-[7px] border-[1px] border-solid border-[#fff] bg-[#d9d9d94d] text-[18px] text-white font-B "
        onClick={() => {
          if (putTeamDone) updateWinnerSecondTeam();
        }}
      >
        {team.sixth}
      </div>
      <div className="absolute top-[15px] -right-[80px] w-[80px] h-[120px] border-l-[0px] border-r border-y border-solid border-[#fff]"></div>
    </div>
  );
};

export default SemiFinal;
