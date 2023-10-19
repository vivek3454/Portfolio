import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const [myProjects, setMyProjects] = useState([...projects]);
  const [currentCategory, setCurrentCategory] = useState("all");

  const handleFilter = (category) => {
    setCurrentCategory(category);
    if (category === "react") {
      const data = [...projects].filter((project) => project.category === "react");
      setMyProjects([...data]);
    }
    else if (category === "next") {
      const data = [...projects].filter((project) => project.category === "next");
      setMyProjects([...data]);
    }
    else if (category === "mern") {
      const data = [...projects].filter((project) => project.category === "mern");
      setMyProjects([...data]);
    }
    else if (category === "javascript") {
      const data = [...projects].filter((project) => project.category === "javascript");
      setMyProjects([...data]);
    }
    else {
      setMyProjects(projects);
    }
  };

  return (
    <section className="py-10">
      <div className="flex justify-center flex-wrap gap-2">
        <button onClick={() => handleFilter("all")} className={`px-8 py-2 bg-[#232d38] hover:bg-sky-600 rounded-full ${currentCategory === "all" ? "bg-sky-500" : "bg-[#232d38]"}`}>All</button>
        <button onClick={() => handleFilter("javascript")} className={`px-8 py-2 bg-[#232d38] hover:bg-sky-600 rounded-full ${currentCategory === "javascript" ? "bg-sky-500" : "bg-[#232d38]"}`}>Javascript</button>
        <button onClick={() => handleFilter("react")} className={`px-8 py-2 bg-[#232d38] hover:bg-sky-600 rounded-full ${currentCategory === "react" ? "bg-sky-500" : "bg-[#232d38]"}`}>React Js</button>
        <button onClick={() => handleFilter("next")} className={`px-8 py-2 bg-[#232d38] hover:bg-sky-600 rounded-full ${currentCategory === "next" ? "bg-sky-500" : "bg-[#232d38]"}`}>Next Js</button>
        <button onClick={() => handleFilter("mern")} className={`px-8 py-2 bg-[#232d38] hover:bg-sky-600 rounded-full ${currentCategory === "mern" ? "bg-sky-500" : "bg-[#232d38]"}`}>Mern</button>
      </div>
      <div className="mt-10 grid max-sm:place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          myProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;