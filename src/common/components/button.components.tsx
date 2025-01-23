import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  onClick,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 rounded-md bg-black text-white font-semibold hover:bg-system-purple hover:text-black duration-300"
      {...props}
    >
      {children}
    </button>
  );
};
