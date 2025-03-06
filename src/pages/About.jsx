import { AiFillProject } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import aboutGif from "../assets/images/Developer.gif";
import myResume from "../assets/myResume.pdf";

const About = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-8 flex-col lg:flex-row mt-10">
        <div>
          <div className="bg-[#232d38] max-w-sm rounded-xl">
            <img src={aboutGif} className="w-full rounded-lg" alt="Developer" />
          </div>
        </div>
        <div className="max-w-2xl">
          <div className="mb-5 flex gap-5 flex-wrap max-[436px]:justify-center">
            <div className="w-52 h-36 bg-[#232d38] flex flex-col gap-2 p-4 rounded-md">
              <AiFillProject size={25} />
              <p>40+</p>
              <p>Projects created</p>
            </div>
            <div className="w-52 h-36 bg-[#232d38] flex flex-col gap-2 p-4 rounded-md">
              <MdVerified size={25} />
              <p>16+</p>
              <p>Months development experience</p>
            </div>
            <div className="w-52 h-36 bg-[#232d38] flex flex-col gap-2 p-4 rounded-md">
              <MdVerified size={25} />
              <p>Currently</p>
              <p>Working as a Full-Stack Developer</p>
            </div>
          </div>
          <p className="mb-2">
            I am a <strong>Full-Stack Developer</strong> with{" "}
            <strong>16+ months</strong> of experience, primarily focusing on
            front-end development. I specialize in building{" "}
            <strong>scalable, high-performance web applications</strong> with
            modern technologies.
          </p>
          <p className="mb-2">
            My expertise includes{" "}
            <strong>React.js, Next.js, Tailwind CSS, and TypeScript</strong> for
            the front end, along with <strong>Node.js and MongoDB</strong> for
            the back end. I have experience working on production-level
            applications, collaborating with teams, and writing clean,
            maintainable code.
          </p>
          <p>
            I am passionate about front-end development, UI/UX design, and
            optimizing web performance. While I am currently working in a
            company, I am always open to networking and exploring exciting
            opportunities that align with my skills.
          </p>
          <a
            href={myResume}
            download="Vivek_Resume.pdf"
            className="px-8 py-2 mt-5 flex justify-center items-center gap-2 w-60 bg-[#232d38] hover:bg-white hover:text-black border border-gray-700 rounded-full"
          >
            Download Resume <BsFillArrowDownCircleFill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
