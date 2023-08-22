import React from 'react';

const Result = () => {

    const backendData = ['xxxxx', 'xxxx', 'xxxxxxxxxxx', 'xxxx', 'xxxxxxxx', 'xxxxx'];

    return (
        <div className="h-screen mb-[10%]">
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
                <div className="flex w-[55%] mt-[30px] bg-[#D9D9D9] bg-opacity-25 rounded-lg p-5 text-white text-[20px]">
                    <span className="grid grid-cols-1 w-[53px] h-52 border-r-2 text-center">
                        {backendData.map((data, index) => (
                            <div key={index} className={`${index !== backendData.length - 1 ? "border-b-[1px]" : ""}`} >{index + 1}</div>
                        ))}
                    </span>
                    <span className="grid grid-cols-1 w-full text-center">
                        {backendData.map((data, index) => (
                           <div key={data} className={index !== backendData.length - 1 ? "border-b-[1px]" : ""}>{data}</div>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Result;
