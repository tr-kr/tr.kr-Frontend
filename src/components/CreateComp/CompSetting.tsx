import Identifier from '../UI/Identifier';
import Button from '../UI/Button';

const CompSetting = () => {
  return (
    <div className="flex flex-col justify-center w-[57.5rem] h-auto mb-[100px]">
      <div className="flex flex-col justify-between items-center mb-[200px]">
        <div className="flex justify-start items-start w-[40.125rem] mt-[71px]">
          <div className="h-[130px] relative">
            <Identifier title="정보" color="secondary" />
          </div>
          <form className="ml-[25px]">
            <div className="pb-[9px]">
              <input
                type="text"
                placeholder="대회명"
                className="w-[453px] h-[32px] pl-[13px] text-white rounded-[7px] border border-solid border-white bg-[#d9d9d91a] placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
              />
            </div>
            <div>
              <textarea
                placeholder="대회 한 줄 소개"
                className="w-[536px] h-[82px] pl-[13px] pt-[7px] resize-none text-white rounded-[7px] border border-solid border-white bg-[#d9d9d91a] placeholder:font-R placeholder:text-[#9F9F9F] placeholder:text-[14px]"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
          <div className="h-[238px] relative">
            <Identifier title="일시" color="primary" />
          </div>
          <form className="flex flex-col ml-[25px]">
            <div className="w-[540px] h-[70px] mb-1">
              <div className="mb-[15px]">
                <div className="font-L text-white text-[20px] mb-[7px]">
                  예선
                </div>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="date"
                    className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                  <div className="font-R text-white text-[24px]">~</div>
                  <input
                    type="date"
                    className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                </div>
              </div>
              <div className="mb-[42px]">
                <div className="font-L text-white text-[20px] mb-[7px]">
                  본선
                </div>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="date"
                    className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                  <div className="font-R text-white text-[24px]">~</div>
                  <input
                    type="date"
                    className="w-[246px] h-[36px] pl-[16px] font-R text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white">
                <div className="text-white font-R text-[15px]">
                  + 일정 추가하기
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
          <div className="h-[135px] relative">
            <Identifier title="참가 자격" color="secondary" />
          </div>
          <form className="flex flx-col ml-[25px]">
            <div className="w-[450px] h-auto">
              <input
                type="text"
                placeholder="참가 자격을 입력하세요"
                className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
              />
              <input
                type="text"
                placeholder="참가 자격을 입력하세요"
                className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
              />
              <input
                type="text"
                placeholder="참가 자격을 입력하세요"
                className="w-full h-[37px] pl-[16px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
          <div className="h-[340px] relative">
            <Identifier title="보상" color="primary" />
          </div>
          <form className="flex flex-col ml-[25px]">
            <div className="w-[450px] h-auto mb-1">
              <div className="mb-[22px]">
                <div className="font-L text-white text-[20px] mb-[7px]">
                  1위
                </div>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="text"
                    placeholder="보상을 입력하세요"
                    className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                </div>
              </div>
              <div className="mb-[22px]">
                <div className="font-L text-white text-[20px] mb-[7px]">
                  2위
                </div>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="text"
                    placeholder="보상을 입력하세요"
                    className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                </div>
              </div>
              <div className="mb-[42px]">
                <div className="font-L text-white text-[20px] mb-[7px]">
                  3위
                </div>
                <div className="flex justify-between items-center w-full">
                  <input
                    type="text"
                    placeholder="보상을 입력하세요"
                    className="w-full h-[36px] pl-[16px] text-[#9F9F9F] rounded border border-solid border-[#fff] bg-[#d9d9d91a]"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white">
                <div className="text-white font-R text-[15px]">
                  + 보상 추가하기
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
          <div className="h-[110px] relative">
            <Identifier title="진행 모드" color="secondary" />
          </div>
          <form className="flex flx-col ml-[25px]">
            <div className="w-[640px] h-auto">
              <textarea
                placeholder="진행 모드를 입력하세요"
                className="w-full h-[110px] pl-[16px] pt-[10px] mb-[13px] text-[#9f9f9f] font-R text-[14px] rounded-[7px] border-[1px] border-solid border-white bg-[#d9d9d91a]"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-start items-start w-[40.125rem] mt-[85px]">
          <div className="h-[45px] relative">
            <Identifier title="규정" color="primary" />
          </div>
          <form className="flex flex-col pt-[5px] ml-[25px]">
            <div className="w-[240px] h-auto mb-1">
              <label htmlFor="pdf">
                <div className="flex justify-center items-center w-[134px] h-[37px] rounded-[7px] border-2 border-solid border-white">
                  <div className="text-white font-R text-[15px]">
                    + PDF 추가하기
                    <input
                      className="hidden"
                      type="file"
                      id="pdf"
                      accept=".pdf"
                    />
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[16px] w-[300px] h-[62px]">
          <Button buttonTitle="대회 등록하기" color={true} bigText={true} />
        </div>
        <div className="mb-[72px] w-[300px] h-[62px]">
          <Button buttonTitle="대회 수정하기" color={false} bigText={true} />
        </div>
        <div className="w-[300px] h-[62px]">
          <Button
            buttonTitle="대회 임시저장"
            color={true}
            bigText={true}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CompSetting;
