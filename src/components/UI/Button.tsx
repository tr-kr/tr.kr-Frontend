interface Props {
  buttonTitle: string;
  color: boolean;
  disabled?: boolean;
}

const Button = ({ buttonTitle, color, disabled }: Props) => {
  return (
    <button
      className={`flex justify-center items-center w-full h-full ${
        color ? 'bg-[#3f4fe1]' : 'bg-[#6E6E6E]'
      } rounded-[7px] ${disabled ? 'opacity-40' : null}`}
    >
      <div className="text-white text-[24px] font-B">{buttonTitle}</div>
    </button>
  );
};

export default Button;
