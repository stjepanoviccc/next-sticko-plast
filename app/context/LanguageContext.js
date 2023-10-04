import { useState, useContext, createContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("SR");
    const languageChangeHandler = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage: languageChangeHandler }}>
            {children}
        </LanguageContext.Provider>
    )
};

export const useLanguageCtx = () => {
    return useContext(LanguageContext);
}

export default LanguageProvider;