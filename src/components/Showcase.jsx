import { useTranslation } from "react-i18next";
import img from "../assets/img/showcase.png";

const Showcase = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-4 items-center">
        <div className="flex flex-col items-start justify-between gap-10 md:gap-8 lg:gap-0 lg:justify-around order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full lg:w-[70%] font-semibold text-black leading-tight md:leading-normal lg:leading-[125%] group-hover:text-[#263238]/90 transition-colors duration-300">
            {t("showcase.title")}
          </h1>
          <p className="w-full lg:w-[60%] text-[#8f95a5] font-normal text-base md:text-xl lg:text-2xl leading-relaxed md:leading-loose group-hover:text-[#8f95a5]/90 transition-colors duration-300">
            {t("showcase.paragraph")}
          </p>
          <button className="bg-[#263238] font-normal text-base md:text-lg lg:text-xl text-white px-6 md:px-8 lg:px-27.75 py-3 md:py-4 rounded-[10px] md:rounded-[15px] hover:bg-[#37474f] hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 transform w-full sm:w-auto text-center">
            {t("showcase.button")}
          </button>
        </div>
        <div className="order-1 lg:order-2 group">
          <img 
            src={img} 
            alt="Showcase" 
            className="w-full h-auto max-w-full lg:max-w-none object-contain group-hover:scale-105 transition-transform duration-500 ease-out hover:drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;