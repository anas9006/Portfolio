import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const SkillRow = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ x: 4 }}
      className="relative overflow-hidden p-4 sm:p-5 rounded-xl border border-slate-200/70 dark:border-slate-700/80 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3 min-w-[180px]">
          <div className={`p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/60 ${skill.color} text-2xl group-hover:scale-110 transition-transform duration-300`}>
            <skill.icon />
          </div>
          <h4 className="font-semibold text-base sm:text-lg">{skill.name}</h4>
        </div>
        <div className="flex-1 flex items-center gap-3">
          <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-indigo-500 to-accent"
            />
          </div>
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 min-w-[64px] text-center">
            {skill.level}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="container-custom">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm mb-4 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
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
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto"
          >
            I've spent the last several months building across the stack to deliver clean, responsive digital experiences.
          </motion.p>
        </div>

        <div className="relative space-y-16">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center">
                <span className="w-10 sm:w-12 h-[2px] bg-primary mr-4"></span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillRow key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
