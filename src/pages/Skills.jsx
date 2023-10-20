import React from "react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-10">
      <div className="flex justify-center items-center h-[70vh]">
        <div className="max-w-4xl flex flex-wrap justify-center gap-5 mt-10">
          {skills.map((skill) => (
            <div key={skill.name} className="w-32 bg-[#232d38] hover:-rotate-3 hover:scale-105 transition-all flex flex-col justify-between p-3 pb-2 shadow-md shadow-black/50 duration-200 hover:text-sky-500 rounded-md">
              <div className="img-box">
                <img src={skill.img} className="w-full h-28 object-contain" alt={skill.name} />
              </div>
              <p className="text-center">{skill.name}</p>
            </div>
          ))
          }
        </div>
      </div>
    </section >
  );
};

export default Skills;