import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "motion/react";
import { FaLaptopCode, FaReact } from "react-icons/fa";

const ExperienceTimeline = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <VerticalTimeline>

                {/* Full-Time Experience */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#232d38", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #232d38" }}
                    date="Nov 2023 - Present"
                    iconStyle={{ background: "#38bdf8", color: "#fff" }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">Software Development Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Easesmith</h4>
                    <p>
                        Developing <strong>frontend & backend applications</strong> using <strong>React, Node.js, Express.js, MongoDb, Tailwind CSS, Shadcn UI</strong>.
                        Contributing to <strong>scalable web projects</strong> in a professional environment.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#232d38", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #232d38" }}
                    date="May 2023 - Nov 2023"
                    iconStyle={{ background: "#38bdf8", color: "#fff" }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">React.js Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">AI Hubs</h4>
                    <p>
                        Worked on the <strong>UI development</strong> of AI-based platforms using <strong>React.js and Tailwind CSS</strong>.
                        Designed and implemented <strong>responsive user interfaces</strong> to enhance user experience.
                        Integrated <strong>React components</strong> and improved <strong>frontend performance</strong> for AI applications.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </motion.div>
    );
};

export default ExperienceTimeline;
