import person from '../../images/person.png'

const MyPage = () => {
    return (
        <div>
            <div className="w-full h-[57px] bg-[#3F4FE1] text-white text-[20px] p-3">
                <span className="ml-[30px]">마이 페이지</span>
            </div>
            <div className="w-full h-[169px] bg-[#2C2C2C] text-center flex justify-center">
                <div className="flex items-center">
                    <img className="p-3" src={person} alt="Person"></img>
                    <div className="ml-3">
                        <span className="text-[64px] text-white mr-[40px]">닉네임</span>
                        <span className="text-[36px] text-[#B6B6B6] mt-[75px]">송채민</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[649px] bg-[#E7E7E7] pl-[28%]">
                <div className="w-full h-[210px] p-[25px] flex">
                    <div className="text-[36px] mr-2">회원 정보</div>
                    <div className="h-[190px] border-r-[3px] border-black mr-[30px]"></div>
                    <div className="flex">
                        <div>
                            <div className="flex">
                                <div className="text-[20px] mr-[20px]">닉네임</div><input className="w-[287px] h-[25px] rounded-[7px] mr-[12px]"></input>
                                <button className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]">닉네임 변경</button>
                            </div>
                            <div className="flex">
                                <div className="text-[20px] mr-[20px]">이메일</div><div className="w-[287px] h-[25px] rounded-[7px] mr-[12px] bg-[#BBBBBB]"></div>
                            </div>
                            <div className="flex">
                                <div className="text-[20px] mr-[20px]">닉네임</div><input className="w-[287px] h-[25px] rounded-[7px] mr-[12px]"></input>
                                <button className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]">닉네임 변경</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;
