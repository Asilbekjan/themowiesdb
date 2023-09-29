import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "movie":"Movie",
      "welcome":"Welcome",
      "headdesc":"Millions of movies, TV shows and people to discover. Explore now.",
      'searchvall':'Search  for  a movie , tv show , person',
      'search':'search',
      'searchresult':'Search Results',
      "tv":"Tv shows",
      "pupil":"People",
      'searchCollection':'Collection',
      'searchKeywords':'Key words',
      'searchCompany':'Companies',
      'searchNetwork':'Networks',
      "more":"More",
      'Today':'Today',
      'Thisweek':'Thisweek',
      'OnTv':'OnTv',
      'Intheatre':'Inthearte'
    }
  },
  uz: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "movie":"Kino",
      "welcome":"Hush Kelibsiz",
      "headdesc":"Millionlab filmlar, teleko'rsatuvlar va kashf qilish uchun odamlar. Hozir oʻrganing.",
      'searchvall':'Film va telekorsatuvlarni qidiring',
      'search':'qidiruv',
      'searchresult':'Qidiruv natijalari',
      'searchMovie':'kino',
      "tv":"Tv Ko'rsatuvlar",
      "pupil":"Odamlar",
      "more":"Ko'proq",
      'searchCollection':'Toplamlar',
      'searchKeywords':'Kalit sozlar',
      'searchCompany':'Kampaniyalar',
      'searchNetwork':'Tarmoqlar',
      'Today':'Bugun',
      'Thisweek':'Shu hafta',
      'OnTv':'Tvda',
      'Intheatre':'Teatrda'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;