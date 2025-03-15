import { Progress } from "antd";
import React from "react";

const SummaryCard = () => {
  return (
    <>
      <div className="bg-white shadow-md border w-[60%] py-16 px-14  ">
        <div className="divide-x-2 flex gap-28 ">
          <div className="flex flex-col gap-3 pr-10">
            <h3 className="font-bold font-commissioner text-3xl">$89,914</h3>
            <p className="text-base text-darkGray">of $100,000 backend</p>
          </div>
          <div className="flex flex-col gap-3  px-10">
            <h3 className="font-bold font-commissioner text-3xl">5007</h3>
            <p className="text-base text-darkGray">total backers</p>
          </div>
          <div className="flex flex-col gap-3  px-10">
            <h3 className="font-bold font-commissioner text-3xl">56</h3>
            <p className="text-base text-darkGray">days left</p>
          </div>
        </div>
        <div className="mt-14">
          <Progress percent={75} showInfo={false} strokeColor={"#3cb4ac"} />
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
