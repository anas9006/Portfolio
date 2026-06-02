import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />

      <div className="border-b border-slate-200/80 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 dark:border-white/10">
        <h3 className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary flex-shrink-0" />
          {category.category}
          <span className="ml-auto text-[10px] sm:text-xs font-normal text-text-secondary">({category.skills.length})</span>
        </h3>
      </div>

      <div className="p-3 sm:p-4 md:p-5">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
              whileHover={{ scale: 1.05, y: -1 }}
              className={`inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 rounded-md md:rounded-lg border border-slate-200/60 bg-slate-50/80 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 text-[11px] sm:text-xs md:text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:border-primary/30 dark:border-white/10 dark:bg-slate-900/60 ${skill.color}`}
            >
              <skill.icon className="text-[10px] sm:text-sm md:text-base flex-shrink-0" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />
      <div className="container-custom">
        <div className="relative text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-primary font-semibold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 bg-primary/10 border border-primary/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
          >
            <span className="w-1 h-1 rounded-full bg-primary" />
            My Expertise
            <span className="w-1 h-1 rounded-full bg-primary" />
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 leading-tight"
          >
            Practical Skills by Area
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
          >
            A compact view of the frontend, backend, and tooling strengths I use to build complete web applications.
          </motion.p>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
