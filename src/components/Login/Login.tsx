import { useState } from 'react';
import logo from '../../assets/logo.jpg'
import axios from 'axios';



const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLogin = () => {
        const userData = {
            email: loginEmail,
            password: loginPassword
        };

        axios.post("http://172.30.1.79:3000/api/login", userData)
            .then(response => {
                response = response.data;
                localStorage.clear()
                if (response.data.isSuccess === false) {
                    alert("실패");
                    return;
                } else {
                // localStorage.setItem('id', response.data.useridx)
                localStorage.setItem('token', response.data.jwt)
                //window.location.replace('/league')
                alert("성공~~");
                console.log("Login successful:", response.data);
                }
            })
            .catch(error => {
                console.error("Login error:", error);
            });
    };

    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="h-screen w-screen relative flex justify-center items-center bg-[url('./assets/lolespots.svg')]">
            
                <div className="max-w-sm w-full mx-auto py-10 px-10 absolute mb-20 backdrop-blur-xl rounded-3xl p-8">
                    <div className="max-w-md w-full mx-auto flex justify-center items-center">
                        <div className="w-24 h-24 bg-gray-50 rounded-30 mr-6">
                            <img src={logo} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="text-center font-medium text-3xl text-white">e스포츠 대회</div>
                            <div className="text-7xl font-bold text-gray-900 text-center text-white">TR.KR</div>
                        </div>
                    </div>

                    <form id="container" className="space-y-6 mt-10">
                        <div>
                            <label htmlFor="" className="text-sm font-blod text-white block">이메일</label>
                            <input type="email" placeholder="이메일" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full border border-white hover:border-blue-600 hover:border-2 p-2 rounded-lg mt-1"/>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-blod text-white block">비밀번호</label>
                            <input type="password" placeholder="비밀번호" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-gray-200 border border-white hover:border-blue-600 hover:border-2 p-2 rounded-lg mt-1"/>
                        </div>
                        <div>
                            <button type='button' id='loginButton' className="w-full py-4 px-4 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xl" onClick={handleLogin}>로그인</button>
                        </div>
                        
                        <div className="flex justify-evenly items-center ">
                            <a href="/Signup" className="font-medium text-sm text-white flex">회원가입</a>
                            <div className="font-medium text-xl text-white flex">|</div>
                            <a href="" className="font-medium text-sm text-white flex">아이디/비밀번호 찾기</a>
                        </div>
        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;