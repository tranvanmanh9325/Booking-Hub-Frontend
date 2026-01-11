import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Locale {
    name: string;
    short: string;
}

interface LocaleState {
    locales: Locale[];
    locale: Locale | null;
    setLocales: (locales: Locale[]) => void;
    setLocale: (locale: Locale) => void;
}

export const useLocaleStore = create<LocaleState>()(
    persist(
        (set) => ({
            locales: [{ name: "English", short: "en" }],
            locale: { name: "English", short: "en" },
            setLocales: (locales) => set({ locales }),
            setLocale: (locale) => set({ locale }),
        }),
        {
            name: 'locale-storage', // key in localStorage
        }
    )
);