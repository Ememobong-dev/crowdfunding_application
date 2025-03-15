import React from "react";


const Button = ({md, isAvailable = true}: {md? : boolean, isAvailable?: boolean}) => {
  return (
    <>
      <button 
       className={`bg-moderateCyan font-bold rounded-full ${md ? "px-8" : "px-10"} ${!isAvailable && "bg-darkGray/25 text-white"}  text-white py-4 flex items-center justify-center`}
       disabled={!isAvailable}
       
       >
        {isAvailable ? "Select reward" : "Out of stock"}
      </button> 
    </>
  );
};

export default Button;
