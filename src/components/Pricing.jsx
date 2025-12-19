import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../assets/img/pricing.png";
import img2 from "../assets/img/pricing2.png";
import img3 from "../assets/img/pricing3.png";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-[48px] text-black mb-6 md:mb-8 lg:mb-12">
        {t("pricing.pricing")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col justify-between">
          <img src={img1} alt="Self study course" className="h-60 object-contain" />

          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.pricingtitle")}
            </h2>

            <p className="text-xl text-[#8f95a5]">
              {t("pricing.pricingparagraph")}
            </p>

            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £5.99
              </span>
              {t("pricing.prisingper")}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <img src={img2} alt="Live online classes" className="h-60 object-contain" />

          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.pricingtitle2")}
            </h2>

            <p className="text-xl text-[#8f95a5]">
              {t("pricing.pricingparagraph2")}
            </p>

            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £5.99
              </span>
              {t("pricing.prisingper")}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img src={img3} alt="Personal coaching" className="h-60 object-contain" />

          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.pricingtitle3")}
            </h2>

            <p className="text-xl text-[#8f95a5]">
              {t("pricing.pricingparagraph3")}
            </p>

            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £5.99
              </span>
              {t("pricing.prisingper")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
