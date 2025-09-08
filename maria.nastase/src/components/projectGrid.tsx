"use client";

import { useState } from "react";
import { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-lg bg-neutral-800 bg-opacity-90 shadow hover:shadow-lg cursor-pointer overflow-hidden transition"
            onClick={() => setSelected(proj)}
          >
            {proj.thumbnail && (
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-60 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-white-600 text-sm">{proj.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="absolute top-1/2 left-1/2 z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 font-bold text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Project Title */}
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selected.longDescription}
            </p>

            {/* Images */}
            {selected.images && selected.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {selected.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${selected.title} image ${idx + 1}`}
                    className="rounded shadow"
                  />
                ))}
              </div>
            )}

            {/* Links */}
            {selected.links && (
              <div className="flex gap-4 flex-wrap">
                {selected.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
