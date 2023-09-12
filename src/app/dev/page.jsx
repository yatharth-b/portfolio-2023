import styles from "./dev.module.css";
import localFont from "next/font/local";
import { Noto_Color_Emoji } from "next/font/google";
import Header from "../components/Hero/Header/Header";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import '../globals.css'
import { Metadata } from 'next';

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "../fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet",
});
const myFont2 = localFont({
  src: "../fonts/Druk.ttf",
  variable: "--font-druk",
});
const myFont3 = Noto_Color_Emoji({
  variable: "--font-emoji",
  subsets: ["emoji"],
  weight: "400",
});

export const metadata= {
  title: "Yatharth",
  description: "Yatharth's Portfolio (2023)",
};

export default function dev() {
  const projects = [
    {
      title: "Portfolio 2023",
      body: "This website.",
      link: "https://github.com/yatharth-b/portfolio-2023",
    },
    {
      title: "Cantus",
      body: "A natural language interface for Spotify built using OpenAI APIs.",
      link: "https://github.com/yatharth-b/cantus",
    },
    {
      title: "GT Scheduler",
      body: "Open-source Scheduling tool used by 24k Tech students monthly. Maintained the website and implemented new features.",
      link: "https://github.com/gt-scheduler/website",
    },
    {
      title: "Duality",
      body: "Chrome extension that reduced bias by suggesting articles with opposite sentiments to the one the user is reading.",
      link: "https://github.com/samarth52/Duality",
    },
    {
      title: "ImmerseGT Website",
      body: "Website for Georgia Tech's first XR hackathon.",
      link: "https://www.immersegt.io/",
    },
    {
      title: "GTVC Website",
      body: "Website for Georgia Tech's VC Club.",
      link: "https://gtvc.club",
    },
    {
      title: "GTXR Website",
      body: "Website for Georgia Tech's XR Club.",
      link: "https://gtxr.club",
    },
    {
      title: "Motherhood Beyond Bars",
      body: "Web and mobile app for a non-profit that helps incarcerated mothers.",
      link: "https://github.com/GTBitsOfGood/motherhood-beyond-bars",
    },
    {
      title: "SX Summit website 2022",
      body: "Website for SX Summit 2022.",
      link: "https://summit.startup.exchange/",
    },
    {
      title: "Movie Success Prediction",
      body: "Predicting movie success using machine learning. Project for CS 4641.",
      link: "https://yatharth-b.github.io/CS4641Team80/",
    },
    {
      title: "Old SX Website",
      body: "Old website for Startup Exchange. Migrated from Wordpress to Next.js.",
      link: "http://sx-website.vercel.app",
    },
    {
      title: "SpotiSync",
      body: "Barebones python script for syncing spotify across devices and starting a dorm room party.",
      link: "https://github.com/yatharth-b/SpotiSync",
    },
    {
      title: "Tokenstack",
      body: "Democratizing NFT development. Developed the UI and landing page.",
      link: "https://tokenstack.dev/",
    },
    {
      title: "Tren",
      body: "Hack GT 8 project. Attempt at implementing an app for generating notes by contributions from the entire class.",
      link: "https://github.com/asattiraju13/hack-gt-8",
    },
    {
      title: "CSGO Aimbot",
      body: "CSGO aimbot made with tensorflow object detection API and YOLOv5.",
      link: "https://github.com/yatharth-b/CSGO-aimbot",
    },
    {
      title: "Chess.com Bot",
      body: "Chess.com bot that controls input and plays chess using the stockfish engine.",
      link: "https://github.com/yatharth-b/Chess-Bot",
    },
    {
      title: "Diep.io bot",
      body: "A very bot for playing the game diep.io.",
      link: "https://www.youtube.com/watch?v=x3hMH4bIefk",
    },
    {
      title: "Reddit Discord Bot",
      body: "Discord bot for browsing reddit posts.",
      link: "https://github.com/yatharth-b/Reddit-Discord",
    },
    {
      title: "Auxin",
      body: "Chrome extension for enhancing online learning. Uses Google NLP to analyze video transcripts and suggests relevant information.",
    },
  ];

  const internships = [
    {
      title: "NCR Corporation (Summer 2023)",
      position: "Software Engineering Intern",
    },
    {
      title: "NCR Corporation (Summer 2022)",
      position: "Software Engineering Intern",
      body: [
        "- Collaborated with the Self-Checkout team to add a new feature that enables donations to worldwide charities in more than 1 million stores. ",
        "- Engineered a highly secure and scalable website using React and NestJS, enabling NCR employees to add charities and store owners to choose charities for their stores.",
        "- Containerized and deployed the website on Google Cloud Run and secured it using Apigee.",
        "- Designed an efficient schema for a Firestore database with the potential of storing millions of transactions.",
        "- Successfully added the feature to the Self-checkout UI (a .NET Application) using WebView2 and added the feature’s state to a custom C++ state machine.",
      ],
    },
    {
      title: "ClearTrail Technologies (Summer 2020)",
      position: "Software Engineering Intern",
      body: [
        "- Researched the effectiveness of pose estimation in sentiment analysis for crime detection in videos.",
        "- Utilized OpenPose to perform pose estimation and integrated with sentiment analysis system (Tensorflow, Python). ",
      ],
    },
  ];

  return (
    <div
      className={`${styles.dev} ${myFont.variable} ${myFont2.variable} ${myFont3.variable}`}
    >
      <div className={styles.devhero}>
        <Header />
        <h1 className={styles.devheading}>DEV EXPERIENCE</h1>
      </div>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <a
              className={`${styles.project} ${styles.purple}`}
              href={project.link}
            >
              <h2 className={styles.ProjectTitle}>{project.title}</h2>
              <p className={styles.ProjectBody}>{project.body}</p>
            </a>
          );
        })}
      </div>
      <div className={styles.Internships}>
        <h1 className={styles.devheading}>INTERNSHIPS</h1>
        <div className={styles.internshipsContainer}>
          {internships.map((internship, index) => {
            return (
              <div className={styles.internship}>
                <h2 className={styles.internshipTitle}>{internship.title}</h2>
                <h3 className={styles.internshipPosition}>
                  {internship.position}
                </h3>
                {internship.body &&
                  internship.body.map((point) => {
                    return <p className={styles.internshipBody}>{point}</p>;
                  })}
              </div>
            );
          })}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
