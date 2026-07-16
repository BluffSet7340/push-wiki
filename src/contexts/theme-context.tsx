import { storage } from "@/storage/storage";
import { createContext, ReactNode, useEffect, useState } from "react";

// defines a type Theme that can only take 3 values
// need to export it for use in other functions
export type Theme = "light" | "dark" | "system";

type ThemeContextProviderProps = {
  children: ReactNode;
  // chidlren, anything that is renderable by react, wrap other components inside the provider
};

type ThemeContextType = {
  mode: Theme; // any one of three values
  setTheme: (theme: Theme) => void; // no arguments, returns void
};

// within createContext, TS knows that shape the Context value with have
export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>((): Theme => {
    const storagedTheme = storage.getString("theme") as Theme;

    return storagedTheme ? storagedTheme : "system";
  });

  // runs when the currentTheme changes
  useEffect(() => {
    storage.set("theme", currentTheme);
  }, [currentTheme]);

  // update theme accordingly
  function setTheme(newTheme: string) {
    setCurrentTheme(newTheme.toLocaleLowerCase() as Theme);
  }

  return (
    // broadcasts the current theme and the function to its children
    <ThemeContext.Provider value={{ mode: currentTheme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
