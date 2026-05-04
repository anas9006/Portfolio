import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center justify-between w-full mb-12 ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="hidden md:block w-5/12" />
      
      {/* Icon Node */}
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full justify-center text-white">
        {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
      </div>

      {/* Content Card */}
      <div className="order-1 bg-white dark:bg-slate-800 rounded-2xl shadow-lg w-full md:w-5/12 px-6 py-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">{item.period}</span>
        <h3 className="font-bold text-xl mt-1">{item.title}</h3>
        <h4 className="text-text-secondary font-medium mb-3">{item.company} | {item.location}</h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">My Journey</h3>
          <h2 className="text-3xl md:text-5xl font-bold">Experience & Education</h2>
        </div>

        <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
          {/* Vertical Line */}
          <div className="absolute border-opacity-20 border-slate-300 dark:border-slate-700 h-full border left-1/2 hidden md:block"></div>
          
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
