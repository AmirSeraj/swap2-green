import Balance from "../components/Balance/Balance";
import Card from "../components/Card/Card";
import { FaRegHandPeace } from "react-icons/fa";
import { IoMdBatteryCharging } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/modal";
import ModalComponent from "../components/ModalComponent";
import { PiRobotBold } from "react-icons/pi";
import { VscFlame } from "react-icons/vsc";
import { useData } from "../components/Context";

const boosters = {
  multitap: {
    next_level: 14,
    next_reward: 8000,
    claimed: false,
  },
  energy: {
    next_level: 15,
    next_reward: 400000,
    claimed: true,
  },
  recharging_speed: {
    next_level: 17,
    next_reward: 450000,
    claimed: false,
  },
  bot: {
    reward: 200000,
    claimed: false,
  },
};

const Boost = () => {
  const [boostInfo, setBoostInfo] = useState([]);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const data = useData();

  const handleOpenModal = (boost) => {
    if (boost === "multitap") {
      setBoostInfo({
        title: "Multitap",
        icon_lg: <FaRegHandPeace size={60} color={"yellow"} />,
        reward: boosters.multitap.next_reward,
      });
    }
    if (boost === "energy") {
      setBoostInfo({
        title: "Energy Limit",
        icon_lg: <IoMdBatteryCharging size={60} color={"yellow"} />,
        reward: boosters.energy.next_reward,
      });
    }
    if (boost === "recharging_speed") {
      setBoostInfo({
        title: "Recharging Speed",
        icon_lg: <BsFillLightningChargeFill size={60} color={"yellow"} />,
        reward: boosters.recharging_speed.next_reward,
      });
    }
    if (boost === "bot") {
      setBoostInfo({
        title: "Tap Bot",
        icon_lg: <PiRobotBold size={60} color={"yellow"} />,
        reward: boosters.bot.reward,
      });
    }
    onOpen();
  };

  const handleDailyBoosters = (daily_booster) => {
    if (daily_booster === "guru") {
      setBoostInfo({
        title: "Guru",
        icon_lg: <VscFlame color={"yellow"} size={60} />,
        reward: "Free",
      });
      // send and update guru data....
    } else {
      setBoostInfo({
        title: "Refill Tank",
        icon_lg: <BsFillLightningChargeFill color={"yellow"} size={60} />,
        reward: "Free",
      });
      // send and update full_tank data....
    }
    onOpen();
  };

  return (
    <div className="xs:px-10 px-5 pb-5 pt-14 flex flex-col w-full h-full">
      <Balance />
      <h1 className="text-white mt-6 mb-3 font-bold text-2xl">
        Daily Boosters
      </h1>
      <div className="flex justify-between items-center gap-1">
        {/* Guru */}
        <div
          onClick={
            data.guruLeft === 0 ? () => {} : () => handleDailyBoosters("guru")
          }
          className={`${
            data.guruLeft === 0
              ? "bg-gray-500"
              : "bg-gradient-to-r from-slate-700 to-slate-500"
          } w-1/2 py-1 px-1.5 flex gap-2 border border-slate-600 rounded-lg items-center h-14`}
        >
          <VscFlame color={data.guruLeft === 0 ? "#ccc" : "yellow"} size={30} />
          <div className="flex flex-col">
            <span
              className={`${
                data.guruLeft === 0 ? "text-gray-400" : "text-gray-100"
              }`}
            >
              Taping Guru
            </span>
            <span
              className={`${
                data.guruLeft === 0 ? "text-gray-400 text-sm" : "text-gray-100"
              }`}
            >
              {data.guruLeft !== 0
                ? data.guruLeft + " / " + 3
                : "10h : 16m : 17s"}
            </span>
          </div>
        </div>
        {/* FUll Tank */}
        <div
          onClick={() => handleDailyBoosters("full_tank")}
          className={`w-1/2 h-14 py-1 px-1.5 flex gap-2 border border-slate-600 rounded-lg items-center ${
            data.refillLeft === 0
              ? "bg-gray-700"
              : "bg-gradient-to-r from-slate-700 to-slate-500"
          }`}
        >
          <BsFillLightningChargeFill size={28} color={"yellow"} />
          <div className="flex flex-col">
            <span
              className={`${
                data.refillLeft === 0 ? "text-gray-400" : "text-gray-100"
              }`}
            >
              Full Tank
            </span>
            <span
              className={`${
                data.refillLeft === 0
                  ? "text-gray-400 text-xs"
                  : "text-gray-100"
              }`}
            >
              {data.refillLeft !== 0
                ? data.refillLeft + " / " + 3
                : "10h:16m:17s"}
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-white mt-6 mb-3 font-bold text-2xl">Boosters :</h1>
      <div className="flex flex-col gap-1 items-center justify-center w-full">
        {/* Multitap */}
        <Card
          onClick={
            boosters.multitap.claimed
              ? () => {}
              : () => handleOpenModal("multitap")
          }
          icon={
            <FaRegHandPeace
              size={28}
              color={boosters.multitap.claimed ? "#ccc" : "yellow"}
            />
          }
          title={"Multitap"}
          reward={boosters.multitap.next_reward}
          claimed={boosters.multitap.claimed}
          boosterLevel={boosters.multitap.next_level}
        />

        {/* Energy limit */}
        <Card
          onClick={
            boosters.energy.claimed ? () => {} : () => handleOpenModal("energy")
          }
          icon={
            <IoMdBatteryCharging
              size={28}
              color={boosters.energy.claimed ? "#ccc" : "yellow"}
            />
          }
          title={"Energy Limit"}
          reward={boosters.energy.next_reward}
          claimed={boosters.energy.claimed}
          boosterLevel={boosters.energy.next_level}
        />

        {/* Recharging Speed */}
        <Card
          onClick={
            boosters.recharging_speed.claimed
              ? () => {}
              : () => handleOpenModal("recharging_speed")
          }
          icon={
            <BsFillLightningChargeFill
              size={28}
              color={boosters.recharging_speed.claimed ? "#ccc" : "yellow"}
            />
          }
          title={"Recharging Speed"}
          reward={boosters.recharging_speed.next_reward}
          claimed={boosters.recharging_speed.claimed}
          boosterLevel={boosters.recharging_speed.next_level}
        />

        {/* Tap Bot */}
        <Card
          onClick={
            boosters.recharging_speed.claimed
              ? () => {}
              : () => handleOpenModal("bot")
          }
          icon={
            <PiRobotBold
              size={28}
              color={boosters.bot.claimed ? "#ccc" : "yellow"}
            />
          }
          title={"Tap Bot"}
          reward={boosters.bot.reward}
          claimed={boosters.bot.claimed}
        />
      </div>

      {/* Modal for tasks(special) */}
      <ModalComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        cardInfo={boostInfo}
        // onClick={() => handleCheck(cardInfo.id)}
      />
    </div>
  );
};

export default Boost;
