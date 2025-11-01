import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyle =
    "px-8 py-4 uppercase text-sm font-bold cursor-pointer tracking-wider-sm transition-colors duration-300";

  const variantStyles = {
    primary: "bg-orange text-white hover:bg-orange-light",
    secondary: "bg-black text-white hover:bg-gray-700",
    tertiary:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
