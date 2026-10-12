import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enNotFound from './locales/notFound/en.json';
import nlNotFound from './locales/notFound/nl.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                notFound: enNotFound,
            },
            nl: {
                notFound: nlNotFound,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;