import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LngDetector from "i18next-browser-languagedetector";
import translationEN from "../../assets/i18n/en.json";
// the translations
const resources = {
	en: {
		translation: translationEN,
	},
	
};
const options = {
	order: ["querystring", "navigator"],
	lookupQuerystring: "lng",
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LngDetector)
	.init({
		detection: options,
		resources,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
