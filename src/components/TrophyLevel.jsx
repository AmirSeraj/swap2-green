import { IoIosArrowForward } from "react-icons/io";
import {Link} from "react-router-dom";

function TrophyLevel(props) {
    return (
        <div className={'flex justify-between items-center'}>
            <Link to={'/trophy'} className={'flex justify-center items-center gap-1'}>
                Master
                <IoIosArrowForward />
            </Link>
            <div className={'flex justify-center items-center gap-2'}>
                <span className={'text-gray-500'}>Level</span>
                <span className={'text-white'}>8/10</span>
            </div>
        </div>
    );
}

export default TrophyLevel;