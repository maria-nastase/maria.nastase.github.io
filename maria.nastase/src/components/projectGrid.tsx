"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selected || zoomedIndex !== null) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [selected, zoomedIndex]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-lg bg-neutral-800 bg-opacity-90 shadow hover:shadow-lg cursor-pointer overflow-hidden transition mb-10"
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

      {/* Project Modal */}
      {selected && (
        <div
          className="absolute top-1/2 left-1/2 z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2 max-h-[80vh] overflow-y-auto relative">
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

            {/* Images with hover + zoom */}
            {selected.images && selected.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {selected.images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative group cursor-pointer"
                    onClick={() => setZoomedIndex(idx)}
                  >
                    <img
                      src={src}
                      alt={`${selected.title} image ${idx + 1}`}
                      className="rounded shadow w-full h-full object-cover transition duration-300 group-hover:blur-[2px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    {selected.imageCaptions && selected.imageCaptions[idx] && (
                        <span className="text-white font-semibold bg-black/60 px-3 py-1 rounded">
                            {selected.imageCaptions[idx]}
                        </span>
                        )}
                    </div>
                  </div>
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

      {/* Zoom Modal with arrows */}
      {zoomedIndex !== null && selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[60]"
          onClick={(e) => e.target === e.currentTarget && setZoomedIndex(null)}
        >
          {/* Prev */}
          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex(
                (zoomedIndex - 1 + selected.images!.length) %
                  selected.images!.length
              );
            }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selected.images![zoomedIndex]}
            alt="zoomed project"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex((zoomedIndex + 1) % selected.images!.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
