import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="text-8xl sm:text-9xl md:text-[10rem] font-black text-primary leading-none"
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Page Not Found
            </h2>
            <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/"
              className="btn-primary flex items-center gap-2 group text-sm sm:text-base"
            >
              <FaHome className="group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
            >
              <FaArrowLeft />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute left-4 sm:left-12 top-1/4 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ x: ['-20%', '20%'], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-4 sm:right-12 bottom-1/4 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        animate={{ x: ['20%', '-20%'], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(37,99,235,0.05),transparent_38%,rgba(15,118,110,0.04)_78%,transparent)] pointer-events-none" />
    </section>
  );
};

export default NotFound;
