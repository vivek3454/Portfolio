import React from "react";
import { motion } from "motion/react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-10">
      <div className="flex justify-center items-center min-h-[70vh]">
        <motion.div
          className="max-w-4xl flex flex-wrap  gap-5 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="w-32 bg-[#232d38] flex flex-col justify-between p-3 pb-2 shadow-md shadow-black/50 rounded-md cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.1,
                rotate: -5,
                // backgroundColor: "rgba(30, 58, 138, 1)", // Sky-900 color
                // boxShadow: "0px 8px 20px rgba(30, 58, 138, 0.5)", // Glowing effect
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="img-box">
                <img src={skill.img} className="w-full h-28 object-contain" alt={skill.name} />
              </div>
              <motion.p
                className="text-center"
                whileHover={{ color: "#38bdf8" }} // Sky-400 text color
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
