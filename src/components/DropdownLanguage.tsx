"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const listLanguage = [
  { lang: "🇺🇸", value: "en" },
  { lang: "🇪🇸", value: "es" },
  { lang: "🇧🇷", value: "pt" },
];

export default function DropdownLanguage() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="fixed top-4 right-[10%] z-50">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as any)}
        className=" border border-gray bg-primary rounded-md px-1 py-1 text-xl focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        {listLanguage.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.lang}
          </option>
        ))}
      </select>
    </div>
  );
}