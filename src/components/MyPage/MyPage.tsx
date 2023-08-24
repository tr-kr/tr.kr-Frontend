import { useEffect, useState } from 'react';
import axios from 'axios';
import person from '../../images/person.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { clean } from 'semver';

const MyPage = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [discord, setDiscord] = useState('');
    const [riot, setRiot] = useState('');
    const [schoolGroup, setSchoolGroup] = useState('');
    const [newNickname, setNewNickname] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const mytoken = localStorage.getItem('token')

    useEffect(() => {
        //axios.get("https://ryueclipse.shop/api/api/user/myInfo?token=${mytoken}")
        axios.get(`https://ryueclipse.shop/api/user/myInfo?token=${mytoken}`)
        .then(response => {
                const user = response.data.result;
                setName(user.name);
                setNickname(user.nickname);
                setEmail(user.email);
                setDiscord(user.discord_auth);
                setRiot(user.riot_auth);
                setSchoolGroup(user.school_auth);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    )
    const handleNicknameChange = () => {
        axios.put(`https://ryueclipse.shop/api/user/myInfo?token=${mytoken}`, { nickname: newNickname })
            .then(response => {
                alert("닉네임 변경이 완료되었습니다.");
                console.log("Nickname changed successfully:", response.data);
            })
            .catch(error => {
                console.error("Error changing nickname:", error);
            });
    };
    const handlePasswordChange = () => {
        axios.put(`https://ryueclipse.shop/api/user/myInfo?token=${mytoken}`, { password: newPassword })
            .then(response => {
                alert("비밀번호 변경이 완료되었습니다.");
                console.log("Password changed successfully:", response.data);
            })
            .catch(error => {
                console.error("Error changing password:", error);
            });
    };

    const getout = () => {
        axios.get(`https://ryueclipse.shop/api/deleteuser?token=${mytoken}`)
        .then(response => {
            alert("회원 탈퇴 성공");
            console.log(response.data);
            window.location.href = '/';
            localStorage.removeItem('token');
        })
        .catch(error => {
            alert("error");
            console.error("회원 탈퇴 실패", error);
        });
    }

    return (
        <div className="w-full">
            <div className="w-full h-[57px] bg-[#3F4FE1] text-white text-[20px] p-3">
                <span className="ml-[30px]">마이 페이지</span>
            </div>
            <div className="w-full h-[169px] bg-[#2C2C2C] text-center flex justify-center">
                <div className="flex items-center">
                    <img className="p-3" src={person} alt="Person"></img>
                    <div className="ml-3">
                        <span className="text-[64px] text-white mr-[40px]">{nickname}</span>
                        <span className="text-[36px] text-[#B6B6B6] mt-[75px]">{name}</span>
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
                                    <div className="text-[20px] mr-[38px]">닉네임</div>
                                    <input
                                        value={newNickname}
                                        onChange={(e) => setNewNickname(e.target.value)}
                                        className="w-[287px] h-[25px] rounded-[7px] mr-[12px] mb-5 text-[#3543C2] pl-2"
                                    />
                                    <button
                                        className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]"
                                        onClick={handleNicknameChange}
                                    >
                                        닉네임 변경
                                    </button>
                                </div>
                                <div className="flex">
                                    <div className="text-[20px] mr-[38px]">이메일</div><div className="w-[287px] h-[25px] rounded-[7px] mr-[12px] bg-[#BBBBBB] mb-5 text-[#3543C2] pl-2">{email}</div>
                                </div>
                                <div className="flex">
                                    <div className="text-[20px] mr-[20px]">비밀번호</div>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-[287px] h-[25px] rounded-[7px] mr-[12px] mb-5 text-[#3543C2]"
                                    />
                                    <button
                                        className="w-[114px] h-[25px] text-[16px] text-white rounded-[7px] bg-[#3543C2]"
                                        onClick={handlePasswordChange}
                                    >
                                        비밀번호 변경
                                    </button>
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
                                    <img className="w-[30px] h-[30px] border rounded-[3px] border-[#5865F2] mr-2 p-1" src="https://cdn.simpleicons.org/discord/5865F2" /><div className="text-[20px] mr-[68px]">디스코드</div><div className="w-[287px] h-[25px] rounded-[7px] bg-[#BBBBBB] mr-[12px] mb-5 text-[#3543C2] pl-2">{discord}</div><div className="text-[#35C28F]">인증완료</div>
                                </div>
                                <div className="flex">
                                    <img className="w-[30px] h-[30px] border rounded-[3px] border-[#D32936] mr-2 p-1" src="https://cdn.simpleicons.org/riotgames/#D32936" /><div className="text-[20px] mr-[45px]">라이엇 계정</div><div className="w-[287px] h-[25px] rounded-[7px] mr-[12px] bg-[#BBBBBB] mb-5 text-[#3543C2] pl-2">{riot}</div><div className="text-[#35C28F]">인증완료</div>
                                </div>
                                <div className="flex">
                                    <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] border rounded-[3px] border-black mr-2 p-1" /><div className="text-[20px] mr-[20px]">학교/단체 계정</div><div className="w-[287px] h-[25px] rounded-[7px] bg-[#BBBBBB] mr-[12px] mb-5 text-[#3543C2] pl-2">{schoolGroup}</div><div className="text-[#35C28F]">인증완료</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={getout} className="w-[136px] h-[33px] rounded-[7px] bg-[#C23535] text-white mt-[100px]">회원 탈퇴</button>
                </div>
            </div>
        </div>
    )
}

export default MyPage;
