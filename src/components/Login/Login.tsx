function Login() {

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center font-medium text-xl">e스포츠 대회</div>
                <div className="text-3xl font-bold text-gray-900 mt-2 text-center">TR.KR</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6">
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">이메일</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">비밀번호</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                    </div>
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">로그인</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href="" className="font-medium text-sm text-gray-300">회원가입</a>
                            <div className="font-medium text-sm text-gray-300">|</div>
                            <a href="" className="font-medium text-sm text-gray-300">아이디/비밀번호 찾기</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;