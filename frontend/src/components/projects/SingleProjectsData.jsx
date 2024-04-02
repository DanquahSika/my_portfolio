// Import images
import Image1 from "../../assets/images/ui-project-1.jpg";
import Image2 from "../../assets/images/web-project-2.jpg";
import Image3 from "../../assets/images/mobile-project-2.jpg";
import Image4 from "../../assets/images/mobile-project-1.jpg";
import Image5 from "../../assets/images/web-project-1.jpg";
import Image6 from "../../assets/images/ui-project-2.jpg";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "Project Management UI",
    publishDate: "Jul 26, 2021",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://company.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "TailwindCSS",
          "AdobeXD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "As a web developer, one of the key project management challenges I often encounter is balancing client expectations with technical feasibility within project timelines. This involves effectively communicating project scope, managing scope creep, and ensuring alignment between stakeholders while also navigating the dynamic landscape of technology",
      },
      {
        id: 2,
        details:
          "Advancements and potential roadblocks. Additionally, coordinating tasks among team members, addressing unforeseen issues promptly, and maintaining a flexible approach to adapt to changing requirements are critical aspects in successfully delivering high-quality web projects",
      },
      {
        id: 3,
        details:
          " Advancements and potential roadblocks. Additionally, coordinating tasks among team members, addressing unforeseen issues promptly, ....?",
      },
      {
        id: 4,
        details: "",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Image4,
      },
      {
        id: 2,
        title: "Web Application",
        img: Image5,
      },
      {
        id: 3,
        title: "UI Design",
        img: Image6,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Image3,
      },
    ],
  },
};
