import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  altcampus,
  blursocial,
  canvas,
  carrent,
  forum,
  nyota,
  asma,
  jobit,
  tripguide,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: mobile,
  },

  {
    title: "Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Alt Campus",
    icon: altcampus,
    iconBg: "#28B463 ",
    date: "Aug 2020 - Jan 2021",
    points: [
      "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.",
      "Sketching and Designing user interaction and landing page.",
      "Collaborated with stakeholders during development processes to confirm creative proposals.",
      "Developed APIs and integrated them with modular code.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Blur Social",
    icon: blursocial,
    iconBg: "#F8F9F9",
    date: "Feb 2021 - Dec 2021",
    points: [
      "Redesigned user interaction flow to optimize functionality.",
      "Lead development from scratch to production.",
      "Implemented OAuth, designed and developed APIs.",
      "Integrated Stripe for payments , Customized Quill.js editor with standard editing tools.",
      "Developed rich features such as Fan Subscriptions, Feed Pages with Infinite Scroll, and Nearby Artist/Fan search.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Canvas Space",
    icon: canvas,
    iconBg: "#D4EFDF",
    date: "Jan 2022 - Aug 2023",
    points: [
      "Managed development from initial steps through final delivery.",
      "Refactored legacy code and created modular components.",
      "Integrated draft.js for editor, mail-chimp for audience connection and waveusurfer.js for audio interaction.",
      "Implemented micro-monetisation features for text, images, and audio, resulting in revenue growth for the platform.",
      "Focused on optimizing app performance to deliver a seamless user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nyota Design",
    description:
      "Web-based platform that enables users to browse, select, and personalize wedding invitation videos to announce their special day digitally.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: nyota,
    source_code_link: "https://github.com/ashikraj78/nyotaShopFE",
  },
  {
    name: "Gate AR Forum",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: forum,
    source_code_link: "https://github.com/ashikraj78/gateARForum",
  },
  {
    name: "Aasmadhar",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: asma,
    source_code_link: "https://github.com/ashikraj78/gateARForum",
  },
];

export { services, technologies, experiences, testimonials, projects };
