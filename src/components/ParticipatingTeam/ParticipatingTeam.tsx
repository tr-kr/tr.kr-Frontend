import React from 'react';

const ParticipatingTeam = () => {

    const backendData = ['xxxxx', 'xxxx', 'xxxxxxxxxxx', 'xxxx', 'xxxxxxxx', 'xxxxx'];

    return (
        <div className="h-screen mt-[30px] ml-[10%] mr-[10%]">
            <div className="flex justify-between">
                <div className="text-white text-[40px]">VX OPEN CHALLENGE</div>
                <div className="flex items-center">
                    <button className="w-[216.16px] h-[34.53px] text-white text-[20px] ml-auto rounded-[25px] border-[3px] border-white mr-[10px]">
                        싱글 엘레미네이션
                    </button>
                    <button className="w-[89.4px] h-[34.53px] bg-[#D9D9D9] text-white text-[20px] ml-2 rounded-[25px] border-[3px] border-white bg-opacity-20">
                        6팀
                    </button>
                </div>
            </div>
            <div className="flex mt-[10px]">
                <button className="w-[104.68px] h-[34.53px] bg-[#3f4fe1] text-white text-[20px] rounded-[25px] border-[3px] border-white">
                    진행중
                </button>
                <div className="text-white text-[24px] ml-[15px]">
                    20XX.XX.XX~XX.XX
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[55%] mt-[30px] bg-[#D9D9D9] bg-opacity-25 rounded-lg space-y-2 p-5">
                    {backendData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-white text-[20px] text-center">
                                {item}
                            </div>
                            {index < backendData.length - 1 && <div className="border-b mr-[5px] ml-[5px]"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ParticipatingTeam;
