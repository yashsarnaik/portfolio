import { FaYoutube,FaLinkedin } from "react-icons/fa";
import { FaXTwitter,FaSnapchat  } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/yashsarnaik23/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/yash-sarnaik-31153a284/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://x.com/Yash_Sarnaik23",
  },
  {
    name: "Twitter",
    icon: FaSnapchat,
    link: "https://www.snapchat.com/add/sarnaik1023?share_id=7KuIaoFjEgs&locale=en-GB",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Alzheimer's prediction using deep learning",
    description:
      "An innovative machine learning system designed to predict early-onset Alzheimer disease using MRI brain scans and achieving 98% accuracy through a combination of deep learning and traditional ML techniques. The backend is built with Python and uses  for the deep learning pipeline, while the frontend employs Streamlit for an intuitive medical interface. The system processes brain MRI scans through a sophisticated preprocessing pipeline before feeding them into a modified Efficient B-3 architecture.Deployed using HuggingFace Streamlit space.",
    image: "/projects/Alzheimer.png",
    link: "https://example.com",
  },
  {
    title: "Chatbot using llama-3 ,Mistral and Gemma",
    description:
      "An advanced multi-model chatbot platform that leverages Langchain for seamless orchestration between different language models including Llama-3, Gemma, and Mistral, accessed through HuggingFace's inference API. The interactive interface is built using Streamlit, featuring real-time model switching capabilities and conversation history tracking, while maintaining a clean and intuitive user experience. The entire application is deployed on HuggingFace Spaces for easy accessibility and scalability, allowing users to compare responses across different models and benefit from each model's unique strengths in natural language processing",
    image: "/projects/llama.png",
    link: "https://huggingface.co/spaces/yashsarnaik23/llama3_chatbot",
  },
  {
    title: "Portfolio using HTML & CSS ",
    description:
      "A clean and responsive portfolio website showcasing my professional journey and projects, built using pure HTML5, CSS3, and vanilla JavaScript without any additional frameworks. The site features a modern design with smooth scroll animations, dynamic project cards, and an interactive contact form, all styled using custom CSS with a focus on mobile-first responsiveness. The portfolio is hosted on Streamlit through GitHub integration, making it easily accessible and maintainable through version control, while the minimal tech stack ensures fast loading times and broad browser compatibility.",
    image: "/projects/portfolio.png",
    link: "https://yashsarnaik.streamlit.app/",
  },    

  
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/yashsarnaik",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/yashsarnaik23",
      },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://x.com/Yash_Sarnaik23",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/yash-sarnaik-31153a284/",
      },
    ],
  },
  {
    title: "About",
    data: [

      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:yashsarnaik2303@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};



