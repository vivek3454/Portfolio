import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpg";

const Home = () => {
  return (
    <section className="flex justify-between items-center h-[87vh]">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl">Hi I&apos;m Vivek Parde</h1>
        <p className="text-2xl">Full Stack Developer</p>
        <p className="max-w-lg text-[#9a9191]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat repellat officia eum, sed laudantium necessitatibus aspernatur explicabo nemo molestias eius tenetur harum sapiente, magnam impedit debitis itaque commodi earum?</p>
        <div className="flex gap-2 mt-6">
          <button className="px-8 py-2 bg-red-500 hover:bg-red-600 rounded-full">Hire me</button>
          <Link to={"/projects"} className="px-8 py-2 bg-[#2a2a2a] hover:bg-white hover:text-black border border-gray-700 rounded-full">My Work</Link>
        </div>
      </div>
      <div>
        <div
          className="bg-[#2a2a2a] max-w-2xl h-[500px] rounded-[90%_90%_45px_45px] p-2 shadow-lg shadow-gray-900">
          <img src={homeImg} className="w-full h-full rounded-[90%_90%_40px_40px]" alt="Home" />
        </div>
      </div>
    </section>
  );
};

export default Home;