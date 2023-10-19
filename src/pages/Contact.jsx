import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({ firstname: "", lastname: "", email: "", message: "" });

  const handleOnChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!userInfo.firstname || !userInfo.lastname || !userInfo.email || !userInfo.message) {
      return toast.error("Please fill all fields");
    }
    toast.loading("Sending Message");
    try {
      await axios.post(import.meta.env.VITE_REACT_APP_BACKEND_URL, userInfo);
      toast.dismiss();
      toast.success("Message Sent Successfully!");
      setUserInfo({ firstname: "", lastname: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
    }
  };
  return (
    <section className="py-10">
      <div className="flex flex-col gap-10 justify-center items-center h-[75vh]">
        <form onSubmit={handleOnSubmit} className="max-w-3xl w-full" >
          <div className="w-full flex items-center flex-col md:flex-row gap-4">
            <input onChange={handleOnChange} value={userInfo.firstname} type="text" name="firstname" className="bg-[#232d38] hover:border-white focus:border-white transition-colors duration-200 py-2 px-3 rounded-md w-full md:w-[50%] border border-gray-700" placeholder="First name" />
            <input onChange={handleOnChange} value={userInfo.lastname} type="text" name="lastname" className="bg-[#232d38] hover:border-white focus:border-white transition-colors duration-200 py-2 px-3 rounded-md w-full md:w-[50%] border border-gray-700" placeholder="Last name" />
          </div>
          <input onChange={handleOnChange} value={userInfo.email} type="text" name="email" className="bg-[#232d38] hover:border-white focus:border-white transition-colors duration-200 py-2 px-3 rounded-md w-full mt-4 border border-gray-700" placeholder="Your email address" />
          <textarea onChange={handleOnChange} value={userInfo.message} type="text" name="message" className="bg-[#232d38] hover:border-white focus:border-white transition-colors duration-200 resize-none py-2 px-3 rounded-md w-full h-40 mt-4 border border-gray-700" placeholder="Message" />
          <button className="px-8 py-2 mt-4 bg-[#232d38] hover:border-transparent hover:bg-sky-500 transition-colors duration-200 border border-gray-700 rounded-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;