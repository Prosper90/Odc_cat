import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enBuy from './locales/en/buy.json';
import enFaq from './locales/en/faq.json';
import enLayers from './locales/en/layers.json';

import zhCommon from './locales/zh/common.json';
import zhHero from './locales/zh/hero.json';
import zhBuy from './locales/zh/buy.json';
import zhFaq from './locales/zh/faq.json';
import zhLayers from './locales/zh/layers.json';

import koCommon from './locales/ko/common.json';
import koHero from './locales/ko/hero.json';
import koBuy from './locales/ko/buy.json';
import koFaq from './locales/ko/faq.json';
import koLayers from './locales/ko/layers.json';

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        hero: enHero,
        buy: enBuy,
        faq: enFaq,
        layers: enLayers,
      },
      zh: {
        common: zhCommon,
        hero: zhHero,
        buy: zhBuy,
        faq: zhFaq,
        layers: zhLayers,
      },
      ko: {
        common: koCommon,
        hero: koHero,
        buy: koBuy,
        faq: koFaq,
        layers: koLayers,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;