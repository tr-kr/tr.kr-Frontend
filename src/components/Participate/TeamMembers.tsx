import TeamMembersInput from './TeamMembersInput';

const TeamMembers = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-[350px]">
      <div className="flex justify-start items-center w-full">
        <div className="max-w-[220px] text-[32px] font-[400] font-R text-white bg-[#3f4fe1] pl-[11px] pr-[11px] rounded-[7px] box-border break-keep">
          팀원 정보 입력
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full h-[280px]">
        <TeamMembersInput>팀장</TeamMembersInput>
        <TeamMembersInput>팀원1</TeamMembersInput>
        <TeamMembersInput>팀원2</TeamMembersInput>
        <TeamMembersInput>팀원3</TeamMembersInput>
        <TeamMembersInput>팀원4</TeamMembersInput>
      </div>
    </div>
  );
};

export default TeamMembers;
