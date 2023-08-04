import banner from '../../image/banner.png'

const RuleBook = () => {
    return (
        <div className="h-screen">
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
            {/* 버튼 스타일을 적용한 예시 버튼 */}
            <div className="mt-[60px] ml-[10%] mr-[10%]">
                <button className="w-[125px] h-[51px] bg-[#3f4fe1] text-white text-[32px]">
                    규정집
                </button>
                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>

                <div className="w-full h-2/3 bg-[grey] overflow-auto">
                    <img src="https://www.jj.ac.kr/_attach/_file//editor_viewer/out/_attach/_file/jj/2018/07/7d62d9328ad0b46ebe71589dbea13b4c.pdf.files/00002.png" className="w-full h-full object-cover"></img>
                </div>

                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>
            </div>
        </div>
    );
};

export default RuleBook;
