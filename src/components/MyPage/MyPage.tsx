import person from '../../images/person.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MyPage = () => {
    return (
        <div className="w-full">
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
                <div className="flex flex-col items-center w-full">
                <div className="w-full h-[210px] p-[25px] flex justify-center">
                    <div className="text-[36px] mr-2">회원 정보</div>
                    <div className="h-[161px] border-r-[3px] border-black mr-[30px]"></div>
                    <div className="flex p-5">
                        <div>
                            <div className="flex">
                                <div className="text-[20px] mr-[38px]">닉네임</div><input className="w-[287px] h-[25px] rounded-[7px] mr-[12px] mb-5 text-[#3543C2] pl-2"></input>
                                <button className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]">닉네임 변경</button>
                            </div>
                            <div className="flex">
                                <div className="text-[20px] mr-[38px]">이메일</div><div className="w-[287px] h-[25px] rounded-[7px] mr-[12px] bg-[#BBBBBB] mb-5 text-[#3543C2] pl-2">songshung02@gmail.com</div>
                            </div>
                            <div className="flex">
                                <div className="text-[20px] mr-[20px]">비밀번호</div><input type="password" className="w-[287px] h-[25px] rounded-[7px] mr-[12px] mb-5 text-[#3543C2]"></input>
                                <button className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]">비밀번호 변경</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[210px] p-[25px] flex justify-center">
                    <div className="text-[36px] mr-2">연동 정보</div>
                    <div className="h-[161px] border-r-[3px] border-black mr-[30px]"></div>
                    <div className="flex p-5">
                        <div className="text-[16px]">
                            <div className="flex">
                                <img className="w-[30px] h-[30px] border rounded-[3px] border-[#5865F2] mr-2 p-1" src="https://cdn.simpleicons.org/discord/5865F2" /><div className="text-[20px] mr-[68px]">디스코드</div><div className="w-[287px] h-[25px] rounded-[7px] bg-[#BBBBBB] mr-[12px] mb-5 text-[#3543C2] pl-2">송충이#3502</div><div className="text-[#35C28F]">인증완료</div>
                            </div>
                            <div className="flex">
                            <img className="w-[30px] h-[30px] border rounded-[3px] border-[#D32936] mr-2 p-1" src="https://cdn.simpleicons.org/riotgames/#D32936" /><div className="text-[20px] mr-[45px]">라이엇 계정</div><div className="w-[287px] h-[25px] rounded-[7px] mr-[12px] bg-[#BBBBBB] mb-5 text-[#3543C2] pl-2">송충이#3502</div><div className="text-[#35C28F]">인증완료</div>
                            </div>
                            <div className="flex">
                                <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] border rounded-[3px] border-black mr-2 p-1"/><div className="text-[20px] mr-[20px]">학교/단체 계정</div><div className="w-[287px] h-[25px] rounded-[7px] bg-[#BBBBBB] mr-[12px] mb-5 text-[#3543C2] pl-2">송충이</div><div className="text-[#35C28F]">인증완료</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-[136px] h-[33px] rounded-[7px] bg-[#C23535] text-white mt-[100px]">회원 탈퇴</button>
            </div>
            </div>
        </div>
    )
}

export default MyPage;
