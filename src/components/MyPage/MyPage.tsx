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
            <div className="w-full h-[649px] bg-[#E7E7E7]">
            </div>
        </div>
    )
}

export default MyPage;
