import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {

  return (
    <section className="py-10">
      <div className="mt-10">
        {
          projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;