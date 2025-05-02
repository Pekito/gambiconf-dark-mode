import { writable } from "svelte/store";

export type Theme = "light" | "dark";

export const theme = writable<Theme>("light");

const LOCAL_STORAGE_KEY = "theme";

const getInitialTheme = (): Theme => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) return localStorage.getItem(LOCAL_STORAGE_KEY) as Theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
}

export const reflectThemePreference = (value: Theme) => {
  localStorage.setItem("theme", value)
  document.getElementsByTagName("body")[0].setAttribute('theme', value)
}

export const setInitialTheme = () => {
  const initialTheme = getInitialTheme();
  theme.set(initialTheme);
  reflectThemePreference(initialTheme);
}

export const toggleTheme = () => {
  theme.update((current) => {
    return current === "light" ? "dark" : "light"
  })

  theme.subscribe(reflectThemePreference)
}