import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4 flex items-center"
          >
            <span className="w-8 h-[2px] bg-primary mr-3"></span>
            Hello, I am
          </motion.h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {profile.name.split(' ')[0]} <span className="text-primary">Infinity Byte</span>
          </h1>
          <div className="h-12 mb-6">
            <span className="text-xl md:text-2xl text-text-secondary font-medium border-r-2 border-primary pr-2 animate-pulse">
              {profile.role}
            </span>
          </div>
          <p className="text-text-secondary text-lg mb-8 max-w-lg">
            Crafting beautiful, high-performance web applications with a focus on user experience and clean architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary flex items-center gap-2">
              <FaDownload size={16} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 md:order-2 mt-4 md:mt-0"
        >
          <div className="relative w-full aspect-square max-w-[18rem] md:max-w-md mx-auto">
            {/* Decorative circles */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border-2 border-accent/20 rounded-full animate-spin-reverse-slow" />
            
            {/* Main image container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img 
                src="/profile.png" 
                alt={`${profile.name} profile`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
