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

      <div className="border-b border-slate-200/80 px-4 py-3 sm:px-5 sm:py-4 dark:border-white/10">
        <h3 className="flex items-center gap-3 text-base sm:text-lg font-bold">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          {category.category}
        </h3>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`inline-flex items-center gap-2 rounded-lg border border-slate-200/60 bg-slate-50/80 px-3 py-2 text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:border-primary/30 dark:border-white/10 dark:bg-slate-900/60 ${skill.color}`}
            >
              <skill.icon className="text-base flex-shrink-0" />
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
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            My Expertise
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight"
          >
            Practical Skills by Area
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            A compact view of the frontend, backend, and tooling strengths I use to build complete web applications.
          </motion.p>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
