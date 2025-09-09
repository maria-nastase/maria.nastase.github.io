import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const mechanicalProjects: Project[] = [
  {
    id: "3D-printed-bear",
    title: "3D Printed Bear",
    category: "Mechanical",
    shortDescription: "3D printed bear puzzle designed in Solidworks. ",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/robot-cell-1.jpg", "/images/robot-cell-2.jpg"]
  },
  {
    id: "truck-model",
    title: "Truck Model",
    category: "Mechanical",
    shortDescription: "Model truck built using various machine shop tools.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship",
    category: "Mechanical",
    shortDescription: "Pirate ship model created on Solidworks.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  }
];

export default function MechanicalPage() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Mechanical Projects</h1>
      <ProjectGrid projects={mechanicalProjects} />
    </main>
  );
}
