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
      `This mobile robot cell was designed to automate 4 different burnishing machines at A. Berger Precision using a Fanuc cobot to pick and place parts and to pull handles on machines. The system was designed to handle 15 different part types, most of which are in bulk using a 3D vision system. As well, custom extensions were made for the gripper so that it can pick up all parts in tight spaces. 

      A six-level mobile aluminum extrusion cart was designed to store the parts so that the operator only has to load and unload it once per shift. This was the best solution due to the lack of space in the area and the amount of parts needed to be handled without operator intervention. The rack includes extra storage space, a bin to place parts for inspection, and a bin that acts as a buffer station for finished parts.
      
      PHSR guidelines and relevant safety standards were analyzed to design a layout that ensures safety while maintaining the mobility of the system. This includes laser safety scanners and physical guarding around the dangerous areas of the machines.
      
      The cobot motion was simulated in the Fanuc Roboguide software to test the cobot reach and optimize the path. The rack was designed in Solidworks using weldment profiles, and an FEA was run using bolt connections to identify and strengthen high-stress areas. Calculations were also performed to analyze stability and ergonomics, and the ensure the cobot is able to pull the drawer handles. GD&T drawings were later created for all rack components.
      
      Detailed Statements of Requirements were provided to potential suppliers for the project components. Then, a comprehensive proposal was presented including quotations, requirements and ROI calculations, which was well received by management.
      `,
    thumbnail: "/cobotThumbnail.png",
    images: ["/cobotThumbnail.png", "/cobot-flowchart.png", "/cobot-cart.png"],
    imageCaptions: ["3D view of layout", "General cobot logic flowchart", "Model of mobile cart" ],
  },
  {
    id: "useless-machine",
    title: "Automated Self-Resetting Machine",
    category: "Mechatronics",
    shortDescription: "Machine that turns itself off when it is turned on.",
    longDescription:
      `A machine that uses a servo motor to flip off its switch and turn itself off when it is turned on.
      
      The base was designed in Solidworks and 3D printed, using DFM principles to minimize print time and eliminate the need for supports. The baseplate and switchplate were also designed in Solidworks, but they were waterjet cut from acrylic. The linkages were hand-cut from an aluminum bar. The servo motor is controlled by an ATtiny microcontroller programmed using the Arduino IDE, and the electronics were soldered onto a perfboard.`,
    thumbnail: "/srm.jpg",
    images: ["/srm.jpg", "/srm-base.png", "/srm-baseplate.png", "/srm-schematic.png"],
    imageCaptions: ["Finished protopype", "Solidworks model of base", "Baseplate DFX file for waterjet cutting", "Electrical schematic"],
  }
];

export default function AutomationPage() {
  return (
    <main className="">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6 ml-4">Automation + Mechatronics Projects</h2>
      <ProjectGrid projects={automationProjects} />
    </main>
  );
}
