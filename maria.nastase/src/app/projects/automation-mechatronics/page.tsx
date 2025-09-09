import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const automationProjects: Project[] = [
  {
    id: "robot-cell",
    title: "Mobile Pick-and-Place Cobot Cell",
    category: "Automation/Mechatronics",
    shortDescription: "Robot cell composed of Fanuc cobot, 3D vision system, mobile rack and base, and laser safety scanner for automating machines with bulk parts. ",
    longDescription:
      "...",
    thumbnail: "/cobotThumbnail.png",
    images: ["/images/robot-cell-1.jpg", "/images/robot-cell-2.jpg"]
  },
  {
    id: "useless-machine",
    title: "Automated Self-Resetting Machine",
    category: "Mechatronics",
    shortDescription: "Machine that turns itself off when it is turned on.",
    longDescription:
      "...",
    thumbnail: "/cobotThumbnail.png",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  }
];

export default function AutomationPage() {
  return (
    <main className="">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Automation + Mechatronics Projects</h1>
      <ProjectGrid projects={automationProjects} />
    </main>
  );
}
