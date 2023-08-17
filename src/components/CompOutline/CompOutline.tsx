import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CompOutline = () => {
    const backendInfo = ['...'];
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const toggleCalendar = () => {
        setIsCalendarVisible(prevState => !prevState);
    };

    return (
        <div className="flex justify-center">
            <div className="mt-[5%]">
                <div className="flex">
                    <div className="w-[83px] h-[43px] bg-white text-[32px] text-center text-[#3F4FE1] rounded-[7px]">
                        정보
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[100px]">
                        {backendInfo}
                    </div>
                    <div className="w-[83px] h-[83px] bg-[#3F4FE1] text-[32px] text-center text-white leading-tight p-1 rounded-[7px]">
                        진행
                        모드
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%] scroll-container overflow-scroll">
                        <div className="w-[84px] h-[26px] bg-white text-[20px] text-center text-[#3F4FE1]">게임모드</div>
                        <div>{backendInfo}</div>
                        <div className="w-[65px] h-[26px] bg-white text-[20px] text-center text-[#3F4FE1]">참가팀</div>
                        <div>{backendInfo}</div>
                    </div>
                </div>

                <div className="flex mt-[8%]">
                    <div className="w-[83px] h-[43px] bg-[#3F4FE1] text-[32px] text-center text-white rounded-[7px]">
                        보상
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-white ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[100px]">
                        {backendInfo}
                    </div>
                    <div className="w-[83px] h-[83px] bg-white text-[32px] text-center text-[#3F4FE1] leading-tight p-1 rounded-[7px]">
                        참가
                        자격
                    </div>
                    <div className=" h-[176px] border-l border-[3px] border-[#3F4FE1] ml-[20px] mr-[5px]"></div>
                    <div className="w-[295px] h-[176px] bg-[#D9D9D9] bg-opacity-30 rounded text-white text-[15px] p-2 mr-[10%]">
                        {backendInfo}
                    </div>
                </div>
            </div>
            <div className="mt-[3%]">
            <div
                    className={`grid grid-cols-1 pt-5 text-center text-[#3F4FE1] w-[342px] h-[391px] rounded-[7px] border-[#3F4FE1] border-[3px] p-2 text-[24px]`}
                    style={{
                        opacity: isCalendarVisible ? 1 : 0,
                        pointerEvents: isCalendarVisible ? 'auto' : 'none',
                        transition: 'opacity 0.5s',
                    }}
                >
                    <div>
                        일정
                        <Calendar
                            className="text-white text-[20px] bg-transparent border-transparent"
                            formatDay={(locale, date) =>
                                date.toLocaleString('en', { day: 'numeric' })
                            }
                            formatShortWeekday={(locale, date) =>
                                date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase().slice(0, 1)
                            }
                            locale="en-US"
                        />
                    </div>
                </div>
                <button
                    className="w-[124px] h-[33px] rounded-[7px] bg-[#D9D9D9] bg-opacity-30 border-white border-2 text-white mt-[30px] text-[15px] hover:scale-[1.03]"
                    onClick={toggleCalendar}>
                    1차 예선 기간
                </button>
            </div>
        </div>
    );
};

export default CompOutline;
