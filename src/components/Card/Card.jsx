import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "../ui/MovingBorders";

// eslint-disable-next-line react/prop-types
const Card = ({ claimed, key, icon, title, reward, onClick }) => {
  return (
    <Button
      onClick={onClick}
      borderRadius="1.75rem"
      duration={Math.floor(Math.random() * 1000) + 10000}
      key={key}
      className={`px-5 py-2 rounded-lg flex flex-1 justify-between items-center border border-slate-600 bg-gradient-to-r ${
        claimed && "from-gray-900 via-gray-800 to-transparent"
      } from-gray-700 via-gray-600 to-transparent`}
    >
      <div className="flex justify-center items-center gap-4">
        {icon}
        <div className="flex flex-col gap-1.5">
          <p className="text-gray-300">{title}</p>
          <div className="flex gap-2">
            <img className="w-5 h-5" src="./coin.png" alt="coin" />
            <span className="text-gray-300">
              {Number(reward).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      {claimed ? (
        <IoCheckmarkSharp size={22} color="green" />
      ) : (
        <IoIosArrowForward size={22} />
      )}
    </Button>
  );
};

export default Card;
