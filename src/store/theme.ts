import { writable } from "svelte/store";

export type Theme = "light" | "dark";

export const theme = writable<Theme>("light");
export const toggleTheme = () => {
  theme.update((current) => {
    return current === "light" ? "dark" : "light"
  })

  theme.subscribe(reflectThemePreference)
}