import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const softwareProjects: Project[] = [
  {
    id: "upright",
    title: "Upright",
    category: "Software",
    shortDescription: "Detects falls and injuries using phone accelerometer data, alerting emergency contacts and sharing a link to a webpage with important details.",
    longDescription:
      `Upright is an iPhone app and website that detects when vulnerable users fall or get injured. Whether you fall off your bike on your way to work, skiing down a mountain, or going for a walk as an elderly person, Upright alerts your emergency contacts and with your location and the severity of the injury.
      
      1. The user installs the mobile app and has adds their emergency contacts.
      2. If the user gets injured or falls down, the app detects an anomaly by reading the phone's accelerometer data and categorizes its severity.
      3. Emergency contacts are notified via SMS of a problem, and are given cursory information with a URL for more details.
      4. Emergency contacts can view a webpage with predictive injury classification, location, time, and the patient's history of injuries. 

      Frontend: React, Google Maps API, Tempo Labs
      Backend + Database: Next.js, TypeScript, Twilio API, PostgreSQL, Prisma
      Mobile App: Swift
      `,
    thumbnail: "/upright-logo.png",
    images: ["/upright1.png", "/upright2.jpg"],
    imageCaptions: ["iOS app screens", "Web UI"],
    links: [{label: "Github", url:"https://github.com/maria-nastase/Upright"}]
  },
  {
    id: "argumentor",
    title: "ArguMentor",
    category: "Software",
    shortDescription: "An AI-powered tool for debating practice, providing real-time argument scoring, feedback, and counter-arguments.",
    longDescription:
      `ArguMentor serves as a virtual debate coach, enhancing learning in a fun and interactive way. It is an AI-powered platform designed to help students and debaters improve their argumentation skills. Users input debate statements, and the app provides a counter-argument which is automatically read aloud, helping them refine their reasoning and communication. It gives instant feedback and assigns a score based on structure, clarity, and logic.
      
      Frontend: React, Typescript, Tailwind CSS
      Backend: Next.js, GPT-4 API, Whisper API`,
    thumbnail: "/argumentor-logo.jpg",
    images: ["/argumentor.png"],
    imageCaptions: ["Chatbot UI"],
    links: [{label: "Github", url: "https://github.com/maria-nastase/ArguMentor"}]
  },
  {
    id: "connectify",
    title: "Connectify",
    category: "Software",
    shortDescription: "Translation tool to overcome language barriers in telecommunications customer service.",
    longDescription:
      `Our tool enables speech detection in any foreign language—such as French, Spanish, Chinese, and more—and converts this speech into text, translating it instantly into English. The translation is then provided to the customer support agent both through audio and text, allowing them to understand and communicate with clients more effectively, bridging language gaps and enhancing the overall support experience.
      
      Frontend: React, Tailwind CSS
      Backend: Next.js, Node.js, TypeScript, GPT-4 API, Whisper API`,
    thumbnail: "/connectify-logo.png",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"],
    imageCaptions: ["Chatbot UI"],
    links: [{label: "Github", url: "https://github.com/maria-nastase/Connectify"}]
  },
  {
    id: "personal-website",
    title: "Personal Website",
    category: "Software",
    shortDescription: "This website, showcasing my projects and experience.",
    longDescription:
      "This website was built using Next.js, Typescript and Tailwind CSS. It is hosted on Vercel.",
    thumbnail: "/website-home.png",
    images: ["/website-home-full.png"],
    imageCaptions: ["Home page"],
    links: [{label: "Website", url: "https://marianastase.vercel.app/"}, {label: "Github", url: "https://github.com/maria-nastase/maria.nastase.github.io"}]
  }
];

export default function SoftwarePage() {
  return (
    <main className="">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6 ml-4">Software Projects</h2>
      <ProjectGrid projects={softwareProjects} />
    </main>
  );
}
