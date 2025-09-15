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
      `A PCB that controls the temperature of a tube furnace to be used for thermal oxidation and annealing in semiconductor fabrication. It gets the temperature reading from a thermocouple, which is shown on an LCD display, and controls a variac which heats up the Tungsten heating element.
      
      The system was first prototyped on a breadboard using an Arduino Uno, before designing the PCB in KiCad with an ESP32 and soldering the components. Currently working on fine-tuning the PID parameters to optimize the rate of heating and cooling while remaining within safe limits.`,
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
      `This PCB controls a motor for the rotation of a spin coater, which is used in semiconductor fabrication to apply uniform thin films of photoresist on silicon wafers.
      
      The through-hole and surface mount components (as small as 0603) were soldered by hand.`,
    thumbnail: "/spincoater-pcb.jpg",
    images: ["/spincoater-pcb.jpg"],
    imageCaptions: ["Soldered PCB (Raspberry Pi, LCD display, motor driver and keypad not shown in picture)"],
  }
];

export default function ElectricalPage() {
  return (
    <main className="">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6 ml-4">Electrical + Hardware Projects</h2>
      <ProjectGrid projects={electricalProjects} />
    </main>
  );
}
