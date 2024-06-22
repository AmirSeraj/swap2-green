import Card from "../components/Card/Card";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import Tabs from "../components/Earn/Tabs";
import { TaskList } from "../lib/data/data";
import { useEffect } from "react";
import ModalComponent from "../components/ModalComponent";

const Earn = () => {
  const [tabActive, setTabActive] = useState(true);
  const [cardInfo, setCardInfo] = useState([]);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const handleOpen = (index) => {
    setCardInfo(TaskList[index]);
    onOpen();
  };

  const handleTab = (tab) => {
    setTabActive(tab);
  };

  const handleCheck = (taskId) => {
    console.log("aaa", taskId);
  };

  useEffect(() => {
    setTabActive("Special");
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center px-5 pt-0">
        <div className="relative w-24 h-24 mt-8 rounded-full [box-shadow:20px_6px_50px_44px_#FCFF40] ">
          <img className={"w-full scale3d-125"} src={"./coin.png"} alt="coin" />
        </div>
        <h1 className="text-center text-black my-5 font-bold text-3xl ">
          Earn more coins
        </h1>
        <div className="flex flex-col items-start w-full">
          <Tabs
            onClick={handleTab}
            tabActive={tabActive}
            tabList={["Special", "Leagues", "Ref Tasks"]}
          />
          {tabActive === "Special" && (
            <div className="w-full flex flex-col gap-1">
              {TaskList.map((task, index) => (
                <Card
                  onClick={task.claimed ? () => {} : () => handleOpen(task.id)}
                  key={index}
                  icon={task.icon}
                  title={task.title}
                  reward={task.reward}
                  claimed={task.claimed}
                />
              ))}
            </div>
          )}

        </div>
      </div>
      {/* Modal for tasks(special) */}
      <ModalComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        cardInfo={cardInfo}
        onClick={() => handleCheck(cardInfo.id)}
      />
    </>
  );
};

export default Earn;
