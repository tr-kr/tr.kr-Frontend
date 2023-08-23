import logo from '../../assets/logo.jpg'
import { useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';


const Signup = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    // email, nickname 중복 -> 커스텀훅으로 제거
    const [password, , setPassword] = useInput('');
    const [passwordCheck, , setPasswordCheck] = useInput('');
    const [name, onChangeName] = useInput('');
    const [birth, onChangeBirth] = useInput('');

    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    
    const onChangePassword = useCallback(
        (e:any) => {
            setPassword(e.target.value);
            setMismatchError(e.target.value !== passwordCheck);
        },
        [passwordCheck],
    );

    const onChangePasswordCheck = useCallback(
        (e:any) => {
          setPasswordCheck(e.target.value);
          setMismatchError(e.target.value !== password);
        },
        [password],
    );

    const onSubmit = useCallback(
        (e:any) => {
            e.preventDefault();
            console.log(email, nickname, password, passwordCheck);
            if (!mismatchError) {
                console.log('서버로 회원가입하기');
                setSignUpError('');
                setSignUpSuccess(false);
                // 요청 보내기 직전에 값들을 전부 초기화 해주자. 아니라면 요청을 연달아 날릴 때
                // 첫번째 요청때 남아있던 결과가 두번째 요청때도 똑같이 표시되는
                // 문제가 있을 수 있다.

                axios.post("http://172.30.1.99:3000/api/signup", { email, nickname, password,}
                )
                .then((response) => {
                    // 성공시
                    console.log(response);
                    setSignUpSuccess(true);
                })
                .catch((error) => {
                    // 실패시
                    console.log(error.response);
                    setSignUpError(error.response.data);
                })
                .finally(() => {});
            }

        },
        [email, nickname, password, passwordCheck, name, birth],
    );

    // const handleSignup = () => {
    //     const userData = {
    //         email: signupEmail,
    //         password: signupPassword,
    //         passwordCheck: signupPasswordCheck,
    //         name:signupName,
    //         nickname: signupNickname,
    //         birth: signupBirth
    //     };
  
    //     axios.post("http://172.30.1.99:3000/api/login", userData)
    //         .then(response => {
    //             alert("성공~~");
    //             console.log("Login successful:", response.data);
    //     })
    //         .catch(error => {
    //               console.error("Login error:", error);
    //         });
    //     };

    // const gap_check = () => {
    //     if( email && password && passwordCheck && name && nickname && birth )
    //         console.log("다 적혀 있음");
    //     else{
    //         console.log("공백 있음");
    //     }
    //     //console.log(userData.birth);
    //     //알람창을 띄우거나 태그 숨겨두고 나타나게 이용 69줄 비밀번호 확인 이용
    // }

    return (
        <div className="max-h-screen bg-gray-50 flex flex-col">
            
            <div className="max-w-screen w-full h-full mx-auto">
                <div className="h-48 w-screen relative flex justify-center items-center bg-[url('./assets/lolespots.svg')]">
                    <div className="max-w-md w-full mx-auto flex justify-center items-center">
                        <div className="w-24 h-24 bg-gray-50 rounded-30 mr-6">
                            <img src={logo} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="text-center font-medium text-3xl text-white">e스포츠 대회</div>
                            <div className="text-7xl font-bold text-gray-900 text-center text-white">TR.KR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-sm w-full mx-auto mt-4">
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label id="NameLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>이름</span>
                            <input type="name" id="name" name="name" value={name} onChange={onChangeName} className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-black"/>
                        </label>
                    </div>
                    <div>
                        <label id="NicknameLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>닉네임</span>
                            <input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 text-black"/>
                            {!nickname && <p className="text-red-500 ml-2">닉네임을 입력해주세요.</p>}
                        </label>
                    </div>
                    <div className="">
                        <label id="EmailLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>이메일</span>
                            <input type="email" id="email" name="email" value={email} onChange={onChangeEmail} className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-black"/>
                        </label>
                    </div>
                    <div>
                        <label id="PasswordLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>비밀번호</span>
                            <input type="password" id="password" name="password" value={password} onChange={onChangePassword} className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-black"/>
                        </label>
                    </div>
                    <div className="">
                        <label id="PasswordCheckLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>비밀번호 확인</span>
                            <input type="password" id="password-check" name="password-check" value={passwordCheck} onChange={onChangePasswordCheck} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-1 text-black"/>
                            {mismatchError && <p className="text-red-500 ml-2">비밀번호 일치하지 않습니다</p>}
                        </label>
                    </div>
                    <div>
                        <label id="BirthLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>생년월일</span>
                            <input type="birth" id="birth" name="birth" value={birth} onChange={onChangeBirth} className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-black"/>
                            {signUpError && <p>{signUpError}</p>}
                            {signUpSuccess && <p>회원가입 되었습니다! 로그인 해주세요.</p>}
                        </label>
                    </div>
                    <div>
                        <button type='submit'  className="w-full mt-6 py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xl" onClick={() => {
                            onSubmit;
                            location.replace("/login")
                        }}>가입 완료</button>
                    </div>
                </form>
                <div className="mt-4 flex justify-evenly items-center text-white">
                    이미 회원이신가요?&nbsp;
                    <Link to="/login">로그인 하러가기</Link>
                </div>
            </div>

        </div>
    );
};

export default Signup;