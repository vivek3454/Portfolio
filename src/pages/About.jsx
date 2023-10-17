import React from "react";
import { AiFillProject } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import myResume from "../assets/myResume.pdf";
import aboutGif from "../assets/images/aboutGif.gif";

const About = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-8 flex-col lg:flex-row mt-10">
        <div>
          <div
            className="bg-[#232d38] max-w-sm p-2 shadow-lg rounded-xl shadow-gray-900">
            <img src={aboutGif} className="w-full rounded-lg" alt="Home" />
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
              <p>6+</p>
              <p>Months development experience</p>
            </div>
            <div className="w-52 h-36 bg-[#232d38] flex flex-col gap-2 p-4 rounded-md">
              <MdVerified size={25} />
              <p>1</p>
              <p>Month internship experience</p>
            </div>
          </div>
          <p className="mb-2">
            I am a fast learner with a strong passion for front-end development and a focus on creating efficient and user-friendly web applications. I am seeking an opportunity to work in a collaborative environment where I can further enhance my skills and contribute to meaningful projects.
          </p>
          <p>
            I am open to internships, entry-level positions, or any opportunity that allows me to grow as a React developer. I am a dedicated team player, eager to learn from experienced professionals and contribute to the success of the organization.
          </p>
          <p>
            If you have an opportunity that aligns with my skills and passion, I would be thrilled to discuss how I can contribute to your team. Thank you for considering my profile.
          </p>
          <a href={myResume} download="myResume" className="px-8 py-2 mt-5 flex justify-center items-center gap-2 w-60 bg-[#232d38] hover:bg-white hover:text-black border border-gray-700 rounded-full">Download Resume <BsFillArrowDownCircleFill /></a>
        </div>
      </div>
    </section>
  );
};

export default About;