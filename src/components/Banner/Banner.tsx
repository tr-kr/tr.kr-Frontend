import banner from '../../image/banner.png'
import CompOutline from '../CompOutline/CompOutline';
import RuleBook from '../RuleBook/RuleBook';
import ParticipatingTeam from '../ParticipatingTeam/ParticipatingTeam';
import Result from '../Result/Result';
import { useState } from 'react';

const Banner = () => {
    const navItems = ['대회 개요', '경기 규정', '참가팀', '대진표', '결과'];
    const [active, setActive] = useState(navItems[0]);

    let activeComponent;
    let activePageName;
    switch (active) {
        case '대회 개요':
            activeComponent = <CompOutline />;
            activePageName = "대회 상세 페이지"
            break;
        case '경기 규정':
            activeComponent = <RuleBook />;
            activePageName = "대회 상세 페이지"
            break;
        case '참가팀':
            activeComponent = <ParticipatingTeam />;
            activePageName = "참가팀"
            break;
        case '결과':
            activeComponent = <Result />;
            activePageName = "결과"
            break;
        default:
            activeComponent = null;
    }

    return (
        <div>
            {/* {배너 관련 코드} */}
            <div className="w-full h-[57px] bg-[#3F4FE1] text-white text-[20px] p-3">
                <span className="ml-[30px]">VX OPEN CHLLENGE</span>
                <span className="h-full border-r border-white mx-4"></span>
                <span className="">{activePageName}</span>
            </div>
            <div className="relative">
                <div className="w-full h-[448px] bg-cover bg-center relative">
                    {/* 배경 이미지 설정 */}
                    <img src={banner} alt="배너" className="w-full h-full" />

                    {/* 맨 아래쪽에 겹치는 박스 */}
                    <div className="flex items-center absolute bottom-0 left-0 w-full h-[139px] bg-black bg-opacity-50 text-[64px] text-white font-sans font-extrabold pl-10">
                        <h1 className="drop-shadow-lg">VX OPEN CHALLENGE</h1>
                    </div>
                </div>
                {/* {접수마감 박스} */}
                <div className="absolute top-[17px] right-[52px] w-[278px] h-auto rounded-[7px] bg-[#2C2C2C] border-[#C27935] border-[3px] text-center">
                    <div className="text-[24px] text-[#C27935] mt-[20px]">접수마감까지</div>
                    <div className="text-[40px] text-white">00:00:00</div>
                    <hr className="w-[219px] h-[1px] bg-white border-none mx-[28px] mt-[15px]"/>
                    <div className="text-[20px] text-[#8B8B8B] mt-[15px]">접수팀</div>
                    <div className="text-[32px] text-white">24</div>
                    <div className="text-[20px] text-[#8B8B8B] mt-[10px]">총 상금</div>
                    <div className="text-[32px] text-white mb-[25px]">150,000</div>
                </div>
                <div className="absolute top-[365px] right-[52px] w-[278px] h-[58px] rounded-[7px] bg-[#C27935] border-[#2C2C2C] border-[3px] text-center text-white text-[24px] p-2">준비중</div>
                {/* {접수마감 박스} */}
            </div>
            {/* {배너 관련 코드} */}
            {/* 네비게이션 링크 */}
            <ul className="h-[78px] flex items-center text-xl gap-16 text-white bg-black pl-[144px]">
                {navItems.map((item) => (
                    <li
                        className={`
                            ${item === active && 'border-b-[1px] text-[#3F4FE1] border-primary'}
                            py-4 ml-[5%]`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* 네비게이션 링크 */}
            {activeComponent}
        </div>
    );
};

export default Banner