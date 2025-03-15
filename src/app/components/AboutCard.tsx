import StandCard from "./StandCard";

const AboutCard = () => {
  return (
    <>
      <div className="bg-white shadow-md border w-[60%] py-16 px-14 font-commissioner ">
        <div className="flex gap-8 flex-col">
          <span className="text-xl font-bold">About this project</span>
          <p className="leading-loose text-darkGray font-medium">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="leading-loose text-darkGray font-medium ">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-10">
          <StandCard
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
          />

          <StandCard
            standTitle="Black Edition Stand"
            standIsAvailable={true}
            standLeft="64"
            standSummary="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            pledgeLeft={75}
          />

          <StandCard
            standTitle="Mahogany Special Edition"
            standIsAvailable={false}
            standLeft="0"
            standSummary="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. "
            pledgeLeft={200}
          />
        </div>
      </div>
    </>
  );
};

export default AboutCard;
