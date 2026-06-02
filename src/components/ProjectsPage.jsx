import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-8">
          <div>
            <h3 className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-4">Portfolio</h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black">All Projects</h1>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
