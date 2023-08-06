const CompImageUpload = () => {
  return (
    <div className="w-[57.5rem] pt-[0.9313rem]">
      <label htmlFor="file">
        <div className="flex justify-center items-center w-full h-[21.4375rem] rounded-[7px] bg-[#d9d9d9] font-R">
          <div className="flex flex-col justify-between items-center h-[8.6019rem]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            <div className="flex flex-col justify-center items-center w-[16.5rem] h-[5.0625rem]">
              대회 사진 추가하기
            </div>
          </div>
        </div>
      </label>
      <input className="hidden" type="file" id="file" accept=".jpeg, .png" />
    </div>
  );
};

export default CompImageUpload;
