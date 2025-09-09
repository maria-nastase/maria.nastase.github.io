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
    images: ["/images/robot-cell-1.jpg", "/images/robot-cell-2.jpg"]
  },
  {
    id: "argumentor",
    title: "ArguMentor",
    category: "Software",
    shortDescription: "An AI-powered tool for debating practice, providing real-time argument scoring, feedback, and counter-arguments.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  },
  {
    id: "connectify",
    title: "Connectify",
    category: "Software",
    shortDescription: "Translation tool to overcome language barriers in telecommunications customer service.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  },
  {
    id: "personal-website",
    title: "Personal Website",
    category: "Software",
    shortDescription: "Website showcasing my projects and experience.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  }
];

export default function SoftwarePage() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Software Projects</h1>
      <ProjectGrid projects={softwareProjects} />
    </main>
  );
}
