import React, { ChangeEvent, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  icon?: React.ReactNode;
  register?: any;
  errors?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  className,
  name,
  onInput,
  label,
  icon,
  register,
  errors,
  ...restProps
}) => {
  const showError = errors && errors[name];

  return (
    <div className="mb-[28px] w-full">
      <small className="font-semibold inline-block mb-[8px]">{label}</small>
      <div
        className={`relative  ${className} bg-gray-200 ${
          showError && 'border border-red-500'
        } px-3 py-2 rounded-sm flex items-center mb-[32px]`}
      >
        <span className="mr-2">{icon}</span>
        <input
          name={name}
          onInput={onInput}
          id={name}
          {...restProps}
          {...register}
          className="outline-none bg-gray-200 w-full text-black"
        />

        {showError && (
          <div className="absolute bottom-[-25px] left-0 text-red-500 text-[12px]">
            {errors[name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
