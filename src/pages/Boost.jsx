/* eslint-disable no-unused-vars */
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
import { useNavigate } from "react-router-dom";

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

export const upgradeMultiPriceList = [
  200, 500, 1000, 5000, 8000, 10000, 25000, 40000, 75000, 100000, 200000,
  300000, 400000, 500000, 700000, 900000, 1000000, 1200000, 1500000, 2000000,
];

const Boost = () => {
  const [boostInfo, setBoostInfo] = useState([]);
  const {
    guruLeft,
    refillLeft,
    activateGuru,
    activateRefill,
    multiTap,
    energyLimit,
    energySpeed,
    autoBot,
    setMultiTap,
    setEnergyLimit,
    setEnergySpeed,
    setAutoBot,
    balanceDown,
    balance,
  } = useData();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const handleOpenModal = (boost) => {
    if (boost === "multitap") {
      setBoostInfo({
        title: "Upgrading Multi-Tap",
        icon_lg: <FaRegHandPeace size={60} color={"yellow"} />,
        reward: boosters.multitap.next_reward,
        desc: "Gain +1 point per tap! Upgrade now to increase your coin tapping power!",
        btn_text: "Enable now",
        // btn_disable: guruLeft === 0,
        // reward: "Free",
        boost: true,
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
        desc: "Your taps are worth 5x for 20 seconds!",
        btn_text:
          guruLeft === 0
            ? "Not available now, comeback tomorrow "
            : "Enable now",
        btn_disable: guruLeft === 0,
        reward: "Free",
        boost: true,
      });
      // send and update guru data....
    } else {
      setBoostInfo({
        title: "Refill Tank",
        icon_lg: <BsFillLightningChargeFill color={"yellow"} size={60} />,
        desc: "Instantly fill your energy bar! Upgrade now for a full energy!",
        btn_text:
          guruLeft === 0
            ? "Not available now, comeback tomorrow "
            : "Enable now",
        btn_disable: guruLeft === 0,
        reward: "Free",
        boost: true,
      });
      // send and update full_tank data....
    }
    onOpen();
  };

  const handleActiveBoost = (data) => {
    if (data.title === "Guru") {
      activateGuru();
      navigate("/");
    }
    if (data.title === "Refill Tank") {
      activateRefill();
      navigate("/");
    }
    console.log(data);
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
          onClick={() => handleDailyBoosters("guru")}
          className={`${
            guruLeft === 0
              ? "bg-gray-500"
              : "bg-gradient-to-r from-slate-700 to-slate-500"
          } w-1/2 py-1 px-1.5 flex gap-2 border border-slate-600 rounded-lg items-center h-14`}
        >
          <VscFlame color={guruLeft === 0 ? "#ccc" : "yellow"} size={30} />
          <div className="flex flex-col">
            <span
              className={`${
                guruLeft === 0 ? "text-gray-400" : "text-gray-100"
              }`}
            >
              Taping Guru
            </span>
            <span
              className={`${
                guruLeft === 0 ? "text-gray-400 text-sm" : "text-gray-100"
              }`}
            >
              {guruLeft !== 0 && guruLeft + " / " + 3}
            </span>
          </div>
        </div>
        {/* FUll Tank */}
        <div
          onClick={() => handleDailyBoosters("refill_tank")}
          className={`${
            refillLeft === 0
              ? "bg-gray-500"
              : "bg-gradient-to-r from-slate-700 to-slate-500"
          } w-1/2 py-1 px-1.5 flex gap-2 border border-slate-600 rounded-lg items-center h-14`}
        >
          <BsFillLightningChargeFill
            size={30}
            color={refillLeft === 0 ? "#ccc" : "yellow"}
          />
          <div className="flex flex-col">
            <span
              className={`${
                refillLeft === 0 ? "text-gray-400" : "text-gray-100"
              }`}
            >
              Full Tank
            </span>
            <span
              className={`${
                refillLeft === 0 ? "text-gray-400 text-sm" : "text-gray-100"
              }`}
            >
              {refillLeft !== 0 && refillLeft + " / " + 3}
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
        onClick={() => handleActiveBoost(boostInfo)}
        isDisabledCheck={boostInfo.btn_disable}
      />
    </div>
  );
};

export default Boost;
