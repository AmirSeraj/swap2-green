import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Trophies } from "../lib/data/data";
import { useData } from "../components/Context";
import EnergyProgress from "../components/Energy/EnergyProgress";

const Trophy = () => {
  const { league, balance } = useData();
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        className={"w-[80vw] h-full"}
        grabCursor={true}
        mousewheel={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={1}
        freeMode={true}
        initialSlide={league}
      >
        {Trophies?.map((item, index) => (
          <SwiperSlide className="w-full h-full" key={index}>
            <div className="w-full h-full flex flex-col items-center justify-around">
              <div className="flex justify-center items-center flex-col gap-2">
                <h1 className="text-white font-bold text-2xl">
                  {item?.title} League
                </h1>
                <p className="text-slate-800 text-center text-sm">
                  Your number of shares determines the league you enter.
                </p>
              </div>
              <img src={item?.src} alt={item?.title} />
              {index !== league && (
                <h1 className="font-bold text-white text-2xl">
                  From {Number(item?.threshold).toLocaleString()}
                </h1>
              )}
              {index === league && (
                <div className="w-full">
                  <EnergyProgress
                    energyNow={balance}
                    energyLimit={item?.threshold}
                    topNotShow={true}
                    trophy={true}
                    trophyPrice={item?.threshold}
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trophy;
