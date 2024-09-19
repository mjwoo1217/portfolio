import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate full-stack developer and have been a developer for 3 years I currently work for a company that provides monitoring services and work with several clients The main languages I use for development are Java and JavaScript I can do back-end and front-end work, but I can also use basic Vue and Phython I can provide reliable communication and high-quality code.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including java, javascript, vue.js, MySQL and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "junior Developer",
    company: "Mini Soft.",
    description: `I worked on the Construction Monitoring Program. Implemented RESTful APIs and integrated with  databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Java","Spring","Javascript", "Postgresql"],
  },
  {
    year: "2020 - 2022",
    role: "Web Developer",
    company: "Solin System",
    description: `Maintains and develops secure mail system programs for public institutions and universities. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Node.js","Vue.js","Mysql"],
  }
];

export const PROJECTS = [
  {
    title: "Construction Monitoring Program",
    image: project1,
    description:
      "Dashboards and management programs for control",
    technologies: ["java", "javascript", "vue", "postgresql"],
  },
  {
    title: "security mail service",
    image: project3,
    description:
      "Development and maintenance of secure e-mails for public institutions and universities",
    technologies:["HTML/CSS", "Vue", "Node.js"],
  },
  {
    title: "find job (side project)",
    image: project2,
    description:
      "A site that collects employment information",
    technologies: ["java", "javascript", "Mysql"],

  },
];

export const CONTACT = {
  address: "210 Bangbae-ro, seoul",
  phoneNo: "+82 9648 9499",
  email: "mjwoo1217@gmail.com",
};
