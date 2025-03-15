import React from "react";
import Button from "./Button";

type StandCardType = {
  standTitle: string;
  standSummary: string;
  standLeft: string;
  pledgeLeft: number;
  standIsAvailable?: boolean;
};

const StandCard = ({
  standTitle,
  standSummary,
  standLeft,
  pledgeLeft,
  standIsAvailable,
}: StandCardType) => {
  return (
    <>
      <div className="bg-white border font-commissioner rounded-lg p-8 flex flex-col gap-6 ">
        <div className="flex justify-between items-center">
          <p
            className={`text-lg font-bold ${
              standIsAvailable ? "text-black" : "text-black/45"
            } `}
          >
            {standTitle}
          </p>
          <p
            className={`text-base font-medium ${
              standIsAvailable ? "text-moderateCyan" : "text-moderateCyan/45"
            } `}
          >
            Pledge ${pledgeLeft} or more
          </p>
        </div>
        <span>
          <p
            className={`${
              standIsAvailable ? "text-darkGray" : "text-darkGray/45"
            } `}
          >
            {standSummary}
          </p>
        </span>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center">
            <p
              className={`text-3xl font-bold tracking-wider ${
                standIsAvailable ? "text-black" : "text-black/45"
              }`}
            >
              {standLeft}
            </p>
            <p
              className={`text-base font-medium ${
                standIsAvailable ? "text-darkGray" : "text-darkGray/45"
              } `}
            >
              left
            </p>
          </span>
          <Button md isAvailable={standIsAvailable} text = {standIsAvailable ? "Select Reward" : "Out of stock"} />
        </div>
      </div>
    </>
  );
};

export default StandCard;
