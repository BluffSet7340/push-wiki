import { createContext, ReactNode, useEffect, useState } from "react";

// defines a type Theme that can only take 3 values
type Theme = "light" | "dark" | "system";

type ThemeContextProviderProps = {
  children: ReactNode;
  // chidlren, anything that is renderable by react, wrap other components inside the provider
};

type ThemeContextType = {
  theme: Theme; // any one of three values
  toggleTheme: () => void; // no arguments, returns void
};

// within createContext, TS knows that shape the Context value with have
export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const storagedTheme = null;
    // localStorage.getItem("theme");

    // pass in a key to get the associated value

    // if it does not exist default to system
    return (storagedTheme ?? "system") as Theme;
  });

  // runs when the currentTheme changes
  useEffect(() => {
    // localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  // since I am using three conditions
  function toggleTheme() {
    setCurrentTheme((): Theme => {
      if (currentTheme === "system") {
        return "light";
      } else if (currentTheme === "dark") {
        return "light";
      }
      return "dark";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
