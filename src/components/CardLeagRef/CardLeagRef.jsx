/* eslint-disable react/prop-types */
import EnergyProgress from "../Energy/EnergyProgress.jsx";
import CustomButton from "../NextUi/CustomBtn.jsx";

function CardLeagRef({
  key,
  icon,
  title,
  price,
  league_img,
  isLoading,
  onClick,
  claimed,
  energyNow,
  energyLimit,
}) {
  return (
    // flex flex-col gap-1 justify-center p-2 rounded-xl border border-slate-500 bg-gradient-to-b from-slate-700 to-green-200
    <div
      key={key}
      className={`${
        claimed && "hidden"
      } w-full bg-black bg-grid-white/[0.2] relative flex flex-col justify-center p-2 rounded-lg overflow-hidden gap-1`}
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#ccc]
                                [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"
      ></div>
      <div className={"flex gap-1 justify-between items-center"}>
        <div className={"flex items-center gap-2"}>
          {league_img ? (
            <img className={"w-10"} src={icon} alt={title} />
          ) : (
            icon
          )}
          <div className={"flex flex-col justify-center gap-1"}>
            <span className={"text-white text-sm"}>{title}</span>
            <div className={"flex justify-center items-center gap-1"}>
              <img src={"./coin.png"} className={"w-5 h-5"} alt={title} />
              <span className={"text-white"}>
                {Number(price).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <CustomButton
          size={"sm"}
          onClick={onClick}
          isLoading={isLoading}
          variant={"shadow"}
          color={energyNow < energyLimit ? "default" : "primary"}
          isDisabled={energyNow < energyLimit}
        >
          Claim
        </CustomButton>
      </div>
      <EnergyProgress
        energyNow={energyNow}
        energyLimit={energyLimit}
        topNotShow={true}
      />
    </div>
  );
}

export default CardLeagRef;
