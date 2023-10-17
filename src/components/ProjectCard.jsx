import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-[300px] p-4 rounded-xl bg-[#232d38] shadow-md shadow-black/50">
            <img src={project.img} className="w-full h-[150px] rounded-2xl" alt={project.name} />
            <h1 className="py-2 text-lg">{project.name}</h1>
            <p className="text-sm font-semibold">{project.desc}</p>
            <div className="pt-5 flex justify-center gap-5 items-center">
                <a href={project.demo} className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full">Preview</a>
                <a href={project.github} className="px-6 py-2 bg-[#171e25] hover:bg-white hover:text-black border border-gray-700 rounded-full">Github</a>
            </div>
        </div>
    );
};

export default ProjectCard;