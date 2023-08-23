import { useState } from 'react';
import Identifier from '../../UI/Identifier';

const Rule = () => {
  const [pdfFile, setPdfFile]: any = useState();

  const saveUploadedPdfFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 현재는 업로드된 파일의 이름만 가져옴. 백엔드 연동시 로직 수정 필요.
    if (e.target.files) {
      const fileName = e.target.files[0].name;
      setPdfFile(fileName);
    }
  };

  console.log(pdfFile);
  return (
    <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
      <div className="h-[45px] relative">
        <Identifier title="규정" color="primary" />
      </div>
      <form className="flex flex-col pt-[5px] w-full ml-[25px]">
        <div className="mb-1">
          <label htmlFor="pdf" className="flex items-center w-full">
            <div className="flex justify-center items-center min-w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white">
              <div className="text-white font-R text-[15px]">
                + PDF 추가하기
                <input
                  className="hidden"
                  type="file"
                  id="pdf"
                  accept=".pdf"
                  onChange={saveUploadedPdfFile}
                />
              </div>
            </div>
            <div className="flex justify-start items-center w-full ml-5 text-[16px] text-[#00ff47] font-R">
              {pdfFile && pdfFile}
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Rule;
