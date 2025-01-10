import React from 'react';
import RE from '../assets/img/serv.png'
import { useTranslation } from 'react-i18next';

const Contact = () => {
     const { t } = useTranslation();
  return (
    <section className="container">
      <div className="container  flex flex-col lg:flex-row items-center gap-12">
        
       
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={RE} 
            alt="Contact Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>

       
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{t("about.title")}</h2>
          
          <p className="text-gray-500 leading-relaxed">
           {t("about.paragraph")}
          </p>

         
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t("about.inputPlaceholder")}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {t("about.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;