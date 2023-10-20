import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/images/home.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex justify-between items-center flex-col-reverse lg:flex-row gap-5 py-10 min-h-[87vh]">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl">Hi I&apos;m Vivek Parde</h1>
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            1000,
            "React Enthusiastic",
            1000,
            "Fast Learner",
            1000,
          ]}
          speed={40}
          className="text-2xl text-sky-400"
          repeat={Infinity}
        />
        <p className="max-w-lg text-[#9a9191]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat repellat officia eum, sed laudantium necessitatibus aspernatur explicabo nemo molestias eius tenetur harum sapiente, magnam impedit debitis itaque commodi earum?</p>
        <div className="flex gap-2 mt-6">
          <Link to={"/contact"} className="px-8 py-2 bg-sky-500 hover:bg-sky-600 rounded-full">Hire me</Link>
          <Link to={"/projects"} className="px-8 py-2 bg-[#232d38] hover:bg-white hover:text-black border border-gray-700 rounded-full">My Work</Link>
        </div>
      </div>
      <div>
        <div
          className="animate max-w-md overflow-hidden shadow-lg shadow-gray-900"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 36% 64% 70%" }}
        >
          <img src={homeImg} className="w-full h-full" alt="Home" />
        </div>
      </div>
    </section>
  );
};

export default Home;