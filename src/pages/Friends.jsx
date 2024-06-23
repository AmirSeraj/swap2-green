import {BsCopy} from "react-icons/bs";
import {MdOutlinePersonAddAlt} from "react-icons/md";
import CustomButton from "../components/NextUi/CustomBtn.jsx";
import {motion} from "framer-motion";

const Friends = () => {
    return (
        <div className={'flex flex-col p-5 gap-3 items-center w-full h-full relative'}>
            <h1 className={'text-white font-bold text-3xl'}>Invite friends!</h1>
            <p className={'text-sm text-white'}>You and your friend will receive bonuses.</p>

            <div className={'absolute w-full bottom-2 flex gap-1 px-2'}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={'invitation_link bg-blue-600 flex justify-center gap-2 items-center rounded-xl w-3/4 text-white p-5 h-[60px]'}>
                    <span>Invite a friend</span> <MdOutlinePersonAddAlt color={'white'}/>
                </motion.div>
                <CustomButton color={'primary'} size={'lg'} className={'bg-blue-600 py-3 flex justify-center items-center rounded-xl w-1/4 h-[60px]'}>
                    <BsCopy color={'white'} size={30}/>
                </CustomButton>
            </div>
        </div>
    )
}

export default Friends