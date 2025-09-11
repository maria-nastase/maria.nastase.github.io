import ProjectGrid from "@/components/projectGrid";
import { Project } from "@/types/project";
import Navbar from "@/components/navbar";

const mechanicalProjects: Project[] = [
  {
    id: "3D-printed-bear",
    title: "Geometric Grizzly Bear",
    category: "Mechanical",
    shortDescription: "3D printed bear puzzle designed in SOLIDWORKS. ",
    longDescription:
      `This 3D-printed bear has a mouth that can be opened and closed, allowing it to "eat" a fish, which can then be retrieved from a drawer at the back. It can also hold the fish in its hands, and the arms and head are rotatable.
      
      It was designed in Solidworks and 3D printed using a Zortrax printer. DMF principles were used to minimize print time and the need for supports, while DFA principles were applied for intuitive assembly. IKEA-style assembly instructions were also created using SOLIDWORKS Composer.`,
    thumbnail: "/bear-1.jpg",
    images: ["/bear-1.jpg","/bear-2.jpg", "/bear-solidworks.png"],
    imageCaptions: ["Front/side view", "View of back drawer", "SOLIDWORKS model"],
    links: [{label: "Assembly Instructions", url: "/Bear Assembly Instructions.pdf"}]
  },
  {
    id: "truck-model",
    title: "Truck Model",
    category: "Mechanical",
    shortDescription: "Model truck built using various machine shop tools.",
    longDescription:
      `This truck was fabricated from scratch out of steel, aluminum and wood. The metal and wood were cut using bandsaws, the sheet metal was bent using a box and pan brake, and the wheels were rounded using a belt sander. Additionally, a drill press was used to drill holes, to which threads were added using a tapping machine.`,
    thumbnail: "/truck.jpg",
    images: ["/truck.jpg"],
    imageCaptions: ["Finished truck"]
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship",
    category: "Mechanical",
    shortDescription: "Pirate ship model created in SOLIDWORKS.",
    longDescription:
      "This pirate ship model was created in SOLIDWORKS, inspired by the Black Pearl from Pirates of the Caribbean.",
    thumbnail: "/pirateship.png",
    images: ["/pirateship.png"],
    imageCaptions: ["SOLIDWORKS model"]
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
