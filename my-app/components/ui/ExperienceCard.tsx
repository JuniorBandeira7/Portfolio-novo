import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  description: string;
  technologies: string[];
}

export default function ExperienceCard({
  company,
  startDate,
  endDate,
  role,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="border grid md:grid-cols-3 gap-3 border-gray-200 rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col gap-2 items-start mb-2">
        <h3 className="text-xl font-bold text-left">{company}</h3>
        <span className="text-sm text-gray-500">
          {startDate} - {endDate}
        </span>
      </div>
      <div className="col-span-2">
        <p className="text-lg text-gray-700 mb-4 text-left font-semibold">{role}</p>
        <p className="text-gray-600 mb-4 text-left">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="bg-blue-700 hover:bg-blue-600 text-white">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
