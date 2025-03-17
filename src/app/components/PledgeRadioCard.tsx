import React, { useState } from "react";
import { StandCardType } from "./StandCard";
import Button from "./Button";

interface PledgeRadioCardProps extends StandCardType {
  pledgeRadioValue: string;
  selectedPledge: string;
  onSelectPledge: (value: string) => void;
  showSuccessModal: () => void;
}

const PledgeRadioCard: React.FC<PledgeRadioCardProps> = ({
  standTitle,
  standSummary,
  standLeft,
  pledgeLeft,
  standIsAvailable,
  pledgeRadioValue,
  selectedPledge,
  onSelectPledge,
  showSuccessModal
  
 
}) => {
  const [ pledgeInputValue, setPleadgeInputValue ] = useState(pledgeLeft);

  return (
    <>
      <div
        className={`bg-white border font-commissioner rounded-lg p-8 ${
          selectedPledge === pledgeRadioValue && "border-moderateCyan border-2"
        }`}
      >
        <div className="flex gap-5 items-baseline cursor-pointer">
          <span>
            <label htmlFor=""></label>
            <input
              type="radio"
              className={`cursor-pointer ${
                selectedPledge === pledgeRadioValue && "accent-moderateCyan"
              }`}
              name="pledge_input"
              id={pledgeRadioValue}
              value={pledgeRadioValue}
              disabled={!standIsAvailable}
              checked={selectedPledge === pledgeRadioValue}
              onChange={() => onSelectPledge(pledgeRadioValue)}
            />
          </span>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <p
                  className={`text-lg font-bold ${
                    standIsAvailable ? "text-black" : "text-black/45"
                  } `}
                >
                  {standTitle}
                </p>
                <p
                  className={`text-base font-medium ${
                    standIsAvailable
                      ? "text-moderateCyan"
                      : "text-moderateCyan/45"
                  } `}
                >
                  Pledge ${pledgeLeft} or more
                </p>
              </div>
              <span className="flex gap-2 items-center">
                <p
                  className={`text-xl font-bold tracking-wider ${
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
            </div>
            <div>
              <p
                className={`${
                  standIsAvailable ? "text-darkGray" : "text-darkGray/45"
                } `}
              >
                {standSummary}
              </p>
            </div>
            {selectedPledge === pledgeRadioValue && (
              <div className="flex justify-between items-center">
                <div>
                  <p>Enter your pledge</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="rounded-full px-5 py-3 border flex gap-7 items-center w-36">
                    <p className="font-bold">$</p>
                    <input type="number" className="border-0 outline-none font-medium" value={pledgeInputValue} onChange={(e) => setPleadgeInputValue(Number(e.target.value) )} />
                  </div>
                  <Button text="Continue" handleOnClick={showSuccessModal} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PledgeRadioCard;
