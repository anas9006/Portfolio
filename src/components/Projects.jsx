import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const isGmailUrl = project.liveUrl.includes('mail.google.com') || project.liveUrl.includes('mailto:');

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
      {/* Image Container */}
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 to-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center gap-6">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source`} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
            <FaGithub size={20} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={isGmailUrl ? `Ask about ${project.title}` : `Visit ${project.title}`} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/10">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Links for small and medium devices (below lg breakpoint) */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 lg:hidden">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/80 text-xs font-semibold transition-all duration-300 active:scale-95 shadow-sm"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={isGmailUrl ? `Inquire about ${project.title}` : `Visit ${project.title}`}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 text-primary text-xs font-semibold transition-all duration-300 active:scale-95 border border-primary/10"
          >
            <FaExternalLinkAlt size={12} />
            <span>{isGmailUrl ? 'Inquire' : 'Live Demo'}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile', 'Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-surface/80">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Portfolio</h3>
            <h2 className="text-3xl md:text-5xl font-black">Featured Projects</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'bg-white/80 dark:bg-slate-950/70 text-text-secondary hover:text-primary border border-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
