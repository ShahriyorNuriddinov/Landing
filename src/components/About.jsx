import React from "react";
import img from "../assets/img/about.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="container flex items-center justify-between">
      <div className="w-[50%]">
        <h2 className="font-semibold text-5xl text-black leading-[167%]">
          {t("about.about")}
        </h2>
        <p className="font-normal text-xl text-[#8f95a5]">
          {t("about.aboutparagraph")}
        </p>
        <div className="grid grid-cols-3 w-[70%]">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246] leading-[167%]">
              800
            </p>
            <p className="font-normal textxl text-[#8f95a5]"> {t("about.aboutpupils")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246] leading-[167%]">
              18
            </p>
            <p className="font-normal textxl text-[#8f95a5]"> {t("about.aboutteachers")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246] leading-[167%]">
              6
            </p>
            <p className="font-normal textxl text-[#8f95a5]"> {t("about.aboutlang")}</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default About;
