"use client";

import Image from "next/image";
import brandLogo from "../../public/images/logo-mastercraft.svg";
import bookmarkImg from "../../public/images/icon-bookmark.svg";
import SummaryCard from "./components/SummaryCard";
import AboutCard from "./components/AboutCard";
import Button from "./components/Button";
import { Modal } from "antd";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="desktop_hero "></div>
      <div className="flex flex-col gap-8 items-center justify-center absolute top-96 w-full pb-20 font-commissioner">
        <div className="bg-white shadow-md border w-[60%] py-16 relative font-commissioner ">
          <div className="flex justify-center">
            <span className="absolute -top-6 ">
              <Image src={brandLogo} alt="brandLogo" />
            </span>
          </div>
          <div className="relative flex font-commissioner flex-col justify-center items-center gap-6">
            <h2 className="text-4xl font-commissioner font-bold">
              Mastercraft Bamboo Monitor Riser{" "}
            </h2>
            <p className="text-darkGray tracking-wide text-xl">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain
            </p>
          </div>
          <div className="flex justify-between w-full items-center px-14 pt-14">
            <Button text="Back this project" handleOnClick={showModal} />
            <div className="bg-darkGray/20 cursor-pointer rounded-full pr-10 flex items-center gap-3 font-commissioner justify-center">
              <span>
                <Image src={bookmarkImg} alt="bookmark" />
              </span>
              <span className="text-darkGray font-bold font-commissioner">
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
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
          <div>

          </div>
        </div>
      </Modal>
    </div>
  );
}
