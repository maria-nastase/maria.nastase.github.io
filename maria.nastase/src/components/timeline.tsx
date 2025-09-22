"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Job = {
  role: string;
  company: string;
  date: string;
  description: string;
};

const jobs: Job[] = [
  {
    role: "Automation and Manufacturing Engineering Intern",
    company: "A. Berger Precision",
    date: "May 2025 - Aug. 2025",
    description:
      "Led development of mobile cobot cell for automating burinshing machines and prepared manufacturing drawings and documents for automotive parts.",
  },
  {
    role: "Electrical Engineering Team Member",
    company: "Waterloo Hacker Fab",
    date: "Jan. 2025 - Present",
    description:
      "PCB design and assembly for transistor fabrication tool prototypes."
  },
  {
    role: "Software Implementation Specialist",
    company: "Teamworks",
    date: "Sep. 2024 - Dec. 2024",
    description:
      "Frontend development and scripts for PDF and excel scraping."
  },
  {
    role: "Information Technology Specialist",
    company: "University of Waterloo",
    date: "Jan. 2024 - Apr. 2024",
    description:
      "Technical support and troubleshooting for university staff and students."
  }
];

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      {/*<div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>*/}

      {/*{jobs.map((job, idx) => (
        <div key={idx} className="mb-10 ml-6 relative glass-card">

          <button
            onClick={() => toggle(idx)}
            className="flex flex-col text-left w-full"
          >
            <h3 className="text-lg font-semibold flex justify-content">{job.role} <ChevronDown/></h3>
            <span className="text-sm text-white-500">
              {job.company} — {job.date}
            </span>
          </button>

          {openIndex === idx && (
            <p className="mt-2 text-white-700">
              {job.description}
            </p>
          )}
        </div>
      ))}*/}
      {jobs.map((job, idx) => (
      <div key={idx} className="mb-10 ml-6 relative glass-card work-box">
        <h3 className="text-lg font-semibold">{job.role}</h3>
        <h4 className="about-subheading"><span>
          {job.company}, {job.date}
        </span></h4>
        <p className="mt-2 text-white-700">{job.description}</p>
      </div>
    ))}

    </div>
  );
}
