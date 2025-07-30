
"use client";
import pt from "../../public/locales/pt-BR/commom.json";
import es from "../../public/locales/es/commom.json";
import en from "../../public/locales/en/commom.json";
import { useLanguage } from "@/context/LanguageContext";

export type LocaleKey = "pt" | "es" | "en";

// Tipo para objetos de tradução aninhados
export type TranslationObject = {
  [key: string]: string | TranslationObject;
};

const translations: Record<LocaleKey, TranslationObject> = {
  pt: pt,
  es: es,
  en: en,
};

export function useTranslation() {
  const { locale } = useLanguage();

  const currentLocale = locale || "pt";

  // Função recursiva para acessar valores aninhados
  const t = (path: string): string => {
    const parts = path.split(".");
    let value: string | TranslationObject =
      translations[currentLocale as LocaleKey];

    for (const part of parts) {
      if (typeof value === "string") return path; // Fallback se o caminho estiver incompleto
      value = value[part];
    }

    return typeof value === "string" ? value : path;
  };

  return t;
}
