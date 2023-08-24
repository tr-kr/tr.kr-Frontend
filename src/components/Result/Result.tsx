import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const Result = () => {
    const { id } = useParams();

    const [backendData, setBackendData] = useState<string[]>([]);
    const [period, setPeriod] = useState('');

    useEffect(() => {

        axios.get(`https://ryueclipse.shop/api/tournament/${id}/getRanking`)
            .then(response => {
                const rankingData = response.data.result;
                rankingData.sort((a: { grade: number }, b: { grade: number }) => a.grade - b.grade);
                const teamNames = rankingData.map((entry: { team_name: string }) => entry.team_name);
                setBackendData(teamNames);
            })
            .catch(error => {
                console.error("Error:", error);
            });

        axios.get(`https://ryueclipse.shop/api/competition/${id}`)
            .then(response => {
                const responseData = response.data;
                const competition = responseData.result[0];
                setPeriod(competition.competition_period);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id]);

    return (
        <div className="h-screen mb-[10%]">
            <div className="flex justify-between mt-[30px] ml-[10%] mr-[10%]">
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
            <div className="flex mt-[10px] ml-[10%] mr-[10%]">
                <div className="w-[104.68px] h-[34.53px] bg-[#3f4fe1] text-white text-[20px] text-center rounded-[25px] border-[3px] border-white">
                    진행중
                </div>
                <div className="text-white text-[24px] ml-[15px]">
                    {period.split(',')[0]} ~ {period.split(',')[1]}
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
