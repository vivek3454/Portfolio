import React, { useState } from "react";
import courseCertificate from "../assets/images/course-certificate.png";
import internshipCertificate from "../assets/images/internship-certificate.png";
import { ImCross } from "react-icons/im";

const Certificates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [certificate, setCertificate] = useState("");

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openModal = (currentCertificate) => {
        setCertificate(currentCertificate);
        setModalIsOpen(true);
    };
    return (
        <section className="flex gap-6 justify-center flex-wrap items-center py-10 h-[87vh]">
            <div onClick={() => openModal(courseCertificate)} className="max-w-xl cursor-pointer">
                <img src={courseCertificate} alt="" />
            </div>
            <div onClick={() => openModal(internshipCertificate)} className="max-w-xl cursor-pointer">
                <img src={internshipCertificate} alt="" />
            </div>
            <div
                className={`bg-black/80 z-20 ${modalIsOpen ? "flex" : "hidden"} fixed top-0 left-0 w-full h-screen justify-center items-center text-white`}
            >
                <ImCross className="absolute top-2 right-5 text-3xl cursor-pointer" onClick={closeModal} />
                <div className="max-w-4xl">
                    <img src={certificate} className="w-full object-contain" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Certificates;