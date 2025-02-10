import { ButtonHTMLAttributes } from "react";

type ButtonPropsType = {
  reverse?: boolean;
};

export const Button = ({
  reverse,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 outline-none h-min w-min text-nowrap rounded-md ${
        reverse
          ? "bg-system-purple hover:bg-black hover:text-system-purple"
          : "bg-black hover:bg-system-purple hover:text-black"
      }  text-white font-semibold duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};
