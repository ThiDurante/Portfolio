import React, { useContext } from "react";
import Header from "../components/Header";
import portfolioContext from "../context/portfolioContext";

export default function Home() {
  const { theme } = useContext(portfolioContext);
  console.log(theme);
  return (
    <div>
      <Header />
    </div>
  );
}
