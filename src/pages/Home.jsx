import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/images/home.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const MotionLink = motion(Link); // Wrap Link with motion

const Home = () => {
  return (
    <section className="flex justify-between items-center flex-col-reverse lg:flex-row gap-5 py-10 min-h-[87vh]">
      {/* Text Content */}
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
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
        <div className="flex gap-2 mt-6">
          <MotionLink
            to="/contact"
            className="px-8 py-2 bg-sky-500 hover:bg-sky-600 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire me
          </MotionLink>
          <MotionLink
            to="/projects"
            className="px-8 py-2 bg-[#232d38] hover:bg-white hover:text-black border border-gray-700 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Work
          </MotionLink>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="animate max-w-md overflow-hidden shadow-lg shadow-gray-900"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 36% 64% 70%" }}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img src={homeImg} className="w-full h-full" alt="Home" />
      </motion.div>
    </section>
  );
};

export default Home;
