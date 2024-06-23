import Card, {Cards} from "../components/Card/Card";
import {useDisclosure} from "@nextui-org/react";
import React, {useState} from "react";
import Tabs from "../components/Earn/Tabs";
import {Refs, Trophies} from "../lib/data/data";
import {useEffect} from "react";
// import ModalComponent from "../components/ModalComponent";
import CardLeagRef from "../components/CardLeagRef/CardLeagRef.jsx";
import {FaTelegramPlane} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import {GiThreeFriends} from "react-icons/gi";
import {SiTerraform} from "react-icons/si";
import {FaUserFriends} from "react-icons/fa";


export const TaskList = [{
    id: 0,
    icon: <FaTelegramPlane size={28} color="yellow"/>,
    icon_lg: <FaTelegramPlane size={44} color="yellow"/>,
    title: "Join our TG channel",
    reward: 6000,
    claimed: false,
}, {
    id: 1,
    icon: <BsTwitterX size={30} color="yellow"/>,
    icon_lg: <BsTwitterX size={44} color="yellow"/>,
    title: "Follow our X account",
    reward: 12000,
    claimed: false,
}, {
    id: 2,
    icon: <GiThreeFriends size={30} color="yellow"/>,
    icon_lg: <GiThreeFriends size={44} color="yellow"/>,
    title: "Invite  3 friends",
    reward: 9000,
    claimed: true,
}, {
    id: 3,
    icon: <SiTerraform size={30} color="yellow"/>,
    icon_lg: <SiTerraform size={44} color="yellow"/>,
    title: "Visit site",
    reward: 3500,
    claimed: false,
},];

const Earn = () => {
    const [tabActive, setTabActive] = useState(true);
    // const [cardInfo, setCardInfo] = useState([]);
    // const {onOpen, isOpen, onOpenChange} = useDisclosure();
    // const [isLoading, setIsLoading] = useState(false);

    // const handleOpen = (index) => {
    //     setCardInfo(TaskList[index])
    //     onOpen()
    // };

    const handleTab = (tab) => {
        setTabActive(tab);
    };
    //
    // const handleCheck = (taskId) => {
    //     console.log("aaa", taskId);
    // };

    const handleClaimLeague = () => {

    }

    useEffect(() => {
        setTabActive("Special");
    }, []);

    return (
        <>
            <div className="w-full h-full flex flex-col items-center px-5 pt-0">
                <div className="relative w-24 h-24 mt-8 rounded-full [box-shadow:20px_6px_50px_44px_#FCFF40] ">
                    <img className={"w-full scale3d-125"} src={"./coin.png"} alt="coin"/>
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
                        // <div className="w-full flex flex-col gap-1">
                        //     {TaskList.map((task, index) => (
                        //         <Card
                        //             onClick={task.claimed ? () => {
                        //             } : () => handleOpen(task.id)}
                        //             key={"tab_tasks_" + index}
                        //             icon={task.icon}
                        //             title={task.title}
                        //             reward={task.reward}
                        //             claimed={task.claimed}
                        //         />
                        //     ))}
                        // </div>
                        <Cards
                            obj_list={TaskList}
                            callback={() => {
                            }}
                            modalCallback={() => {
                            }}
                        />
                    )}

                    {tabActive === "Leagues" && (
                        <div className="w-full flex flex-col gap-1 mb-1">
                            {Trophies.map((trophy, index) => (
                                <CardLeagRef onClick={handleClaimLeague} league_img={true} price={trophy.reward}
                                             key={index} icon={trophy.src}
                                             title={trophy.title} reward={trophy.reward}/>
                            ))}
                        </div>
                    )}

                    {tabActive === "Ref Tasks" && (
                        <div className="w-full flex flex-col gap-1 mb-1">
                            {Refs.map((trophy, index) => (
                                <CardLeagRef onClick={handleClaimLeague} league_img={false} price={trophy.reward}
                                             key={index} icon={<FaUserFriends color={'white'} size={32} />}
                                             title={trophy.title} reward={trophy.reward}/>
                            ))}
                        </div>
                    )}

                </div>
            </div>
            {/* Modal for tasks(special) */}
            {/*<ModalComponent*/}
            {/*    isOpen={isOpen}*/}
            {/*    onOpen={onOpen}*/}
            {/*    onOpenChange={onOpenChange}*/}
            {/*    cardInfo={cardInfo}*/}
            {/*    onClick={() => handleCheck(cardInfo.id)}*/}
            {/*/>*/}
        </>
    );
};

export default Earn;
