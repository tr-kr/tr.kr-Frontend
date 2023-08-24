import { useState } from 'react';

const CompImageUpload = () => {
  const [imgFile, setImgFile]: any = useState();

  const saveUploadedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImgFile(reader.result || null);
          resolve();
        };
      });
    }
  };
  return (
    <div className="w-full h-[500px] mt-[0.9313rem]">
      <label className="w-full h-full" htmlFor="file">
        {imgFile ? (
          <img
            src={imgFile}
            alt="대회 사진 미리보기"
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`flex justify-center items-center w-full h-full rounded-[7px] bg-[#d9d9d9] font-R`}
          >
            <div className="flex flex-col justify-between items-center h-[8.6019rem]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <rect
                  x="21.7788"
                  y="0.32666"
                  width="7.07571"
                  height="48.8452"
                  rx="3"
                  fill="black"
                />
                <rect
                  x="49.7388"
                  y="21.2114"
                  width="7.07571"
                  height="48.8452"
                  rx="3"
                  transform="rotate(90 49.7388 21.2114)"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col justify-center items-center w-[16.5rem] h-[5.0625rem] text-[24px]">
                대회 사진 추가하기
              </div>
              <div className="text-[20px]">1920px X 500px</div>
            </div>
          </div>
        )}
      </label>
      <input
        className="hidden"
        type="file"
        id="file"
        accept=".jpg, .jpeg, .png"
        onChange={saveUploadedFile}
        // ref={uploadedImgRef}
      />
    </div>
  );
};

export default CompImageUpload;
