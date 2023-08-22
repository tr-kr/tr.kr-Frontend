interface Props {
  buttonTitle: string;
  color: boolean;
  bigText: boolean;
  disabled?: boolean;
}

const Button = ({ buttonTitle, color, bigText, disabled }: Props) => {
  return (
    <button
      className={`flex justify-center items-center w-full h-full ${
        color ? 'bg-[#3f4fe1]' : 'bg-[#6E6E6E]'
      } rounded-[7px] ${disabled ? 'opacity-40' : null}`}
    >
      <div
        className={`text-white ${
          bigText ? 'text-[24px] font-B' : 'text-[15px] font-R'
        } `}
      >
        {buttonTitle}
      </div>
    </button>
  );
};

export default Button;
