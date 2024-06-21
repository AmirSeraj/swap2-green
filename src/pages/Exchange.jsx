import Balance from "../components/Balance/Balance.jsx";
import EnergyProgress from "../components/Energy/EnergyProgress.jsx";
import Coin from "../components/Coin/Coin.jsx";

const Exchange = () => {
    return (
        <div className={'xs:px-8 px-4 pb-3 flex flex-col justify-evenly gap-3 items-center w-full h-full'}>
            <Balance/>
            <EnergyProgress/>
            <Coin />
        </div>
    )
}

export default Exchange