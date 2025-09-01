import type React from "react";
import { useContext, createContext, useState } from "react";

interface NavType {
  activeNav: "about" | "resume" | "contacts";
  activateNav: (data: "about" | "resume" | "contacts") => void;
}

interface NavContextProps {
  children: React.ReactNode;
}

export const navContext = createContext<NavType>({
  activeNav: "about",
  activateNav: (data: "about" | "resume" | "contacts") => {},
});

export const NavProvider: React.FC<NavContextProps> = ({ children }) => {
  const [activeNav, setActiveNav] = useState<"about" | "resume" | "contacts">(
    "about"
  );
  const activateNav = (data: "about" | "resume" | "contacts") =>
    setActiveNav(data);
  return (
    <navContext.Provider value={{ activeNav, activateNav }}>
      {children}
    </navContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(navContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
