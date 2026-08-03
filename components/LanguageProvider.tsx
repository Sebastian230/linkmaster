"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({
  language: "es",
  setLanguage: () => undefined,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    let saved: Language = "es";
    try { saved = window.localStorage.getItem("language") === "en" ? "en" : "es"; } catch {}
    setLanguageState(saved);
    document.documentElement.lang = saved;
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    document.documentElement.lang = next;
    try { window.localStorage.setItem("language", next); } catch {}
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
