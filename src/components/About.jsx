import { motion } from "framer-motion";
import { FaDownload, FaAward, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { profile } from "../data/profile";

const About = () => {
  const iconMap = [<FaAward />, <FaProjectDiagram />, <FaUsers />];
  const stats = [
    ...profile.stats.map((stat, index) => ({ ...stat, icon: iconMap[index] })),
  ];

  return (
    <section
      id="about"
      className="section-padding bg-surface/80 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-white/70 dark:border-white/10">
              <img
                src="/about-image.jpg"
                alt="Working"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/18 via-transparent to-accent/12 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/90 dark:bg-slate-950/90 p-6 rounded-lg shadow-xl shadow-primary/10 border-l-4 border-primary backdrop-blur">
              <span className="block text-3xl font-bold text-primary">
                {profile.stats[0].value}
              </span>
              <span className="text-sm font-medium text-text-secondary">
                Practical Experience
              </span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-semibold mb-4 uppercase tracking-widest text-sm">
              About Me
            </h3>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              I Build Modern Web Experiences That Scale
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              Full Stack Developer with 1 year of practical experience
              developing responsive and scalable web applications using React,
              Next.js, Node.js, Express.js, MongoDB, and SQL. Skilled in
              creating modern UI/UX experiences with Tailwind CSS and Bootstrap.
            </p>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Passionate about writing clean, efficient, and maintainable code
              while building high-performance applications. Experienced in
              frontend development, backend APIs, database integration, and
              delivering user-focused solutions with modern development
              practices.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="text-center p-4 bg-white/85 dark:bg-slate-950/70 rounded-lg shadow-lg shadow-slate-900/5 border border-primary/10"
                >
                  <div className="text-primary mb-2 flex justify-center text-xl">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
