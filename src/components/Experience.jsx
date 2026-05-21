import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-start md:items-center justify-between w-full mb-6 md:mb-12 gap-3 md:gap-0 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-5/12" />

      {/* Icon Node */}
      <motion.div
        whileHover={{ scale: 1.12, rotate: 8 }}
        className="z-20 flex-shrink-0 flex items-center order-1 bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/25 w-10 h-10 md:w-12 md:h-12 rounded-full justify-center text-white text-sm md:text-base"
      >
        {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
      </motion.div>

      <div className="order-1 bg-white/90 dark:bg-slate-950/75 rounded-lg shadow-lg shadow-slate-900/5 w-[calc(100%-3.5rem)] md:w-5/12 px-3 py-3 sm:px-6 sm:py-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 transition-all border-t-4 border-primary backdrop-blur">
        <span className="text-primary font-bold text-[10px] sm:text-sm uppercase tracking-wider">
          {item.period}
        </span>
        <h3 className="font-bold text-sm sm:text-xl mt-0.5 sm:mt-1">{item.title}</h3>
        <h4 className="text-text-secondary text-[10px] sm:text-sm font-medium mb-1.5 sm:mb-3">
          {item.company} | {item.location}
        </h4>
        <p className="text-[10px] sm:text-sm text-text-secondary leading-relaxed">
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
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-4">
            My Journey
          </h3>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black">
            Experience & Education
          </h2>
        </div>

        <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
          {/* Vertical Line */}
          <div className="absolute h-full border left-5 md:left-1/2 border-primary/20 pointer-events-none"></div>

          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
