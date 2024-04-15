
import image from "../assets/fire.png";
import solar from "../assets/solar.gif";
import polygon from "../assets/polygon.png";
import comx from "../assets/com-x.png";
import xpert from "../assets/xpert.png";
import sdash from "../assets/sdash.png";
import portfoliox from "../assets/portfoliox.png";

export const experience = [
  { id:1,skill: "HTML", level: "Experienced" },
  {id:2, skill: "CSS", level: "Experienced" },
  {id:3,
    skill: "Bootstrap",
    level: "Experience",
  },
  {id:4,
    skill: "Tailwind css",
    level: "Experienced",
  },
  { id:5, skill: "Styled-component", level: "Experienced" },
  {id:6,
    skill: "Javascript",
    level: "Experienced",
  },
  { id:7,skill: "Typescript", level: "Intermediate" },
  {id:8, skill: "Reactjs", level: "Experienced" },
  { id:9,skill: "Next Js", level: "Experienced" },
  {id:10,skill:'Git/Github',level:'Experienced'},
  { id:11,skill: "Redux", level: "Basics" },
];

export const officeSkills= [
  'Ms word', 'Ms Powerpoint', 'Ms excel', 'Google workspace', 'Microsoft workspace'
]
export const project = [
  {
    id:8,
    imageSrc: sdash,
    hostedLink:'https://sdash-ebon.vercel.app/',
    title:'Smart Transanctions',
    description:'A dashboard for smart transanctions with iternationalization features also included.',
    tools:['Typescript','Next', 'Tailwind'],
    repo:' https://github.com/abiodunbusari/sdash.git',
    collaboration:'Personal Project'
  },
  {
    id: 5,
    imageSrc: xpert,
    hostedLink: "https://expert-card.vercel.app/",
    title: "Xpert Cards",
    description:
      "Create stylish, customizable and QR code supported digital business cards for Xperts",
    tools: ["Next js", "Typescript", "Tailwind"],
    repo: "https://github.com/hafsat-max/Expert-card",
    collaboration: "Featured Project",
  },
 {
    id:9,
    imageSrc: portfoliox,
    hostedLink:'https://www.greenbuildersltd.com/',
    title:'Green Builders Limited',
    description:'A real estate construction and development website.',
    tools:['React', 'Typescript', 'Styled components'],
    repo:'https://www.greenbuildersltd.com/',
    collaboration:'Personal Project'
  },
 {
    id:7,
    imageSrc: portfoliox,
    hostedLink:'https://portfolio-x-rho.vercel.app/dashboard',
    title:'Portfolio-x',
    description:'A financial wallet system built to track expenses, cash inflow, and outflow across board.',
    tools:['Next js', 'Typescript', 'Tailwind'],
    repo:'https://github.com/hafsat-max/portfolio-x',
    collaboration:'Personal Project'
  },
  {
    id: 1,
    imageSrc: comx,
    hostedLink: "https://comx-dashboard.netlify.app/",
    title: "Com X",
    description: "is a comapny's market trade dashboard.",
    tools: ["javascript", "Tailwind"],
    repo: "https://github.com/hafsat-max/Com-X",
    collaboration: "Personal Project",
  },
  {
    id: 2,
    imageSrc: image,
    hostedLink: "https://nippy-response.vercel.app/",
    title: "Nippy Response",
    description:
      "is a project inspired by the need for urgent response during an emergency to save lives.",
    tools: ["Typescript", "Javascript", "Tailwind"],
    repo: "https://github.com/hafsat-max/Nippy-Response",
    collaboration: "Personal Project",
  },
  {
    id: 3,
    imageSrc: polygon,
    hostedLink: "https://matic-lotto.netlify.app/",
    title: " Matic Lotto",
    description:
      " is a web based platform that is conventionally ruled and autonomously operated by a smart contract.",
    tools: ["Javascript", "HTML", "CSS"],
    repo: "https://github.com/hafsat-max/Matic-Lotto-NFTLottery",
    collaboration: "Featured Project",
  },
  {
    id: 4,
    imageSrc: solar,
    hostedLink: "https://solar-system-project-mu.vercel.app/",
    title: " Solar System",
    description:
      "is a project that is built to calculate the weight of any given mass in any planet, cool right!",
    tools: ["React", "Bootstrap", "Node"],
    repo: "https://github.com/hafsat-max/Solar-System-Project",
    collaboration: "Personal Project",
  },
];