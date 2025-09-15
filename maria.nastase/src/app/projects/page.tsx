import Navbar from "@/components/navbar"
import Link from "next/link";
import { Bot, Cog, CircuitBoard, Laptop } from "lucide-react"

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
        <h2 className="ml-4">Projects</h2>
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
