import Navbar from "@/components/navbar"

export default function About() {
    return (
    <div className="project-section" id="projects">
        <Navbar />
        <h1 className="text-2xl font-bold mb-6">Projects</h1>
        <a href="projects\automation-mechatronics"><h2>Automation + Mechatronics</h2></a>
        <a href="projects\mechanical"><h2>Mechanical</h2></a>
        <a href="projects\electrical-hardware"><h2>Electrical + Hardware</h2></a>
        <a href="projects\software"><h2>Software</h2></a>
    </div>
    );
}