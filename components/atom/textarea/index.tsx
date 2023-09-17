import React, { TextareaHTMLAttributes } from "react";

interface TextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
  label: string;
  name: string;
  register: any;
}

const TextField: React.FC<TextFieldProps> = ({
  icon,
  placeholder,
  label,
  name,
  register,
  ...restProps
}) => {
  return (
    <div className="mx-auto mb-[40px]">
      <small className="font-semibold inline-block mb-[8px]">{label}</small>
      <div className="w-full bg-gray-200 px-3 py-2 rounded-md flex justify-center items-center">
        <span className="mr-2">{icon}</span>
        <textarea
          id={name}
          {...register}
          rows={1}
          cols={1}
          className="outline-none w-full bg-gray-200"
          placeholder={placeholder}
          {...restProps}
        ></textarea>
      </div>
    </div>
  );
};

export default TextField;
