"use client";

import classNames from "classnames";
import { createContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function AppLayout({ children }: Props) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark";

    if (localTheme !== null) {
      setTheme(localTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  if (theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
      <main
        className={classNames("w-screen h-screen flex flex-col", {
          "bg-[#FFFAFA]": theme === "light",
          "bg-slate-800 text-white": theme === "dark",
        })}
      >
        <div className="h-full w-[90%] mx-auto flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}
