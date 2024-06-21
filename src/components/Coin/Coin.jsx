import {motion} from "framer-motion";
import {useData} from "../Context.jsx";

function Coin() {
    const {guru, clickValue, tap} = useData();

    return (
        <div className={`${guru && 'animate-gradient'} w-[35vh] h-[35vh] bg-green-700 rounded-full z-40 flex justify-center items-center`}>
            <div className={'w-[32vh] h-[32vh] bg-gray-300 rounded-full z-20 flex justify-center items-center ' +
                'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-200 to-green-800'}>
                <motion.div
                    whileFocus={{scale: 1.1}}
                    whileTap={{scale: 0.85}}
                >
                    <img className={'bg-transparent'} src={'./tap--img.png'}/>
                </motion.div>
            </div>
        </div>
    );
}

export default Coin;

