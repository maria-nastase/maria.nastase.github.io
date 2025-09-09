import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const electricalProjects: Project[] = [
  {
    id: "tube-furnace-pcb",
    title: "Tube Furnace PCB",
    category: "Electrical",
    shortDescription: "PCB that gradually ramps tube furnace to 1100 °C. ",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/robot-cell-1.jpg", "/images/robot-cell-2.jpg"]
  },
  {
    id: "spin-coater-pcb",
    title: "Spin Coater PCB",
    category: "Electrical",
    shortDescription: "PCB that controls rotation of spin coater.",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/useless-1.jpg", "/images/useless-2.jpg"]
  }
];

export default function ElectricalPage() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Electrical + Hardware Projects</h1>
      <ProjectGrid projects={electricalProjects} />
    </main>
  );
}
