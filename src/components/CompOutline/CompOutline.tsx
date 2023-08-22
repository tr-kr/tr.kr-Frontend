import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import Toggle from './Toggle';

const CompOutline = () => {
    const backendInfo = ['...'];
    const togglePeriod = () => {
        setSelectedPeriod(prevPeriod => prevPeriod === '모집 기간' ? '대회 기간' : '모집 기간');
    };
    const crueMarks = [
        "15-08-2023",
        "16-08-2023",
        "17-08-2023",
        "18-08-2023",
        "19-08-2023",
        "20-08-2023",
    ];
    const compMarks = [
        "21-08-2023",
        "22-08-2023",
        "23-08-2023",
        "24-08-2023",
        "25-08-2023",
        "26-08-2023",
        "27-08-2023",
        "28-08-2023",
        "29-08-2023",
    ];
    const [selectedPeriod, setSelectedPeriod] = useState('모집 기간');

    const [competitionInfo, setCompetitionInfo] = useState<{
        id: number;
        competition_content: string;
        prize: string;
        qualification: string;
    } | null>(null);

    useEffect(() => {
        axios.get("http://3.34.170.230/api/competition/1")
            .then(response => {
                const responseData = response.data;
                if (responseData.result && responseData.result.length > 0) {
                    setCompetitionInfo(responseData.result[0]);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mt-[5%]">
                <div className="flex">
                    <div className="w-[83px] h-[43px] bg-white text-[32px] text-center text-[#3F4FE1] rounded-[7px]">
                        정보
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[100px] scroll-container overflow-scroll">
                        {competitionInfo && competitionInfo.competition_content}
                    </div>
                    <div className="w-[83px] h-[83px] bg-[#3F4FE1] text-[32px] text-center text-white leading-tight p-1 rounded-[7px]">
                        진행
                        모드
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%] scroll-container overflow-scroll">
                        {backendInfo}
                    </div>
                </div>

                <div className="flex mt-[8%]">
                    <div className="w-[83px] h-[43px] bg-[#3F4FE1] text-[32px] text-center text-white rounded-[7px]">
                        보상
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[100px] scroll-container overflow-scroll">
                        {competitionInfo && competitionInfo.prize}
                    </div>
                    <div className="w-[83px] h-[83px] bg-white text-[32px] text-center text-[#3F4FE1] leading-tight p-1 rounded-[7px]">
                        참가
                        자격
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%] scroll-container overflow-scroll">
                        {competitionInfo && competitionInfo.qualification}
                    </div>
                </div>
            </div>
            <div className="mt-[3%]">
                <div className={`grid grid-cols-1 pt-5 text-center text-[#3F4FE1] w-[342px] h-[391px] rounded-[7px] border-[#3F4FE1] border-[3px] p-2 text-[24px]`}>
                    <div>일정
                        <Calendar
                            className="text-white text-[20px] bg-transparent border-transparent"
                            formatDay={(locale, date: Date) =>
                                date.toLocaleString('en', { day: 'numeric' })
                            }
                            formatShortWeekday={(locale, date: Date) =>
                                date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase().slice(0, 1)
                            }
                            locale="en-US"
                            tileClassName={({ date, view }) => {
                                const targetMarks = selectedPeriod === '모집 기간' ? crueMarks : compMarks;
                                if (targetMarks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                                    return "highlight";
                                }
                            }}
                        />
                    </div>
                </div>
                {/* <button className="w-[124px] h-[33px] rounded-[7px] bg-[#D9D9D9] bg-opacity-30 border-white border-2 text-white mt-[30px] text-[15px] hover:scale-[1.03]"
                onClick={togglePeriod}>
                {selectedPeriod}</button> */}
                <Toggle togglePeriod={togglePeriod}></Toggle>
            </div>
        </div>
    );
};

export default CompOutline;
