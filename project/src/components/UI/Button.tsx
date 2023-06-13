import React from "react";

interface ButtonProps {
  id: string;
  type: "button" | "submit";
  text: string;
  customClasses: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
export const Button = ({
  id,
  type,
  text,
  customClasses,
  icon,
  onClick,
}: ButtonProps) => {
  const _customClasses = ["button", customClasses].join(" ");
  return (
    <>
      {customClasses.includes("icon") ? (
        <button
          id={id}
          className={_customClasses}
          type={type}
          onClick={onClick}
        >
          <span className="sr-only">{text}</span>
          {icon}
        </button>
      ) : (
        <button
          id={id}
          className={_customClasses}
          type={type}
          onClick={onClick}
        >
          {text}
          {icon && icon}
        </button>
      )}
    </>
  );
};
