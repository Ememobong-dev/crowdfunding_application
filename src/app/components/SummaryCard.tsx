import { Progress } from "antd";
import React from "react";

const SummaryCard = () => {
  return (
    <>
      <div className="bg-white shadow-md font-commissioner border  w-full  md:w-[90%] lg:w-[60%] py-16 px-14  ">
        <div className="divide-y-2 lg:divide-x-2 lg:divide-y-0 justify-center items-center lg:items-start lg:justify-normal flex flex-col lg:flex-row gap-28 ">
          <div className="flex flex-col gap-3 pr-10">
            <h3 className="font-bold font-commissioner text-3xl text-center lg:text-left">$89,914</h3>
            <p className="text-base text-darkGray text-center lg:text-left">of $100,000 backend</p>
          </div>
          <div className="flex flex-col gap-3  px-10">
            <h3 className="font-bold font-commissioner text-3xl text-center lg:text-left">5007</h3>
            <p className="text-base text-darkGray text-center lg:text-left">total backers</p>
          </div>
          <div className="flex flex-col gap-3  px-10">
            <h3 className="font-bold font-commissioner text-3xl text-center lg:text-left">56</h3>
            <p className="text-base text-darkGray text-center lg:text-left">days left</p>
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
