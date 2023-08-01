
const RuleBook = () => {
    return (
        <div className="h-screen mt-[60px] ml-[10%] mr-[10%]">
            {/* 버튼 스타일을 적용한 예시 버튼 */}
            <button className="w-[125px] h-[51px] bg-[#3f4fe1] text-white text-[32px]">
                규정집
            </button>
                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>

                <div className="w-full h-2/3 bg-[grey] overflow-auto">
                    <img src="https://www.gnmedia.or.kr/data/img/[%ED%8F%AC%EC%8A%A4%ED%84%B0]%202022%20%EA%B8%B0%EC%97%AD%EB%8B%88%EC%9D%80_fin.png"></img>
                </div>

                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>
        </div>
    );
};

export default RuleBook;
