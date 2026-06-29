import { Badge } from "@/components/ui/badge";

interface ProjectsCardProps {
  name: string;
  link?: string;
  description: string;
  technologies: string[];
}

export default function ProjectsCard({
  name,
  link,
  description,
  technologies,
}: ProjectsCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow flex flex-col gap-4 bg-white">
        <h3 className="text-xl font-bold text-left">{name}</h3>
        <p className="text-gray-600 mb-4 text-left">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="bg-blue-700 hover:bg-blue-600 text-white">
              {tech}
            </Badge>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer w-full flex justify-start text-blue-700">
            <span className="">
              Ver Projeto →
            </span>
          </a>
        )}
    </div>
  );
}
