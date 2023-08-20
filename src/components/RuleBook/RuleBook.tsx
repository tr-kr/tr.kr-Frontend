

const RuleBook = () => {
    return (
        <div className="h-screen">
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
