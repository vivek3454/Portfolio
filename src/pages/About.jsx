import { AiFillProject } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import aboutGif from "../assets/images/Developer.gif";
import myResume from "../assets/viveks resume.pdf";
import { motion } from "motion/react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-8 flex-col lg:flex-row mt-10">

        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-[#232d38] max-w-sm rounded-xl">
            <img src={aboutGif} className="w-full rounded-lg" alt="Developer" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-2xl">
          {/* Animated Stats Cards */}
          <motion.div
            className="mb-5 flex gap-5 flex-wrap max-[436px]:justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              { icon: <AiFillProject size={25} />, title: "50+", desc: "Projects created" },
              { icon: <MdVerified size={25} />, title: "16+", desc: "Months development experience" },
              { icon: <FaLaptopCode size={25} />, title: "Currently", desc: "Working" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-52 h-36 bg-[#232d38] flex flex-col gap-2 p-4 rounded-md"
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              >
                {item.icon}
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>


          {/* Animated Paragraphs */}
          {[
            `I am a Full-Stack Developer with 16+ months of experience, primarily focusing on front-end development. I specialize in building scalable, high-performance web applications with modern technologies.`,
            `My expertise includes React.js, Next.js, Tailwind CSS for the front end, along with Node.js and MongoDB for the back end. I have experience working on production-level applications, collaborating with teams, and writing clean, maintainable code.`,
            `I am passionate about front-end development, UI/UX design, and optimizing web performance. While I am currently working in a company, I am always open to networking and exploring exciting opportunities that align with my skills.`
          ].map((text, index) => (
            <motion.p
              key={index}
              className="mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Animated Resume Download Button */}
          <motion.a
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            href={myResume}
            download="Vivek_Resume.pdf"
            className="px-8 py-2 mt-5 flex justify-center items-center gap-2 w-60 bg-[#232d38] hover:bg-white hover:text-black border border-gray-700 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume <BsFillArrowDownCircleFill />
          </motion.a>
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <ExperienceTimeline />
          </motion.div>
    </section>
  );
};

export default About;
