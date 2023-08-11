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
    psql,
    firebase,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cet,
    gsps,
    iswk,
    netflix,
    keeper,
    lidar,
    photohaven,
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "PSQL",
      icon: psql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "College of Engineering Trivandrum",
      company_name: "BTech in Computer Science",
      icon: cet,
      iconBg: "#383E56",
      date: "March 2020 - Current",
      points: [
        "Sixth semester ",
        "Current CGPA 9.2",
        
      ],
    },
    {
      title: "Good Shepherd Public School",
      company_name: "5-12",
      icon: gsps,
      iconBg: "#E6DEDD",
      date: "Jan 2013 - Feb 2020",
      points: [
        "Secured all A1 with 96.2% in 12th CBSE",
        "Secured all A1 with 97% in 10th CBSE",
        "Took Mathematics with Computer Science in 11th and 12th during which I exceled in C programming",
        
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
      name: "OpenLiDARX",
      description:
        "A software tool for LiDAR data parocessing and analysis",
      tags: [
        {
          name: "python",
          color: "text-orange-900",
        },
        {
          name: "PyQt",
          color: "text-indigo-800",
        },
        {
          name: "PyVista",
          color: "text-teal-950",
        },
      ],
      image:lidar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Photo Haven",
      description:
        "A MERN stack web application for posting pictures",
      tags: [
        {
          name: "ReactJS",
          color: "text-orange-900",
        },
        {
          name: "MongoDB",
          color: "text-indigo-800",
        },
        {
          name: "NodeJS",
          color: "text-teal-950",
        },
        {
          name: "ExpressJS",
          color: "text-teal-950",
        },
      ],
      image:photohaven,
      source_code_link: "https://github.com/",
    },
    {
      name: "Netflix Clone",
      description:
        "A clone of netflix where posters are obtained by API calling from TMDB website",
      tags: [
        {
          name: "ReactJS",
          color: "text-orange-900",
        },
        {
          name: "CSS",
          color: "text-indigo-800",
        },
        {
          name: "Rest-API",
          color: "text-teal-950",
        },
      ],
      image:netflix,
      source_code_link: "https://github.com/",
    },
    {
      name: "Keeper App",
      description:
        "Web application that enables users to keep add important notes and delete once finished doing the job.",
      tags: [
        {
          name: "ReactJS",
          color: "text-orange-900",
        },
        
        {
          name: "CSS",
          color: "text-teal-950",
        },
      ],
      image: keeper,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };