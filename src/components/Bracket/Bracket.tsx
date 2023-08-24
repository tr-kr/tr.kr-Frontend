import { useEffect, useState } from 'react';
import Final from './Final';
import FirstQualifer from './FirstQualifer';
import SecondQualifer from './SecondQualifer';
import SemiFinal from './SemiFinal';
import axios from 'axios';
import BracketModal from './BracketModal';
import { useParams } from 'react-router';

const Bracket = () => {
  const [putTeamDone, setPutTeamDone] = useState(false);
  const [teams, setTeams] = useState([{ team_name: '' }]);
  const [team, setTeam] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
  });

  const { id } = useParams();

  const [modalOpen, setModalOpen] = useState({ open: false, callId: '' });

  const getCompetitionTeams = async () => {
    return await axios.get(`http://3.34.170.230/api/competition/entry/${id}`);
  };

  const getBracket = async () => {
    return await axios.get(`https://ryueclipse.shop/api/tournament/${id}`);
  };

  useEffect(() => {
    if (!localStorage.getItem('bracket/1')) {
      const createBracket = async () => {
        await axios.post(`https://ryueclipse.shop/api/tournament/${id}/create`);
        localStorage.setItem('bracket/1', 'created');
      };
      createBracket();
    }
    if (
      (team.first && team.second && team.third) ||
      (team.first && team.second && team.third && team.fourth)
    )
      setPutTeamDone(true);
    try {
      axios.all([getCompetitionTeams(), getBracket()]).then(
        axios.spread(function (teams, brack) {
          setTeams(teams.data.result);
          console.log(teams.data.result);
          console.log(brack.data.result);
        }),
      );
    } catch (err) {
      console.error(err);
    }
  }, [team]);

  return (
    <div className="flex justify-center items-center relative w-[900px] h-[500px] bg-[#101415] border-[1px] border-solid border-[#374c52]">
      <div className="flex justify-between items-center w-[610px]">
        <div className="flex flex-col justify-between items-center h-[200px]">
          <FirstQualifer
            setModalOpen={setModalOpen}
            team={team}
            setTeam={setTeam}
            modalState={modalOpen}
            putTeamDone={putTeamDone}
          />
          <SecondQualifer
            setModalOpen={setModalOpen}
            team={team}
            setTeam={setTeam}
            modalState={modalOpen}
            putTeamDone={putTeamDone}
          />
        </div>
        <div>
          <SemiFinal
            setModalOpen={setModalOpen}
            team={team}
            setTeam={setTeam}
            modalState={modalOpen}
            putTeamDone={putTeamDone}
          />
        </div>
        <div>
          <Final
            setModalOpen={setModalOpen}
            team={team}
            setTeam={setTeam}
            modalState={modalOpen}
          />
        </div>
      </div>
      {modalOpen.open && (
        <BracketModal
          setModalOpen={setModalOpen}
          modalState={modalOpen}
          teams={teams}
          team={team}
          setTeam={setTeam}
        />
      )}
    </div>
  );
};

export default Bracket;
