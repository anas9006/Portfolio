import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const SkillTable = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />

      <div className="border-b border-slate-200/80 px-5 py-4 dark:border-white/10">
        <h3 className="flex items-center gap-3 text-lg font-bold">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          {category.category}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] text-left">
          <thead>
            <tr className="border-b border-slate-200/70 text-xs uppercase tracking-[0.18em] text-text-secondary dark:border-white/10">
              <th className="px-5 py-3 font-semibold">Skill</th>
              <th className="px-5 py-3 font-semibold text-right">Level</th>
            </tr>
          </thead>
          <tbody>
            {category.skills.map((skill, skillIndex) => (
              <motion.tr
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + skillIndex * 0.04 }}
                className="group border-b border-slate-100 last:border-0 hover:bg-slate-50/90 dark:border-white/5 dark:hover:bg-white/5"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl transition-transform group-hover:scale-105 dark:bg-slate-900 ${skill.color}`}>
                      <skill.icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold">{skill.name}</span>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.08 + skillIndex * 0.04 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="inline-flex min-w-14 justify-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {skill.level}%
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
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
        <div className="relative text-center max-w-3xl mx-auto mb-14">
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
            className="text-3xl md:text-5xl font-black mb-6 leading-tight"
          >
            Practical Skills by Area
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto"
          >
            A compact view of the frontend, backend, and tooling strengths I use to build complete web applications.
          </motion.p>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <SkillTable key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
