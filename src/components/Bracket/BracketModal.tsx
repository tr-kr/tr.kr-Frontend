import ReactDOM from 'react-dom';
import { Dispatch, useEffect, useState } from 'react';

export type renderedTeam = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
};

export type modalState = {
  open: boolean;
  callId: string;
};

type teamsType = {
  team_name: string;
};

export interface modalProps {
  setModalOpen: Dispatch<React.SetStateAction<modalState>>;
  teams?: Array<teamsType>;
  team: renderedTeam;
  setTeam?: Dispatch<React.SetStateAction<renderedTeam>>;
  modalState: modalState;
  putTeamDone?: boolean;
}

const BracketModal = ({
  setModalOpen,
  teams,
  modalState,
  team,
  setTeam,
}: modalProps) => {
  const [selectedTeam, setSelectedTeam] = useState('');

  const closeModal = () => {
    setModalOpen({ ...modalState, open: false, callId: '' });
  };

  const handleSelectTeam = () => {
    if (setTeam) setTeam({ ...team, [modalState.callId]: selectedTeam });
    closeModal();
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)] z-10"
          onClick={closeModal}
        />,
        document.getElementById('backdrop') as HTMLElement,
      )}
      {ReactDOM.createPortal(
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[600px] min-h-[400px] rounded-[10px] bg-[#2c2c2c] z-50">
          <div className="flex flex-col justify-between items-center w-full min-h-[350px]">
            <div className="text-[32px] text-white font-B">대진표 설정</div>
            <div className="flex flex-col justify-between items-center w-full min-h-[180px]">
              {teams &&
                teams.map((team) => {
                  return (
                    <button
                      key={team.team_name}
                      onClick={() => setSelectedTeam(team.team_name)}
                      className={`flex justify-start items-center w-[250px] h-[50px] pl-2 rounded-[12px] bg-[#d9d9d91a] border-[2px] border-solid ${
                        selectedTeam === team.team_name
                          ? 'border-primary'
                          : 'border-[#d9d9d9]'
                      } text-[16px] text-white font-R hover:cursor-pointer hover:border-primary transition-[border] duration-[0.2s] ease-out`}
                    >
                      {team.team_name}
                    </button>
                  );
                })}
            </div>
            <div className="w-[75%] h-[40px]">
              <button
                className="w-[calc(50%-5px)] h-full mr-2 rounded-[30px] bg-[#E7E7E7] text-[16px] text-black font-R"
                onClick={closeModal}
              >
                취소
              </button>
              <button
                className="w-[calc(50%-5px)] h-full rounded-[30px] bg-primary text-[16px] text-white font-R"
                onClick={handleSelectTeam}
              >
                확인
              </button>
            </div>
          </div>
        </div>,
        document.getElementById('modal') as HTMLElement,
      )}
    </>
  );
};

export default BracketModal;
