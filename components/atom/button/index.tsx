import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, type = 'button' }) => {
  const classes = `py-[5px] px-[10px] md:py-[8px] px-[12px] rounded-[4px] flex justify-center items-center  transform transition-transform duration-300 ease-in-out hover:-translate-y-1  border border-1 hover:bg-black hover:text-white ${className}`;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
