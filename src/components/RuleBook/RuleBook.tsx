import { useEffect, useState } from 'react';
import axios from 'axios';

const RuleBook = () => {
    const [pdfPath, setPdfPath] = useState<string | null>(null);

    useEffect(() => {
        axios.get("http://3.34.170.230/api/competition/1")
            .then(response => {
                const responseData = response.data;
                if (responseData.result && responseData.result.length > 0) {
                    const pdfPathFromAPI = responseData.result[0].pdf_path;
                    const modifiedPdfPath = pdfPathFromAPI.replace('/public', '');
                    console.log('PDF Path:', modifiedPdfPath); // pdfPath 값 출력
                    setPdfPath(modifiedPdfPath);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="h-screen mt-[60px] ml-[17%] mr-[17%]">
            {/* 버튼 스타일을 적용한 예시 버튼 */}
            <button className="w-[125px] h-[51px] bg-[#3f4fe1] text-white text-[32px]">
                규정집
            </button>
            <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>

            <div className="w-full h-3/4 bg-[grey] overflow-auto">
                {pdfPath && (
                    <iframe className="w-full h-full bg-[grey] overflow-auto" src={pdfPath}></iframe>
                )}
            </div>

            <div className="border-t-[3px] border-gray-400 mt-[10px] mb-[10px] "></div>
        </div>
    );
};

export default RuleBook;
