import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-white/70 dark:border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
                {project.title}
              </h1>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-lg border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Links
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                >
                  <FaGithub size={18} />
                  View Source
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-sm"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200/60 bg-slate-50/80 px-2.5 py-1 text-xs font-semibold text-text-secondary dark:border-white/10 dark:bg-slate-900/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary" size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Challenges Faced
              </h2>
              <ul className="space-y-4">
                {project.problems.map((problem, index) => (
                  <li key={index} className="text-sm text-text-secondary leading-relaxed">
                    <span className="font-bold text-primary">{String(index + 1).padStart(2, '0')}.</span>{' '}
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
