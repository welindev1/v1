import { ArrowIcon } from '../icons';
import { Tag } from '../ui';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, image, link } = project;

  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 rounded-lg transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] cursor-pointer mb-4"
    >
      <div className="w-[200px] lg:w-[120px] h-[120px] lg:h-[70px] bg-slate-800 rounded overflow-hidden border border-white/10 shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-teal-300 text-[10px] text-center p-2">
            {title}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-slate-200 font-semibold text-base mb-2 flex items-center gap-2 group-hover:text-teal-300 transition-colors">
          {title}
          <ArrowIcon />
        </h3>
        <p className="text-sm text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};
