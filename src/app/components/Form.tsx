'use client';

type FormProps = {
  value: number;
  onChange: (value: number) => void;
};

const Form = ({ value, onChange }: FormProps) => {
  return (
    <form className="w-full">
      <label className="relative flex flex-col gap-2">
        <span className="text-xl font-bold">Monto en ARS:</span>
        <input
          type="number"
          className="bg-[#C8E8E8] rounded-xl p-2 text-right w-full outline-[#00474B] text-xl font-bold"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <p className="absolute bottom-1 sm:bottom-1.5 left-3 font-bold text-[#00474B] text-lg sm:text-xl">
          $
        </p>
      </label>
    </form>
  );
};
export default Form;
