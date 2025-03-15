import Image from "next/image";
import brandLogo from "../../public/images/logo-mastercraft.svg";
import bookmarkImg from "../../public/images/icon-bookmark.svg";

export default function Home() {
  return (
    <div>
      <div className="desktop_hero "></div>
      <div className="flex justify-center absolute top-96 w-full  ">
        <div className="bg-white shadow-md border w-[60%] py-16 relative  ">
          <div className="flex justify-center">
            <span className="absolute -top-6 ">
              <Image src={brandLogo} alt="brandLogo" />
            </span>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-6">
            <h2 className="text-4xl font-commissioner font-bold">
              Mastercraft Bamboo Monitor Riser{" "}
            </h2>
            <p className="text-darkGray tracking-wide text-xl">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain
            </p>
          </div>
          <div className="flex justify-between w-full items-center px-14 pt-14">
            <button className="bg-darkCyan rounded-full px-10 text-white py-4 flex items-center justify-center ">
              Back this project
            </button>
            <div className="bg-darkGray/20 cursor-pointer  rounded-full pr-10 flex items-center gap-3 font-commissioner justify-center">
              <span>
                <Image src={bookmarkImg} alt="bookmark" />
              </span>
              <span className="text-darkGray font-bold">Bookmark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
