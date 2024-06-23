import {BsCopy} from "react-icons/bs";
import {MdOutlinePersonAddAlt} from "react-icons/md";
import CustomButton from "../components/NextUi/CustomBtn.jsx";
import {motion} from "framer-motion";
import {useData} from "../components/Context.jsx";
import {useState} from "react";
import {IoCheckmarkDoneSharp} from "react-icons/io5";
import {BsPersonHearts} from "react-icons/bs";

const Friends = () => {
    const {referrals} = useData();
    // const initData = useInitData();
    // const refLink = "t.me/spacexswapbot?start=" + initData.user.id;
    const refLink = "t.me/spacexswapbot?start=";
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(refLink).then(() => {
            setCopy(true);
        })
    }
    return (
        <div className={'flex flex-col p-7 gap-3 items-center w-full h-full relative'}>
            <h1 className={'text-white font-bold text-3xl mt-5'}>Invite friends!</h1>
            <p className={'text-sm text-white mt-3'}>You and your friend will receive bonuses.</p>

            <p className="text-sm text-black mt-8">
                {"As they join the game, you'll be rewarded with "}
                <b>25K Tokens</b> and{" "}
                <i>2% of their tapping income without any limitation</i>
            </p>

            <div className={'flex flex-col w-full'}>
                <h1 className={'text-white text-left text-xl mb-4'}>List of your friends (3)</h1>
                <div className={'flex flex-col gap-1 w-full'}>
                    <div
                        className={'flex items-center gap-3 py-1.5 px-3 rounded-2xl border border-slate-500 shadow-amber-950 shadow-sm bg-gradient-to-r from-slate-500 to-slate-600'}>
                        <BsPersonHearts color={'yellow'} size={28}/>
                        <div className={'flex flex-col gap-1 justify-center'}>
                            <p className={'text-white text-sm'}>David Madrin</p>
                            <div className={'flex items-center gap-1'}>
                                <span className={'text-sm text-white'}>Master</span>
                                <span className={'text-sm w-1 h-1 mx-1 rounded-full flex items-center bg-black'}/>
                                <div className={'flex items-center gap-2'}>
                                    <img src={'./coin.png'} alt={'coin'} className={'w-4 h-4'}/>
                                    <span className={'text-white text-sm'}>{Number(30000).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={'flex items-center gap-3 py-1.5 px-3 rounded-2xl border border-slate-500 shadow-amber-950 shadow-sm bg-gradient-to-r from-slate-500 to-slate-600'}>
                        <BsPersonHearts color={'yellow'} size={28}/>
                        <div className={'flex flex-col gap-1 justify-center'}>
                            <p className={'text-white text-sm'}>David Madrin</p>
                            <div className={'flex items-center gap-1'}>
                                <span className={'text-sm text-white'}>Master</span>
                                <span className={'text-sm w-1 h-1 mx-1 rounded-full flex items-center bg-black'}/>
                                <div className={'flex items-center gap-2'}>
                                    <img src={'./coin.png'} alt={'coin'} className={'w-4 h-4'}/>
                                    <span className={'text-white text-sm'}>{Number(30000).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={'flex items-center gap-3 py-1.5 px-3 rounded-2xl border border-slate-500 shadow-amber-950 shadow-sm bg-gradient-to-r from-slate-500 to-slate-600'}>
                        <BsPersonHearts color={'yellow'} size={28}/>
                        <div className={'flex flex-col gap-1 justify-center'}>
                            <p className={'text-white text-sm'}>Ahmad Eskandari</p>
                            <div className={'flex items-center gap-1'}>
                                <span className={'text-sm text-white'}>Master</span>
                                <span className={'text-sm w-1 h-1 mx-1 rounded-full flex items-center bg-black'}/>
                                <div className={'flex items-center gap-2'}>
                                    <img src={'./coin.png'} alt={'coin'} className={'w-4 h-4'}/>
                                    <span className={'text-white text-sm'}>{Number(50000).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'absolute w-full bottom-2 flex gap-1 px-2'}>
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                    className={'invitation_link bg-blue-600 flex justify-center gap-2 items-center rounded-xl w-3/4 text-white p-5 h-[60px]'}>
                    <span>Invite a friend</span> <MdOutlinePersonAddAlt color={'white'}/>
                </motion.div>
                <CustomButton onClick={handleCopy} color={'primary'} size={'lg'}
                              className={'bg-blue-600 py-3 flex justify-center items-center rounded-xl w-1/4 h-[60px]'}>
                    {copy ? <IoCheckmarkDoneSharp color={'#000'} size={28}/> : <BsCopy color={'white'} size={30}/>}
                </CustomButton>
            </div>
        </div>
    )
}

export default Friends