export const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        donate: "Donate",
        welcome: "Welcome to Turkana Tech Youths Hub",
        mission: "Our Mission",
        vision: "Our Vision",
        coreValues: "Core Values",
        partners: "Our Partners",
        activities: "Activities",
        awards: "Awards & Grants",
    },
    sw: {
        home: "Nyumbani",
        about: "Kuhusu",
        services: "Huduma",
        contact: "Mawasiliano",
        donate: "Changia",
        welcome: "Karibu kwenye Turkana Tech Youths Hub",
        mission: "Dhamira Yetu",
        vision: "Maono Yetu",
        coreValues: "Maadili Yetu",
        partners: "Wadau Wetu",
        activities: "Shughuli",
        awards: "Tuzo na Misaada",
    },
};

export const getTranslation = (language, key) => {
    return translations[language]?.[key] || key;
};
