import React, { useContext, createContext, useState } from "react";

interface ThemeContextType {
  myTheme: "light" | "dark";
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
  myTheme:'dark',
  toggleTheme:()=>{}
}
);

export const MyThemeProvider:React.FC<ThemeContextProps> = ({ children }) => {
  const [myTheme, setMyTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () =>
    setMyTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ myTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
