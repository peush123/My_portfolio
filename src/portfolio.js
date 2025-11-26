/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Peush Kumar",
  title: "Hi all, I'm Peush Kumar",
  subTitle: emoji(
    "I am passionate and skilled Software Developer with a strong background in Java, Spring Boot, and REST API development, specializing in scalable backend systems, VoIP (Asterisk) integration, and performance optimization. Experienced in building microservices, integrating real-time communication systems, and deploying containerized applications for high availability and reliability. Dedicated to delivering efficient, secure, and maintainable solutions aligned with business and operational goals."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1yMq-KmXBBz3G9_YXCMo0XUD4q_yfWL1kQkzSHaSQ95Q/export?format=pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/peush-kumar-35b9571bb/",
  gmail: "pks.piyushks@gmail.com.com",
  Salesforce: "https://www.linkedin.com/in/peush-kumar-35b9571bb/",

  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  // 🔹 Languages
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code"
  },
  
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "OOPS",
    fontAwesomeClassname: "fas fa-cubes"
  },

  // 🔹 Backend
  
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-seedling"
  },
  {
    skillName: "REST API",
    fontAwesomeClassname: "fas fa-network-wired"
  },

  // 🔹 Frontend
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },

  // 🔹 Database
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf"
  },

  // 🔹 Tools
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Postman",
    fontAwesomeClassname: "fas fa-paper-plane"
  },
  {
    skillName: "Maven",
    fontAwesomeClassname: "fas fa-tools"
  },

  // 🔹 Operating Systems
  {
    skillName: "Windows",
    fontAwesomeClassname: "fab fa-windows"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },

  // 🔹 Cloud
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Salesforce",
    fontAwesomeClassname: "fas fa-cloud"
  }
],
display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ajay Kumar Garg Engineering College, Ghaziabad",
      logo: require("./assets/images/AKGEC.png"),
      subHeader: "Master of Computer Application",
      duration: "November 2022 – August 2024",
      desc: "Coursework included modern computing concepts and practical software design methodologies.",
      descBullets: [
        "OOP Concepts",
        "Artificial Intelligence and Machine Learning",
        "Software Engineering",
        "Database Management System (DBMS)",
        "Data Analytics"
      ]
    },
    {
      schoolName: "University of Delhi",
      logo: require("./assets/images/du.jpeg"),
      subHeader: "Bachelor of Science in Electronics",
      duration: "July 2017 – May 2020",
      desc: "Focused on applied physics and foundational computing principles.",
      descBullets: [
        "C Programming",
        "Semiconductors",
        "Networking",
        "Applied Physics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
            Stack: "Backend",

      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
            Stack: "Frontend/Design", //Insert stack or technology you have experience in

      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
display: true,
experience: [
{
role: "Software Developer",
company: "Deetya Soft Pvt. Ltd",
companylogo: require("./assets/images/Deetya.png"),
date: "September 2024 – November 2025",
desc: "Designed and developed backend systems using Java, Spring Boot, and Asterisk to enhance telecom automation and service reliability.",
descBullets: [
"Designed, developed, and maintained scalable backend applications ensuring high availability and performance.",
"Implemented advanced call workflows by integrating Asterisk AMI with backend services.",
"Developed and secured RESTful APIs for authentication, call handling, and account management.",
"Optimized application logic to improve system throughput and reduce response time.",
"Collaborated with cross-functional teams in agile environments to deliver high-quality software solutions."
]
},
{
role: "Young Professional-II",
company: "ICAR (New Delhi – Pusa)",
companylogo: require("./assets/images/icar.png"),
date: "November 2024 – Present",
desc: "Working on AI/ML-based biotic and abiotic crop disease detection under the NASF project using deep learning and computer vision.",
descBullets: [
"Developing machine-learning pipelines for data collection, preprocessing, augmentation, labeling, and dataset balancing.",
"Training and evaluating CNN architectures such as VGG, EfficientNet, ResNet, and custom models for disease identification.",
"Implementing optimization techniques like transfer learning, learning-rate tuning, early stopping, and hyperparameter search.",
"Working with Python, TensorFlow, Keras, OpenCV, and NumPy for model development and image analysis.",
"Building automated scripts for training, prediction, and large-scale batch inference.",
"Collaborating with scientists to validate model outputs and refine datasets and architectures.",
"Contributing to documentation, dataset preparation, and reporting aligned with NASF project goals."
]
}
]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Major Academic and Technical Projects Showcasing Innovation and Applied Learning",
  projects: [
    {
      image: require("./assets/images/object.png"), // replace with your project image if available
      projectName: "Object Detection System",
      projectDesc:
        "Designed and implemented an advanced Object Detection System capable of identifying multiple objects in images and video streams, providing real-time object names and confidence scores. Combined deep learning with image processing techniques to enhance accuracy and performance.",
      footerLink: [
        {
          name: "View Project Details",
          url: "#" // replace with GitHub or demo link if available
        }
      ]
    },
    {
      image: require("./assets/images/virus.jpeg"), // replace with your project image if available
      projectName: "Virus Detection Tool",
      projectDesc:
        "Developed a File Scanning and Virus Detection Tool that analyzes file signatures, patterns, and behaviors to detect and handle malicious files. Implemented secure deletion and user confirmation mechanisms for enhanced security and control.",
      footerLink: [
        {
          name: "View Project Details",
          url: "#" // replace with GitHub or demo link if available
        }
      ]
    },
    {
      image: require("./assets/images/car.jpeg"), // replace with your project image if available
      projectName: "Line Following Car",
      projectDesc:
        "Designed and built a line-following robotic car using Arduino UNO and IR sensors, programmed in C to autonomously follow a black line on a white surface. Demonstrated at Rajdhani College during NIRF evaluation as an example of applied robotics and embedded systems.",
      footerLink: [
        {
          name: "View Project Details",
          url: "#" // replace with GitHub or demo link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle:
    "Certifications and recognitions that highlight my technical skills and continuous learning in software development and emerging technologies.",

  achievementsCards: [
    {
      title: "Salesforce Certified: AI Associate & AI Specialist",
      subtitle:
        "Earned Salesforce certifications in AI Associate and AI Specialist, demonstrating proficiency in leveraging AI tools and automation within the Salesforce ecosystem.",
      image: require("./assets/images/Salesforce.png"), // Salesforce logo
      imageAlt: "Salesforce Logo",
      footerLink: [
        {
          name: "AI Associate Certificate",
                    url: "https://drive.google.com/file/d/1o36ZfLL1btpoRmnQbyXI6IbdAU6vco4A/view?usp=drive_link" // 🔗 Replace with your actual link

        },
        {
          name: "AI Specialist Certificate",
                 url: "https://drive.google.com/file/d/1Dzb-iW0ZSxzObfH-Nbxzpya0_CbTL0nZ/view?usp=drive_link" // 🔗 Replace with your actual link

        }
      ]
    },
    {
      title: "TechVidya: Java Certification",
      subtitle:
        "Completed Java certification from TechVidya, focusing on object-oriented programming, data structures, and backend development.",
      image: require("./assets/images/java.png"), // Java logo
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1tmOpqgf93hliZiBY5T8V8aa6RsQ5Je7x/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Udemy Certifications: JavaScript & AWS DVA-C02",
      subtitle:
        "Successfully completed Udemy certifications in JavaScript development and AWS Certified Developer – Associate (DVA-C02), covering full-stack web development and cloud deployment skills.",
      image: require("./assets/images/udemy.png"), // Udemy logo
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "JavaScript Certificate",
                    url: "https://drive.google.com/file/d/1kphNJ0JOcTKVO151Jno5xJf_xlUn47Tr/view?usp=drive_link" // Replace with real link

        },
        {
          name: "AWS DVA-C02 Certificate",
                   url: "https://drive.google.com/file/d/1CRH0z73lK6DAEbhUZcC9vzn0p4b8DPbc/view?usp=drive_link" // Replace with real link

        }
      ]
    },
    {
      title: "ServiceNow: Micro Certification",
      subtitle:
        "Earned a ServiceNow Micro Certification demonstrating understanding of ServiceNow platform fundamentals and workflow automation.",
      image: require("./assets/images/servicenow.png"), // ServiceNow logo
      imageAlt: "ServiceNow Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "#" // add certificate link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section
};

// Blogs Section

const blogSection = {
  title: "Learning & Social Blogs",
  subtitle:
    "I enjoy sharing insights about professional growth, online learning, and tools that help improve productivity. Here are some of my favorite resources from LinkedIn and Salesforce.",
  displayMediumBlogs: "false", // Keep false since we're using custom links
  blogs: [
    {
      url: "https://www.linkedin.com/in/peush-kumar-35b9571bb/",
      title: "Continuous Learning in the Age of AI",
      description:
        "An inspiring article on how to stay relevant in your career by leveraging LinkedIn Learning and AI-powered skill development tools."
    },
    {
      url: "https://www.salesforce.com/trailblazer/profile",
      title: "Master Salesforce Skills and Certifications",
      description:
        "Explore how Salesforce Trailhead empowers learners to upskill, earn certifications, and build career paths in the digital ecosystem."
    }
  ],
  display: true // Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "Webinars & Tech Talks 🎤",
  subtitle: emoji(
    "Sharing insights on technology, learning, and professional growth through community sessions and webinars."
  ),

  talks: [
    {
      title: "Salesforce Trailblazer Community Session",
      subtitle:
        "Guest Speaker at Salesforce Trailblazer Community — explored real-world use cases of CRM innovation and ecosystem growth.",
      slides_url:
        "https://trailhead.salesforce.com/trailblazer-community", // Salesforce Trailblazer
      event_url: "https://www.salesforce.com/trailblazer-community/" // Salesforce official community page
    },
    {
      title: "AWS Certified Developer — Associate (DVA-C02) Tutorial",
      subtitle:
        "Comprehensive Udemy tutorial session focusing on AWS core services, SDK usage, Lambda, and best practices for DVA-C02 certification.",
      slides_url:
        "https://www.udemy.com/course/aws-certified-developer-associate-dva-c02/", // Udemy AWS DVA-C02 course
      event_url:
        "https://aws.amazon.com/certification/certified-developer-associate/" // Official AWS certification page
    },
    {
      title: "Getting Started with ServiceNow Development",
      subtitle:
        "Community webinar covering fundamentals of ServiceNow, flow automation, scripting, and ITSM career growth.",
      slides_url:
        "https://developer.servicenow.com/dev.do#!/learn", // ServiceNow Learning Portal
      event_url:
        "https://www.youtube.com/watch?v=8_b5_hvFJ5w" // ServiceNow webinar link
    }
  ],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Learning Talks & Podcasts 🎙️"),
  subtitle:
    "Conversations and insights about technology, Salesforce, and professional growth.",

  podcast: [
    // Embed your favorite or personal tech discussion
    "https://open.spotify.com/embed/episode/6y5gJ4nA7k3hQxzPexample", // Salesforce/Tech talk
    "https://open.spotify.com/embed/episode/4r9h7ExampleLinkedInGrowth" // optional second podcast
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9719337470",
  email_address: "pks.piyushks@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
