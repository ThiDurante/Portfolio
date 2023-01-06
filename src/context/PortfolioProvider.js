import { useMemo, useState } from "react";
import portfolioContext from "./portfolioContext";

export default function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const themeChanger = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const value = useMemo(
    () => ({
      theme,
      themeChanger,
    }),
    [theme]
  );
  return (
    <portfolioContext.Provider value={value}>
      <div>{children}</div>
    </portfolioContext.Provider>
  );
}
