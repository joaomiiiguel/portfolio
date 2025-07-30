"use client";
import { createContext, useContext, useState, ReactNode } from "react";
export type LocaleKey = "pt" | "es" | "en";

interface LanguageContextProps {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<LocaleKey>("pt");

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};