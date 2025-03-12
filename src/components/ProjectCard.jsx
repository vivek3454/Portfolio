import { motion } from "motion/react";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"
                } max-lg:flex-col max-lg:items-center justify-between gap-5 mb-20`}
            initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} // Triggers every time
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                className="max-w-[600px] w-full h-[19rem] rounded-xl relative bg-[#232d38] shadow-md shadow-black/50 overflow-hidden"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px rgba(30, 41, 59, 0.4)",
                }}
            >
                <motion.img
                    src={project.img}
                    className="w-full h-full rounded-2xl transition-transform duration-500"
                    alt={project.name}
                    whileHover={{ scale: 1.03 }}
                />
            </motion.div>

            <div className="max-w-lg">
                <h2 className="py-2 text-lg">{project.name}</h2>
                <p className="text-sm font-semibold">{project.desc}</p>
                <div className="flex items-start pt-5">
                    <h3 className="font-medium max-w-[100px] w-full text-sky-400">
                        Tech Stack :
                    </h3>
                    <p className="-ml-1 font-medium text-sm">{project.techStack}</p>
                </div>
                <div className="pt-5 flex gap-5 items-center">
                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full transition-all relative overflow-hidden"
                            rel="noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Preview
                        </motion.a>
                    )}
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            className="px-6 py-2 bg-[#171e25] hover:bg-white hover:text-black border border-gray-700 rounded-full transition-all relative overflow-hidden"
                            rel="noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Github
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
