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
    thumbnail: "/bear-1.jpg",
    images: ["/bear-1.jpg","/bear-2.jpg", "/bear-solidworks.png"],
    imageCaptions: ["Front/side view", "View of back drawer", "Solidworks model"],
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
    images: ["/truck.jpg"],
    imageCaptions: ["Finished truck"]
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship",
    category: "Mechanical",
    shortDescription: "Pirate ship model created in Solidworks.",
    longDescription:
      "...",
    thumbnail: "/pirateship.png",
    images: ["/pirateship.png"],
    imageCaptions: ["Solidworks model"]
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
