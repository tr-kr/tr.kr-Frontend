import React from 'react';
import banner from '../../image/banner.png'

const Result = () => {

    const backendData = ['xxxxx', 'xxxx', 'xxxxxxxxxxx', 'xxxx', 'xxxxxxxx', 'xxxxx'];

    return (
        <div className="h-screen mb-[10%]">
            {/* {배너 관련 코드} */}
            <div>
                <div className="w-full h-[504px] bg-cover bg-center relative">
                    {/* 배경 이미지 설정 */}
                    <img src={banner} alt="배너" className="w-full h-full" />

                    {/* 맨 아래쪽에 겹치는 박스 */}
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-[139px] bg-black bg-opacity-50 text-[64px] text-white font-bold pl-10">VX OPEN CHALLENGE</div>
                </div>
            </div>
            {/* {배너 관련 코드} */}
            <div className="flex justify-between mt-[30px] ml-[10%] mr-[10%]">
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
            <div className="flex mt-[10px] ml-[10%] mr-[10%]">
                <div className="w-[104.68px] h-[34.53px] bg-[#3f4fe1] text-white text-[20px] text-center rounded-[25px] border-[3px] border-white">
                    진행중
                </div>
                <div className="text-white text-[24px] ml-[15px]">
                    20XX.XX.XX~XX.XX
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[55%] mt-[30px] bg-[#D9D9D9] bg-opacity-25 rounded-lg space-y-2 p-5">
                    {backendData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-white text-[20px] text-center">
                                {index + 1}.  {item}
                            </div>
                            {index < backendData.length - 1 && <div className="border-b mr-[5px] ml-[5px]"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Result;
