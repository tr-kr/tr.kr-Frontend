import Identifier from '../../UI/Identifier';

const Rule = () => {
  return (
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
                <input className="hidden" type="file" id="pdf" accept=".pdf" />
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Rule;
