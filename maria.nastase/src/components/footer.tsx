import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <div className="custom-footer w-full border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mb-0">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Maria Nastase. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-300">
          {/* Resume */}
          <a
            href="\Maria Nastase Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
          >
            <FileText size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/marianastase"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maria-nastase"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
          >
            <Github size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:mnastase@uwaterloo.ca"
            className="social-icon footer-icon"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
