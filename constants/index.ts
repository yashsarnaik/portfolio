import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter,FaSnapchat  } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


export const SKILL_DATA = [
  {
    skill_name: "docker",
    image: "/skills/docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "huggingface",
    image: "/skills/huggingface.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "aws",
    image: "/skills/aws.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "gcp",
    image: "/skills/gcp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "qlik",
    image: "/skills/qlik.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "powerbi",
    image: "/skills/powerbi.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "tableau",
    image: "/skills/tableau.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "matplotlib",
    image: "/skills/matplotlib.png",
    width: 80,
    height: 80,
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
    skill_name: "streamlit",
    image: "/skills/streamlit.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "flask",
    image: "/skills/flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "langchain",
    image: "/skills/langchain.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "gunicorn",
    image: "/skills/gunicorn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "postman",
    image: "/skills/postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "python",
    image: "/skills/python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "fastapi",
    image: "/skills/fastapi.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "pytorch",
    image: "/skills/pytorch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "tensorflow",
    image: "/skills/tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "git",
    image: "/skills/git.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "github",
    image: "/skills/github.png",
    width: 80,
    height: 80,
  },

] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "numpy",
    image: "/skills/numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "pandas",
    image: "/skills/pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "/skills/firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "/skills/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "/skills/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "jupyter",
    image: "/skills/jupyter.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "vscode",
    image: "/skills/vscode.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "openai",
    image: "/skills/openai.png",
    width: 80,
    height: 80,
  },
] as const;







export const PROJECTS = [
  {
    title: "Alzheimer's prediction using deep learning",
    description:
      "An innovative machine learning system designed to predict early-onset Alzheimer's disease using MRI brain scans. Achieves 98% accuracy combining deep learning and traditional ML techniques. Backend: Python; Deep learning: TensorFlow; Frontend: Streamlit for intuitive medical interface.",
    image: "/projects/Alzheimer.png",
    link: "https://huggingface.co/spaces/yashsarnaik23/Alzheimer.detect",
  },
  {
    title: "Chatbot using llama-3, Mistral, and Gemma",
    description:
      "An advanced multi-model chatbot platform using Langchain for seamless orchestration between Llama-3, Gemma, and Mistral models via HuggingFace's inference API. Features real-time model switching and conversation history tracking in a clean, intuitive Streamlit interface, deployed on HuggingFace's Streamlit space.",
    image: "/projects/llama.png",
    link: "https://huggingface.co/spaces/yashsarnaik23/llama3_chatbot",
  },
  {
    title: "Portfolio using HTML & CSS",
    description:
      "A clean, responsive portfolio website showcasing my professional journey and projects. Built with HTML5, CSS3, and vanilla JavaScript. Features modern design, smooth scroll animations, dynamic project cards, and an interactive contact form. Styled with custom CSS for mobile-first responsiveness, hosted on Streamlit via GitHub.",
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
        name: "Explore more projects at HuggingFace",
        icon: null,
        link: "https://huggingface.co/yashsarnaik23"
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
    link: "#home",
  },
  
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title:"Experience",
    link: "#experience"
  },
  {
    title:"Education",
    link: "#education"
  },
  {
    title: "Projects",
    link: "#projects",
  },




] as const;





