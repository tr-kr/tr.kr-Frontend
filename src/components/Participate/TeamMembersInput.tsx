import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TeamMembersInput = ({ children }: Props) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-center items-center relative h-[35px]">
        <div className="w-[50px] text-[20px] text-white font-R text-right">
          {children}
        </div>
        <div className="before:content-[''] before:absolute before:top-0 before:-right-4 before:w-[3px] before:h-full before:bg-white" />
      </div>
      <input
        type="text"
        placeholder="이름"
        className="w-[150px] h-[45px] pl-2 rounded-[7px] border border-solid border-[#fff] bg-[#d9d9d91a] text-[#9f9f9f] font-R placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
      />
      <input
        type="text"
        placeholder="닉네임"
        className="w-[260px] h-[45px] pl-2 rounded-[7px] border border-solid border-[#fff] bg-[#d9d9d91a] text-[#9f9f9f] font-R placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
      />
    </div>
  );
};

export default TeamMembersInput;
