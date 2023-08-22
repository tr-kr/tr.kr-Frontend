import TeamMembers from '../components/Participate/TeamMembers';
import TeamName from '../components/Participate/TeamName';
import Button from '../components/UI/Button';

const ParticipatePage = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mt-[100px]">
      <div className="flex flex-col justify-between items-center w-[560px] h-[600px]">
        <TeamName />
        <TeamMembers />
        <div className="w-[300px] h-[65px]">
          <Button buttonTitle="참가신청" color={true} bigText={true} />
        </div>
      </div>
    </div>
  );
};

export default ParticipatePage;
