import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-surface/80">
      <div className="container-custom">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h3 className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-4">Portfolio</h3>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black">Featured Projects</h2>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <Link
            to="/projects"
            className="btn-primary inline-flex items-center gap-2 group text-sm sm:text-base"
          >
            See More Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
