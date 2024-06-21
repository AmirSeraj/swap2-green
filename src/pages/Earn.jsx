import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";
import { SiTerraform } from "react-icons/si";
import Card from "../components/Card/Card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const tasks = [
  {
    icon: <FaTelegramPlane size={30} color="yellow" />,
    title: "Join our TG channel",
    reward: 5000,
    claimed: true,
  },
  {
    icon: <BsTwitterX size={30} color="yellow" />,
    title: "Follow our X account",
    reward: 5000,
    claimed: false,
  },
  {
    icon: <GiThreeFriends size={30} color="yellow" />,
    title: "Invite  3 friends",
    reward: 5000,
    claimed: true,
  },
  {
    icon: <SiTerraform size={30} color="yellow" />,
    title: "Visit site",
    reward: 5000,
    claimed: false,
  },
];

const Earn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-5">
        <div className="relative w-24 h-24 mt-12 rounded-full [box-shadow:20px_6px_50px_44px_#FCFF40] ">
          <img className={"w-full scale3d-125"} src={"./coin.png"} alt="coin" />
        </div>
        <h1 className="text-center text-black mt-7 pb-5 font-bold text-3xl ">
          Earn more coins
        </h1>
        <div className="flex flex-col items-start w-full">
          <p className="text-white text-lg mb-3">Tasks list</p>
          <div className="mx-2 w-full flex flex-col gap-1">
            {tasks.map((task, index) => (
              <Card
                onClick={task.claimed ? () => {} : onOpen}
                key={index}
                icon={task.icon}
                title={task.title}
                reward={task.reward}
                claimed={task.claimed}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange} className="bg-slate-400 rounded-t-3xl border-t-4 border-yellow-300 [box-shadow:1px_-8px_29px_-11px_rgba(247,255,0,1)]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Earn;
