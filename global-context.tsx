import { createContext, useMemo, useContext, useState, useEffect, ReactNode } from 'react'
import { useLocale } from "next-intl";

interface Locale {
  name: string;
  short: string;
}

interface GlobalContextType {
  locales: Locale[];
  locale: Locale | null;
  setLocales: (locales: Locale[]) => void;
  setLocale: (locale: Locale) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null)

interface GlobalProviderProps {
  initialLocales?: Locale[];
  children: ReactNode;
}

export const GlobalProvider = ({ initialLocales, children }: GlobalProviderProps) => {
  let localeValue = 'en';
  try {
    localeValue = useLocale();
  } catch (e) {
    // Fallback if useLocale is not available (shouldn't happen with NextIntlProvider)
    localeValue = 'en';
  }
  
  const [locales, setLocales] = useState<Locale[]>(initialLocales ?? [{"name":"English","short":"en"}])
  const [locale, setLocale] = useState<Locale | null>({"name":"English","short":"en"})
  
  useEffect(() => {
    if (!locales || !localeValue) {
      return
    }

    const currentLangValue = locales.find((el) => el.short === localeValue)
    if (currentLangValue) {
      setLocale(currentLangValue)
    }
  }, [locales, localeValue])

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale
    }
  }, [locales, locale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}