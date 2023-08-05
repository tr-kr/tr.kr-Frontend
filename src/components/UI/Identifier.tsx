interface Props {
  title: string;
  color: string;
}

const Identifier = ({ title, color }: Props) => {
  return (
    <>
      <div className="flex justify-start max-w-[80px] h-auto">
        <div
          className={`w-auto h-auto font-R pl-[11px] pr-[11px] rounded-[7px] box-border break-keep ${
            color === 'primary' ? 'bg-[#3f4fe1]' : 'bg-white'
          } ${
            color === 'primary' ? 'text-white' : 'text-[#3f4fe1]'
          } text-center text-[32px]`}
        >
          {title}
        </div>
      </div>
      <div
        className={`before:contents-[''] before:absolute before:top-0 before:-right-4 before:w-[3px] before:h-full ${
          color === 'primary' ? 'before:bg-[#3f4fe1]' : 'before:bg-white'
        }`}
      />
    </>
  );
};

export default Identifier;
