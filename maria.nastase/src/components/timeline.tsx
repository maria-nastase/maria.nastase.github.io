"use client";

import { useState } from "react";

type Job = {
  role: string;
  company: string;
  date: string;
  description: string;
};

const jobs: Job[] = [
  {
    role: "Automation Engineering and Project Management Intern",
    company: "A. Berger Precision",
    date: "May 2025 – Aug. 2025",
    description:
      "Lead development of mobile cobot cell for automating burinshing machines.",
  },
  {
    role: "Electrical Engineering Team Member",
    company: "Waterloo Hacker Fab",
    date: "Jan. 2025 – Present",
    description:
      "PCB design and assembly for transistor fabrication tool prototypes."
  },
  {
    role: "Software Implementation Specialist",
    company: "Teamworks",
    date: "Sep. 2024 – Dec. 2024",
    description:
      "Frontend development and scripts for PDF and excel scraping."
  },
  {
    role: "Information Technology Specialist",
    company: "University of Waterloo",
    date: "Jan. 2024 – Apr. 2024",
    description:
      "Provided technical support and troubleshooting for university staff and students."
  }
];

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative ml-12">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>

      {jobs.map((job, idx) => (
        <div key={idx} className="mb-10 ml-6 relative">

          <button
            onClick={() => toggle(idx)}
            className="flex flex-col text-left w-full"
          >
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <span className="text-sm text-white-500">
              {job.company} — {job.date}
            </span>
          </button>

          {/* Expandable description */}
          {openIndex === idx && (
            <p className="mt-2 text-white-700">
              {job.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
