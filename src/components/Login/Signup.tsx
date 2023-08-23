import logo from '../../assets/logo.jpg'
import { useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signup = () => {
    //이름, 이메일, 비밀번호, 비밀번호 확인
    const [name, setName] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')

    //오류메시지 상태저장
    const [nameMessage, setNameMessage] = useState<string>('')
    const [nicknameMessage, setNicknameMessage] = useState<string>('')
    const [emailMessage, setEmailMessage] = useState<string>('')
    const [passwordMessage, setPasswordMessage] = useState<string>('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')

    // 유효성 검사
    const [isName, setIsName] = useState<boolean>(false)
    const [isNickname, setIsNickname] = useState<boolean>(false)
    const [isEmail, setIsEmail] = useState<boolean>(false)
    const [isPassword, setIsPassword] = useState<boolean>(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)
    // const router = useRouter()
    
    const onSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
            await axios
              .post('https://ryueclipse.shop/api/signup', {
                username: name,
                nickname: nickname,
                password: password,
                email: email,
              })
              .then((res) => {
                console.log('response:', res)
                // if (res.status === 200) {
                //   router.push('/login')
                // }
              })
          } catch (err) {
            console.error(err)
          }
        },
        [email, name, password, nickname]
      )
    
    //이름 제한 이벤트
    const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setNameMessage('2글자 이상 5글자 미만으로 입력 부탁드립니다')
            setIsName(false)
        } else {
            setNameMessage('올바른 이름 형식입니다 :)')
            setIsName(true)
        }
    }, [])

    //닉네임 제한 이벤트
    const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setNicknameMessage('2글자 이상 5글자 미만으로 입력 부탁드립니다')
            setIsNickname(false)
        } else {
            setNicknameMessage('올바른 닉네임 형식입니다')
            setIsNickname(true)
        }
    }, [])
    
    //이메일 유효성 검사 이벤트
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('잘못된 이메일 형식입니다')
            setIsEmail(false)
        } else {
            setEmailMessage('올바른 이메일 형식입니다')
            setIsEmail(true)
        }
    }, [])

    //비밀번호 유효성 검사 이벤트
    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
    
        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자/영문자/특수문자 조합으로 8자리 이상 입력해주세요')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호입니다')
            setIsPassword(true)
        }
    }, [])

    const onChangePasswordConfirm = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)
    
            if (password == passwordConfirmCurrent) {
                setPasswordConfirmMessage('비밀번호가 같습니다')
                setIsPasswordConfirm(true)
            } else {
                setPasswordConfirmMessage('비밀번호가 다릅니다')
                setIsPasswordConfirm(false)
            }
        },
        [password]
    )

    //이메일 중복확인
    const [usableId, setUsableId] = useState(false);

    const duplicationCheckAPI = async (email: string) => {
        try {
            const response = await axios.post(
                "https://ryueclipse.shop/api/signup/emailCheck",
                {
                    email: email,
                }
            );
            return response.data; // 서버에서의 중복 여부 데이터를 반환
        } catch (error) {
            console.log(error);
            return true; // 오류 발생 시 중복되는 것으로 간주
        }
    };

    const duplicationCheck = () => {
        duplicationCheckAPI(email).then((response) => {
            console.log(response);
            if (response.message === '성공') {
                alert('사용 가능한 아이디입니다.');
                setUsableId(true);
                window.location.replace('/login') // 아이디 사용 가능 상태로 변경
            } else {
                alert('중복된 아이디입니다. 다시 시도하세요.');
                setUsableId(false); // 아이디 중복 상태로 변경
            }
            console.log('중복체크');
        });
    };

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
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label id="NameLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>이름</span>
                            <input type="text" name="name" value={name} onChange={onChangeName} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 text-black"/>
                            {name.length > 0 && <span className={`message ${isName ? 'text-green-500' : 'text-red-500'}`}>{nameMessage}</span>}
                        </label>
                    </div>
                    <div>
                        <label id="NicknameLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>닉네임</span>
                            <input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 text-black"/>
                            {name.length > 0 && <span className={`message ${isName ? 'text-green-500' : 'text-red-500'}`}>{nicknameMessage}</span>}
                        </label>
                    </div>
                    <div className="">
                        <label id="EmailLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>이메일</span>
                            <input type="email" id="email" name="email" value={email} onChange={onChangeEmail} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 text-black"/>
                            {email.length > 0 && <span className={`message ${isEmail ? 'text-green-500' : 'text-red-500'}`}>{emailMessage}</span>}
                            
                        </label>
                    </div>
                    <div>
                        <label id="PasswordLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>비밀번호</span>
                            <input type="password" id="password" name="password" value={password} onChange={onChangePassword} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 font-sans text-black"/>
                            {password.length > 0 && (<span className={`message ${isPassword ? 'text-green-500' : 'text-red-500'}`}>{passwordMessage}</span>)}
                        </label>
                    </div>
                    <div className="">
                        <label id="PasswordCheckLabel" htmlFor="" className="text-sm font-blod text-white block">
                            <span>비밀번호 확인</span>
                            <input type="password" id="password-check" name="password-check" value={passwordConfirm} onChange={onChangePasswordConfirm} className="w-full p-2 border border-gray-300 rounded-lg mt-1 mb-2 font-sans text-black"/>
                            {passwordConfirm.length > 0 && (<span className={`message ${isPasswordConfirm ? 'text-green-500' : 'text-red-500'}`}>{passwordConfirmMessage}</span>)}
                        </label>
                    </div>
                    {/* <div>
                        <label id="BirthLabel" htmlFor="" className="text-sm font-blod text-white">
                            <span>생년월일</span>
                            <input type="birth" id="birth" name="birth" value={birth} onChange={onChangeBirth} className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-black"/>
                        </label>
                    </div> */}
                    <div>
                        <button type='submit' disabled={!(isName && isNickname && isEmail && isPassword && isPasswordConfirm)} className="w-full mt-6 py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xl disabled:bg-gray " onClick={() => {
                            duplicationCheck();
                            // location.replace("/login")
                        }}>가입 완료</button>
                    </div>
                </form>
                <div className="mt-4 flex justify-center items-center text-white mb-16">
                    이미 회원이신가요?  &nbsp;
                    <Link to="/login" className="text-blue-600">로그인 하러가기</Link>
                </div>
            </div>

        </div>
    );
};

export default Signup;