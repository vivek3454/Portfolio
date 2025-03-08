import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - 12,
                y: position.y - 12,
                scale: hovered ? 2 : 1,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
    );
};

export default CustomCursor;
