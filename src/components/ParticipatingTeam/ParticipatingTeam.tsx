import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ParticipatingTeam = () => {

    const [teamNames, setTeamNames] = useState<string[]>([]);

    useEffect(() => {
        axios.get("http://3.34.170.230/api/competition/entry/1")
            .then(response => {
                const responseData = response.data;
                const names = responseData.result.map((team: { team_name: string }) => team.team_name);
                setTeamNames(names);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="h-screen mt-[30px] ml-[10%] mr-[10%]">
            <div className="flex justify-between">
                <div className="text-white text-[40px]">VX OPEN CHALLENGE</div>
                <div className="flex items-center">
                    <button className="w-[216.16px] h-[34.53px] text-white text-[20px] ml-auto rounded-[25px] border-[3px] border-white mr-[10px]">
                        싱글 엘레미네이션
                    </button>
                    <div className="w-[89.4px] h-[34.53px] bg-[#D9D9D9] text-white text-[20px] ml-2 rounded-[25px] border-[3px] border-white bg-opacity-20 text-center">
                        6팀
                    </div>
                </div>
            </div>
            <div className="flex mt-[10px]">
                <div className="w-[104.68px] h-[34.53px] bg-[#3f4fe1] text-white text-[20px] rounded-[25px] border-[3px] border-white text-center">
                    진행중
                </div>
                <div className="text-white text-[24px] ml-[15px]">
                    20XX.XX.XX~XX.XX
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[55%] mt-[30px] bg-[#D9D9D9] bg-opacity-25 rounded-lg space-y-2 p-5">
                    {teamNames.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="text-white text-[20px] text-center">
                                {item}
                            </div>
                            {index < teamNames.length - 1 && <div className="border-b mr-[5px] ml-[5px]"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ParticipatingTeam;
