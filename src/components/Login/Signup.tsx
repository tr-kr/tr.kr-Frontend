function Signup() {

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div>
                    <div className="text-center font-medium text-xl">e스포츠 대회</div>
                    <div className="text-3xl font-bold text-gray-900 mt-2 text-center">TR.KR</div>
                
                </div>            
            </div>
            <div className="max-w-md w-full mx-auto mt-4">
                <form action="" className="space-y-6">
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">이메일</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">비밀번호</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">비밀번호 확인</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">이름</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">닉네임</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-blod text-gray-600 block">생년월일</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-1"/>
                    </div>
                    <div>
                        <button className="w-full mt-5 py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xl">가입 완료</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signup;