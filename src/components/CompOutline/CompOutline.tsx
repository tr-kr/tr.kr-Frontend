
const CompOutline = () => {
    const backendInfo = ['ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ'];

    return (
        <div className="h-screen">
            <div className="mt-[5%] ml-[5%]">
                <div className="flex mt-[5%] ml-[5%]">
                    <div className="w-[83px] h-[43px] bg-white text-[32px] text-center text-[#3F4FE1]">
                        정보
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[5%]">
                        {backendInfo}
                    </div>
                    <div className="w-[83px] h-[83px] bg-[#3F4FE1] text-[32px] text-center text-white leading-tight p-1">
                        진행
                        모드
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%]">
                        <div className="w-[84px] h-[26px] bg-white text-[20px] text-center text-[#3F4FE1]">게임모드</div>
                        <div>{backendInfo}</div>
                        <div className="w-[65px] h-[26px] bg-white text-[20px] text-center text-[#3F4FE1]">참가팀</div>
                        <div>{backendInfo}</div>
                    </div>
                </div>

                <div className="flex mt-[5%] ml-[5%] ">
                    <div className="w-[83px] h-[43px] bg-[#3F4FE1] text-[32px] text-center text-white">
                        보상
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[5%]">
                        {backendInfo}
                    </div>
                    <div className="w-[83px] h-[83px] bg-white text-[32px] text-center text-[#3F4FE1] leading-tight p-1">
                        참가
                        자격
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%] mb-[10%]">
                        {backendInfo}
                    </div>
                    <button className="w-[124px] h-[33px] rounded-[7px] bg-[#D9D9D9] bg-opacity-30 border-white border-2 text-white mt-[143px] ml-auto mr-10">
                        1차 예선 기간
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CompOutline