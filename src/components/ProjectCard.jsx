import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/90 dark:bg-slate-950/75 rounded-lg overflow-hidden shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 border border-primary/10 backdrop-blur flex flex-col h-full"
    >
      <Link to={`/project/${project.id}`} className="aspect-video overflow-hidden relative block">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-md border border-primary/10">
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/project/${project.id}`} className="block">
            <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-text-secondary text-xs sm:text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
