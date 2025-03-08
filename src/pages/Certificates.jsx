import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImCross } from "react-icons/im";
import courseCertificate from "../assets/images/course-certificate.png";
import internshipCertificate from "../assets/images/internship-certificate.png";

const Certificates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [certificate, setCertificate] = useState("");

    const closeModal = () => setModalIsOpen(false);

    const openModal = (currentCertificate) => {
        setCertificate(currentCertificate);
        setModalIsOpen(true);
    };

    return (
        <section className="flex gap-6 justify-center flex-wrap items-center py-10 h-[87vh]">
            <motion.div
                onClick={() => openModal(courseCertificate)}
                className="max-w-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{
                    opacity: 0,
                    x: -100
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: .5 }}
            >
                <img src={courseCertificate} alt="Course Certificate" />
            </motion.div>
            <motion.div
                onClick={() => openModal(internshipCertificate)}
                className="max-w-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{
                    opacity: 0,
                    x: 100
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: .5 }}
            >
                <img src={internshipCertificate} alt="Internship Certificate" />
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {modalIsOpen && (
                    <motion.div
                        className="bg-black/80 z-20 fixed top-0 left-0 w-full h-screen flex justify-center items-center text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-4xl"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* <ImCross
                                className="absolute -top-0 -right-10 text-3xl cursor-pointer"
                                onClick={closeModal}
                            /> */}
                            <img src={certificate} className="w-full object-contain rounded-lg" alt="Certificate" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
