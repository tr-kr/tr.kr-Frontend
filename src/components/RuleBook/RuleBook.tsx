import pdf from '../../pdf/rule.pdf'

const RuleBook = () => {
    return (
        <div className="h-screen mt-[60px] ml-[17%] mr-[17%]">
            {/* 버튼 스타일을 적용한 예시 버튼 */}
            <button className="w-[125px] h-[51px] bg-[#3f4fe1] text-white text-[32px]">
                규정집
            </button>
                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>

                <div className="w-full h-3/4 bg-[grey] overflow-auto">
                    <iframe className="w-full h-full bg-[grey] overflow-auto" src={pdf}></iframe>
                </div>

                <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>
        </div>
    );
};

export default RuleBook;
