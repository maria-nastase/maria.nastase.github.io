import { FileText, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
    return (
      <div className="p-8" id="intro">
        <h1 className="text-2xl font-bold mb-6">Hi, I&#39;m Maria.</h1>
        <h2>2B Systems Design Engineering Student @ UWaterloo</h2>
        <h2>Interested in Mechatronics, Industrial Automation and Robotics</h2>
        <div className="flex gap-6 text-gray-700 mt-6">
          {/* Resume */}
          <a
            href="\Maria Nastase Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon intro-icon"
          >
            <FileText size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/marianastase"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon intro-icon"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maria-nastase"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon intro-icon"
          >
            <Github size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:mnastase@uwaterloo.ca"
            className="social-icon intro-icon"
          >
            <Mail size={20} />
          </a>
        </div>
        <div id="pages">
          <div className="page-button glass-card"><a id="aboutme" href="\about">About Me</a></div>
          <div className="page-button glass-card"><a id="projects" href="\projects">Projects</a></div>
        </div>
      </div>
    );
  }
  