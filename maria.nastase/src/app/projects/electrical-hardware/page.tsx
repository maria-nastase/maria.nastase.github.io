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
    thumbnail: "/tubefurnace-pcb1.jpg",
    images: ["/tubefurnace-pcb1.jpg", "/tubefurnacepcb-2.png", "/tubefurnace-pcb3.png"],
    imageCaptions: ["Assembled PCB", "PCB design in KiCad", "Schematic"],
  },
  {
    id: "spin-coater-pcb",
    title: "Spin Coater PCB",
    category: "Electrical",
    shortDescription: "PCB that controls rotation of a spin coater.",
    longDescription:
      "...",
    thumbnail: "/spincoater-pcb.jpg",
    images: ["/spincoater-pcb.jpg"],
    imageCaptions: ["Assembled PCB"],
  }
];

export default function ElectricalPage() {
  return (
    <main className="">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Electrical + Hardware Projects</h1>
      <ProjectGrid projects={electricalProjects} />
    </main>
  );
}
