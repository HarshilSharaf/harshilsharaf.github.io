import emoji from "react-easy-emoji";



const app = {
  title: "Harshil Sharaf's Portfolio",
  icon: "favicon-16x16.png",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};



const socialNetworks = {

  github: "https://github.com/HarshilSharaf/",
  linkden: "https://www.linkedin.com/in/harshil-sharaf-2b8b2b1b6/",
  instagram: "https://www.instagram.com/harshil_sharaf/",
  twitter: null,
};


const bannerSection = {
  username: "Harshil Sharaf",
  bannerHeading: "Welcome!",
  bannerTagLine: emoji(
    "A CyberSec and Machine Learning Enthusiast,a Flutter Developer and a fascinating debugger who want love to  play Games 🎮 "
  ),
 
  bannerAvatar: "avatar.jpeg",
  resumeLink:
    "https://drive.google.com/file/d/1aTZw6hxlpWjRyqM-QwLIPlnckKNNEluZ/view?usp=sharing",
};



const aboutSection = {
  admin: "snakeeyes@snakeeyes",
  firstCommand: " sudo ./about",
  secondCommand: " executing \t\t\t\t\t\t" +"./about",
  about:
    "Computer Science Student and a Cerified Ethical Hacker. Passionate about defending India from cyber threats.Want to collaborate with Government of India for CyberSec Threat Prevention and also wanted to work with Tech-Giants.",
};



const skillsSection = {
  
  skillsTagLines: [
    "Excitable towards giving breath to find vulnerabilities in Web Application.",
    "Love to Build Flutter Applications.",
    "Also Passionate towards other stuff like Machine Learning and python scripting.",
  ],

 

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-flutter",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      fontAwesomeClassname: "fas fa-database",
    },
    {
      fontAwesomeClassname:"fas fa-user-secret"
    }
  ],
};


const openSourceSection = {
  
  
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "HarshilSharaf",
 
  numberOfRepos: 6,
};



const projectsSection = {
  projects: [
    {
      projectName: "Text-To-Speech With Python",
      projectBio:
      "Text-To-Speech Using Python with a interactive GUI",
      projectUrl: "https://github.com/HarshilSharaf/Text-To-Speech",
      stackList: ["Python", "QT", "TTS"],
      u : "hello"
    },
    {
      projectName: "Plant-Disease-Identification with Flutter",
      projectBio:
        "Plant-Disease-Identification is an app made for those who want to identify disease of their plants .This app uses ML to identify Plant Diseases  ",
      projectUrl: "https://etranspakistan.com/",
      stackList: ["AI", "ML", "Flutter"],
      
    },
    {
      projectName: "Money-Manager Using Flutter",
      projectBio:
        "Want to track where your all money is spent then here's the solution.",
      projectUrl: "https://orthocovid-19.netlify.app/",
      stackList: ["Flutter", "App development", "firebase"],
      u : "hello"
    },
    {
      projectName: "Desktop Control Using Hand Gesture",
      projectBio:
        "Hand Gesture recognition system to control cursor with your hand.",
      projectUrl: "https://orthocovid-19.netlify.app/",
      stackList: ["ai","ml","python","keras"],
      u : "hello"
    }

   
  ],
};


const experienceSection = {
  experiences: [
    {
      experienceTitle: "CHARUSAT INTERN",
      experienceDesc:
        "Learned  Keras and flutter and created an app that detects disease from the leaves of plants. ",
     
      experienceDuration: "05/20-07/20",
     
      experienceTags: ["AI", "2 Months", "Changa"],
    },
    // {
    //   experienceTitle: "Wordpress Intern",
    //   experienceDesc:
    //     "Improved remotely managing skills by giving 20+ hours per week. Expanded knowledge of creating static and responsive sites using WordPress.",
    //   experienceDuration: "10/19-11/19",
    //   experienceTags: ["Interns Pk", "1.5 month", "Remote"],
    // },
    // {
    //   experienceTitle: "Competition Manager",
    //   experienceDesc:
    //     "Manages the competition team and Ensures everyone is satisfied. Design and develop innovative competition for ITEC and reexamines it.",
    //   experienceDuration: "Current",
    //   experienceTags: ["ACM", "12/2018-5/2019", "NEDUET"],
    // },
  ],
};



const contactSection = {
  contactTagline:
    "So you finally reached here!! Contact me ",
  
  contactList: ["8866245865", "harshil.sharaf1234@gmail.com"],
};




export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
