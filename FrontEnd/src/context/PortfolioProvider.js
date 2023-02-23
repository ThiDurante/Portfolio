import { useMemo } from "react";
import portfolioContext from "./portfolioContext";
import React, { useEffect, useState } from "react";

export default function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState("");
  // const [skills, setSkills] = useState("");

  useEffect(() => {
    const getAllProjects = async () => {
      const url = "http://127.0.0.1:3001/projects";
      const request = await fetch(url);
      const response = await request.json();
      return setProjects(response);
    };
    getAllProjects();
  }, []);

  console.log(projects);
  const value = useMemo(() => ({}), []);
  return (
    <portfolioContext.Provider value={value}>
      <div>{children}</div>
    </portfolioContext.Provider>
  );
}
