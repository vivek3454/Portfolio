import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-[320px] h-[500px] p-4 rounded-xl bg-[#232d38] shadow-md shadow-black/50">
            <img src={project.img} className="w-full h-[155px] cursor-pointer rounded-2xl" alt={project.name} />
            <h2 className="py-2 text-lg">{project.name}</h2>
            <p className="text-sm font-semibold">{project.desc}</p>
            <div className="flex pt-5">
                <h3 className="font-medium max-w-[100px] w-full text-sky-400">Tech Stack :</h3>
                <p className="ml-2 font-medium text-sm">{ project.techStack}</p>
            </div>
            <div className="pt-5 flex justify-center gap-5 items-center">
                {project.demo && <a href={project.demo} target="_blank" className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full" rel="noreferrer">Preview</a>}
               {project.github && <a href={project.github} target="_blank" className="px-6 py-2 bg-[#171e25] hover:bg-white hover:text-black border border-gray-700 rounded-full" rel="noreferrer">Github</a>}
            </div>
        </div>
    );
};

export default ProjectCard;