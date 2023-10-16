import React from "react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center mb-1">My Skills</h2>
        <div className="w-16 mr-[70px] h-[2px] bg-red-500 relative">
          <div className="bg-red-500 w-[18px] h-3 absolute -top-1 right-0 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-4xl flex flex-wrap gap-5 mt-10">
          {skills.map((skill) => (
            <div key={skill.name} className="w-32 bg-[#2b2929] flex flex-col justify-between p-3 pb-2 shadow-md shadow-black/50  transition-colors duration-200 hover:text-red-500 rounded-md">
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