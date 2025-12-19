import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/eng";
import uz from "../locales/uzb";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz }
    },
    lng: "uz",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
