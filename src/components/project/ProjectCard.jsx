import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* Project Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col flex-1 justify-between">
        {/* Project Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-base mb-4 flex-1">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            View Project <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
