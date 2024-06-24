import { MdCurrencyExchange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiHandCoinsFill } from "react-icons/pi";
import { RiSpeedUpLine } from "react-icons/ri";
import { IoStatsChartOutline } from "react-icons/io5";
import CustomButton from "./NextUi/CustomBtn";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Earn",
    icon: <PiHandCoinsFill />,
    href: "/earn",
  },
  {
    title: "Exchange",
    icon: <MdCurrencyExchange />,
    href: "/exchange",
  },
  {
    title: "Friends",
    icon: <FaUserFriends />,
    href: "/friends",
  },
  {
    title: "Boost",
    icon: <RiSpeedUpLine />,
    href: "/boost",
  },
  {
    title: "Stats",
    icon: <IoStatsChartOutline />,
    href: "/stats",
  },
];

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  if (path === "/") {
    navigate("/exchange");
  }
  return (
    <div className="w-full h-full place-content-center grid grid-cols-5 xs:gap-0.5 gap-[1px] bg-gray-800 border border-gray-700 rounded-xl xs:p-1 p-0.5 items-center">
      {links.map((item, index) => {
        return (
          <Link
            to={item.href}
            key={index}
            className="flex justify-center items-center"
          >
            <CustomButton
              size="sm"
              variant="shadow"
              color={path === item.href ? "primary" : "default"}
              className={
                "flex flex-col items-center justify-center gap-1 h-12 text-xs w-16"
              }
            >
              {item.title}
              {item.icon}
            </CustomButton>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
