import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../assets/img/img.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section className="container">
      <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-[48px] text-black leading-normal lg:leading-[167%] mb-6 md:mb-8 lg:mb-12">
        {t("skills.skills")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-3">
        <div className="h-auto lg:h-210.5 bg-[#f5f5f5] p-4 md:p-5 flex flex-col items-start justify-between lg:row-start-1 lg:row-end-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#eeeeee] group">
          <div className="w-full flex justify-center mb-4 lg:mb-0">
            <img 
              src={img1} 
              alt="" 
              className=" group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] leading-tight md:leading-normal lg:leading-[267%] text-[#263238] group-hover:text-[#37474f]">
              {t("skills.skillsTitle1")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-3">
              {t("skills.skillsparagraph")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm hover:bg-[#37474f] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mt-2 w-full sm:w-auto">
              {t("skills.button")}
            </button>
          </div>
        </div>

        <div className="h-auto lg:h-132.75 flex flex-col justify-between bg-[#f5f5f5] p-4 md:p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#eeeeee] group">
          <div className="w-full flex justify-center mb-4">
            <img 
              src={img2} 
              alt="" 
              className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-1">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] leading-tight md:leading-normal lg:leading-[267%] text-[#263238] group-hover:text-[#37474f]">
              {t("skills.skillsTitle2")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-2 md:line-clamp-3">
              {t("skills.skillsparagraph2")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm hover:bg-[#37474f] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mt-2 w-full sm:w-auto">
              {t("skills.button")}
            </button>
          </div>
        </div>

        <div className="h-auto lg:h-132.75 flex flex-col justify-between bg-[#f5f5f5] p-4 md:p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#eeeeee] group">
          <div className="w-full flex justify-center mb-4">
            <img 
              src={img3} 
              alt="" 
              className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-1">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] leading-tight md:leading-normal lg:leading-[267%] text-[#263238] group-hover:text-[#37474f]">
              {t("skills.skillsTitle3")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-2 md:line-clamp-3">
              {t("skills.skillsparagraph3")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm hover:bg-[#37474f] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mt-2 w-full sm:w-auto">
              {t("skills.button")}
            </button>
          </div>
        </div>
        <div className="h-auto lg:col-span-2 bg-[#f5f5f5] lg:col-end-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#eeeeee] group">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-3 p-4 md:p-3">
            <div className="flex flex-col items-start justify-between gap-2 md:gap-1 order-2 lg:order-1">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] leading-tight md:leading-normal lg:leading-[267%] text-[#263238] group-hover:text-[#37474f]">
                {t("skills.skillsTitle4")}
              </h2>
              <p className="font-normal text-sm md:text-base text-[#8f95a5]">
                {t("skills.skillsparagraph4")}
              </p>
              <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm hover:bg-[#37474f] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mt-2 w-full sm:w-auto">
                {t("skills.button")}
              </button>
            </div>
            <div className="w-full flex justify-center order-1 lg:order-2">
              <img 
                src={img4} 
                alt="" 
                className="w-full h-auto max-h-48 md:max-h-56 lg:max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;