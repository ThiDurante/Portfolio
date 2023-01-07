import { useMemo } from "react";
import portfolioContext from "./portfolioContext";

export default function PortfolioProvider({ children }) {
  const value = useMemo(() => ({}), []);
  return (
    <portfolioContext.Provider value={value}>
      <div>{children}</div>
    </portfolioContext.Provider>
  );
}
