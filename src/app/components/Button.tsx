import React from "react";

type ButtonProps = {
  text: string;
  md?: boolean;
  isAvailable?: boolean;
  handleOnClick?: () => void;
};

const Button = ({
  text,
  md,
  isAvailable = true,
  handleOnClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`bg-moderateCyan font-commissioner font-bold rounded-full ${
          md ? "px-8" : "px-10"
        } ${
          !isAvailable && "bg-darkGray/25 text-white"
        }  text-white py-4 flex items-center justify-center`}
        disabled={!isAvailable}
        onClick={handleOnClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
