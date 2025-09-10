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
      "...",
    thumbnail: "",
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
      "...",
    thumbnail: "",
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
      "...",
    thumbnail: "",
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
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"],
    imageCaptions: ["Home page"],
    links: [{label: "Github", url: "https://github.com/maria-nastase/maria.nastase.github.io"}]
  }
];

export default function SoftwarePage() {
  return (
    <main className="">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Software Projects</h1>
      <ProjectGrid projects={softwareProjects} />
    </main>
  );
}
