import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const mechanicalProjects: Project[] = [
  {
    id: "3D-printed-bear",
    title: "Geometric Grizzly Bear",
    category: "Mechanical",
    shortDescription: "3D printed bear puzzle designed in Solidworks. ",
    longDescription:
      "...",
    thumbnail: "",
    images: ["/images/robot-cell-1.jpg", "/bear-solidworks.png"],
    links: [{label: "Assembly Instructions", url: "/Bear Assembly Instructions.pdf"}]
  },
  {
    id: "truck-model",
    title: "Truck Model",
    category: "Mechanical",
    shortDescription: "Model truck built using various machine shop tools.",
    longDescription:
      "...",
    thumbnail: "/truck.jpg",
    images: ["/truck.jpg"]
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship",
    category: "Mechanical",
    shortDescription: "Pirate ship model created in Solidworks.",
    longDescription:
      "...",
    thumbnail: "/pirateship.png",
    images: ["/pirateship.png"]
  }
];

export default function MechanicalPage() {
  return (
    <main className="">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Mechanical Projects</h1>
      <ProjectGrid projects={mechanicalProjects} />
    </main>
  );
}
