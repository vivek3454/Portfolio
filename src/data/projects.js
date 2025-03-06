import ReactBlogImg from "../assets/images/react-blog.png";
import ReelsPro from "../assets/images/reels-pro.png";
import beyondCode from "../assets/images/beyondCode.png";
import Codeswear from "../assets/images/codeswear.png";
import HuntingCoder from "../assets/images/hunting-coders.png";
import Todo from "../assets/images/mern-todo.png";

export const projects = [
    {
        name: ".Blog",
        img: ReactBlogImg,
        desc: "User authentication, create, edit, and delete posts, share posts, add or remove posts from favorites, and toggle between light and dark themes.",
        demo: "https://react-blog-snowy.vercel.app/",
        github: "https://github.com/vivek3454/react-blog",
        category: "react",
        techStack: "HTML, CSS, JavaScript, React.js, Redux"
    },
    {
        name: "Reels Pro",
        img: ReelsPro,
        desc: "User registration, login, and logout with NextAuth. Watch and upload videos using ImageKit.",
        demo: "https://reels-pro-p81h.vercel.app/",
        github: "https://github.com/vivek3454/reels-pro",
        category: "next",
        techStack: "HTML, CSS, JavaScript, React.js, Tailwind CSS, Next.js, ImageKit, NextAuth"
    },
    {
        name: "BeyondCode",
        img: beyondCode,
        desc: "A personal learning documentation platform where users can explore coding resources, while admins can add and manage content dynamically. Features include rich text editing, admin authentication, a dynamic sidebar, content management, and dark/light mode",
        demo: "https://beyond-code-lowq.vercel.app/",
        github: "https://github.com/vivek3454/BeyondCode",
        category: "next",
        techStack: "HTML, CSS, JavaScript, React.js, Tailwind CSS, Next.js, NextAuth, TipTap, Framer motion"
    },
    {
        name: "Codeswear",
        img: Codeswear,
        desc: "E-commerce platform with user authentication, password recovery, profile management, order history, shopping cart, category-based product pages, payment gateway integration, and an admin dashboard for product management.",
        demo: "https://codes-wear-kohl.vercel.app/",
        github: "https://github.com/vivek3454/codes-wear",
        category: "next",
        techStack: "HTML, CSS, JavaScript, React.js, Next.js"
    },
    {
        name: "Hunting Coders",
        img: HuntingCoder,
        desc: "A clean and visually appealing blog platform with a responsive layout, custom navigation, homepage, full blog post reading experience, and a contact form for user interactions.",
        demo: "https://hunting-coder-next-js.netlify.app/",
        github: "https://github.com/vivek3454/hunting-coders",
        category: "next",
        techStack: "HTML, CSS, JavaScript, React.js, Next.js"
    },
    {
        name: "Todo",
        img: Todo,
        desc: "A full-stack task management application with user authentication, profile updates, task creation, updates, deletion, completion tracking, and categorized task views (All, Completed, Pending).",
        demo: "https://todoblocks.netlify.app/",
        github: "https://github.com/vivek3454/MERN-Todo",
        category: "mern",
        techStack: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB"
    },
    {
        name: "LMS",
        img: "https://camo.githubusercontent.com/b5068bb198d8311aae691edb00503a3ea95d850bd7315c0c60c6f1230958c5f4/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64746f656978766e6f2f696d6167652f75706c6f61642f76313639363538303739342f64616b6d6a786164306868746b777939373431622e706e67",
        desc: "A modern Learning Management System (LMS) with user authentication, profile management, course creation and management for admins, lecture uploads, subscription-based access, and video streaming with lecture descriptions.",
        demo: "https://modern-lms.netlify.app/",
        github: "https://github.com/vivek3454/LMS---learning-management-system",
        category: "mern",
        techStack: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB"
    }
];
