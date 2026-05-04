import { motion } from 'framer-motion';
import { FaDownload, FaAward, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import { profile } from '../data/profile';

const About = () => {
  const stats = [
    { label: 'Experience', value: '9 mo', icon: <FaAward /> },
    { label: 'Projects Completed', value: '10+', icon: <FaProjectDiagram /> },
    { label: 'Happy Clients', value: '5+', icon: <FaUsers /> },
  ];

  return (
    <section id="about" className="section-padding bg-surface overflow-hidden">
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/about-image.jpg" 
                alt="Working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border-l-4 border-primary">
              <span className="block text-3xl font-bold text-primary">9 mo</span>
              <span className="text-sm font-medium text-text-secondary">Practical Experience</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-semibold mb-4 uppercase tracking-widest text-sm">About Me</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">I Build Modern Web Experiences That Scale</h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I am a passionate Full Stack Developer with 8 to 9 months of practical experience creating dynamic and user-centric web applications. I specialize in React, Node.js, and modern CSS frameworks like Tailwind.
            </p>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              My approach focuses on writing clean, maintainable code and delivering high-quality products that meet client needs. I love solving complex problems and staying up-to-date with the latest tech trends.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="text-primary mb-2 flex justify-center text-xl">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href={profile.resumeUrl} download className="btn-primary flex items-center gap-2">
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
