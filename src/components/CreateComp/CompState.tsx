import Toggle from '../UI/Toggle';

const CompState = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[57.5rem] h-auto mt-[148px]">
        <div className="flex justify-between items-center">
          <Toggle leftTitle="공개" rightTitle="비공개" />
          <Toggle
            leftTitle="모집중"
            rightTitle="모집완료"
            width="min-w-[170px]"
            animationDistance="before:w-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CompState;
