import Navbar from "@/components/navbar"
import Link from "next/link";
import { Bot, Cog, CircuitBoard, Laptop } from "lucide-react"

/*export default function Projects() {
    return (
    <div className="project-section" id="projects">
        <Navbar />
        <h1 className="text-2xl font-bold mb-6 flex">Projects</h1>
        <div className="project-list grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="projects\automation-mechatronics" className="page-button m-4"><h2>Automation + Mechatronics</h2><Bot /></a>
            <a href="projects\mechanical" className="page-button m-4"><h2>Mechanical</h2><Cog /></a>
            <a href="projects\electrical-hardware" className="page-button m-4"><h2>Electrical + Hardware</h2><CircuitBoard /></a>
            <a href="projects\software" className="page-button m-4"><h2>Software</h2><Laptop /></a>
        </div>
    </div>
    );
}*/

export default function Projects() {
  const projects = [
    { name: "Automation + Mechatronics", icon: <Bot size={50}/>, href: "/projects/automation-mechatronics" },
    { name: "Mechanical", icon: <Cog size={50}/>, href: "/projects/mechanical" },
    { name: "Electrical + Hardware", icon: <CircuitBoard size={50}/>, href: "/projects/electrical-hardware" },
    { name: "Software", icon: <Laptop size={50}/>, href: "/projects/software" },
  ];

  return (
    <div className="project-list">
        <Navbar />
        <div className="project-type-grid">
        {projects.map((p, idx) => (
            <Link key={idx} href={p.href} className="project-type">
            <div className="project-icon">{p.icon}</div>
            <div className="project-name">{p.name}</div>
            </Link>
        ))}
        </div>
    </div>
  );
}
