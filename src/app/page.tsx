"use client";

import Image from "next/image";
import brandLogo from "../../public/images/logo-mastercraft.svg";
import bookmarkImg from "../../public/images/icon-bookmark.svg";
import SummaryCard from "./components/SummaryCard";
import AboutCard from "./components/AboutCard";
import Button from "./components/Button";
import { Modal } from "antd";
import { useState } from "react";
import PledgeRadioCard from "./components/PledgeRadioCard";
import checkMark from "../../public/images/icon-check.svg";

export default function Home() {
  const [modalState, setModalState] = useState<"" | "pledge" | "success">("");
  const [selectedPledge, setSelectedPledge] = useState("");

  const handleSelectPledge = (value: string) => {
    setSelectedPledge(value);
  };

  const closeModal = () => setModalState("");

  const showSuccessModal = () => setModalState("success");



  return (
    <div>
      <div className="desktop_hero "></div>
      <div className="flex flex-col gap-8 items-center justify-center absolute top-96 w-full pb-20 font-commissioner">
        <div className="bg-white shadow-md border w-full  md:w-[90%] lg:w-[60%] py-16 relative font-commissioner ">
          <div className="flex justify-center">
            <span className="absolute -top-6 ">
              <Image src={brandLogo} alt="brandLogo" />
            </span>
          </div>
          <div className="relative flex font-commissioner flex-col justify-center items-center gap-6">
            <h2 className="text-4xl font-commissioner font-bold text-center lg:text-left ">
              Mastercraft Bamboo Monitor Riser{" "}
            </h2>
            <p className="text-darkGray tracking-wide text-xl text-center lg:text-left">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain
            </p>
          </div>
          <div className="flex justify-between w-full items-center px-14 pt-14">
            <Button text="Back this project" handleOnClick={() => setModalState("pledge")} />
            <div className="bg-darkGray/20 cursor-pointer rounded-full pr-10 flex items-center gap-3 font-commissioner justify-center">
              <span>
                <Image src={bookmarkImg} alt="bookmark" />
              </span>
              <span className="text-darkGray font-bold font-commissioner hidden lg:flex">
                Bookmark
              </span>
            </div>
          </div>
        </div>
        <SummaryCard />
        <AboutCard />
      </div>

      {/* MODAL */}
      <Modal
        open={modalState === "pledge"}
        onCancel={closeModal}
        width={600}
        footer={null}
      >
        <div className="py-8">
          <span className="font-commissioner text-xl font-bold">
            Back this project
          </span>
          <p className="text-darkGray mt-5 font-commissioner">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-6 mt-8">
            <PledgeRadioCard
              standTitle="Bamboo Stand"
              standIsAvailable={true}
              standLeft="101"
              standSummary="You get an ergonomic stand made of natural bamboo. You've
            helped us launch our promotional campaign, and you’ll be added to a
            special Backer member list. 101 left Select Reward Black Edition
            Stand Pledge $75 or more You get a Black Special Edition computer
            stand and a personal thank you. You’ll be added to our Backer member
            list."
              pledgeLeft={25}
              pledgeRadioValue="bambo"
              selectedPledge={selectedPledge}
              onSelectPledge={handleSelectPledge}
              showSuccessModal={showSuccessModal}
            />

            <PledgeRadioCard
              standTitle="Black Edition Stand"
              standIsAvailable={true}
              standLeft="64"
              standSummary="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              pledgeLeft={75}
              pledgeRadioValue="blackEdition"
              selectedPledge={selectedPledge}
              onSelectPledge={handleSelectPledge}
              showSuccessModal={showSuccessModal}
            />

            <PledgeRadioCard
              standTitle="Mahogany Special Edition"
              standIsAvailable={false}
              standLeft="0"
              standSummary="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. "
              pledgeLeft={200}
              pledgeRadioValue="mahoganySpecial"
              selectedPledge={selectedPledge}
              onSelectPledge={handleSelectPledge}
              showSuccessModal={showSuccessModal}
            />
          </div>
        </div>
      </Modal>

      {/* SUCESS MODAL */}
      {/* MODAL */}
      <Modal
        open={modalState === "success"}
        onCancel={closeModal}
        width={600}
        footer={null}
      >
        <div className="flex justify-center flex-col gap-5 items-center ">
          <span>
            <Image src={checkMark} alt="" />
          </span>
          <h2 className="text-3xl font-commissioner font-bold">
            Thanks for your support!
          </h2>
          <span className="text-darkGray text-center text-base">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </span>
          <Button text="Got it!" handleOnClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
}
