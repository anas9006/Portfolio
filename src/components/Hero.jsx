import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { profile } from "../data/profile";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const roles = useMemo(
    () => (profile.roles?.length ? profile.roles : [profile.role]),
    [],
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const activeRole = roles[roleIndex];
  const typedRole = activeRole.slice(0, letterCount);

  useEffect(() => {
    const isWordComplete = letterCount === activeRole.length;
    const isWordCleared = letterCount === 0;
    const delay = isWordComplete && !isDeleting ? 1400 : isDeleting ? 45 : 85;

    const timeoutId = setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordCleared) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        return;
      }

      setLetterCount((currentCount) => currentCount + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [activeRole, isDeleting, letterCount, roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(37,99,235,0.1),transparent_38%,rgba(15,118,110,0.08)_78%,transparent)]" />
        <motion.div
          className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          animate={{ x: ["-35%", "35%"], opacity: [0.12, 0.42, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          animate={{ x: ["30%", "-30%"], opacity: [0.08, 0.32, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="text-primary font-semibold mb-3 flex items-center uppercase tracking-[0.2em] text-xs sm:text-sm"
          >
            <span className="w-8 h-[2px] bg-primary mr-3"></span>
            Hello, I am
          </motion.h2>
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Muhammad
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Anas
            </h1>
          </div>
          <div className="min-h-16 sm:min-h-20 mb-4 sm:mb-6">
            <div className="animated-sheen inline-flex flex-col gap-2 rounded-lg border border-primary/25 bg-white/75 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl shadow-primary/10 backdrop-blur-md dark:bg-slate-950/70">
              <span className="text-lg sm:text-xl md:text-2xl text-text-secondary font-semibold">
                {typedRole}
                <span className="ml-1 inline-block h-6 sm:h-7 w-[2px] translate-y-0.5 sm:translate-y-1 bg-primary animate-pulse" />
              </span>
            </div>
          </div>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Crafting beautiful, high-performance web applications with a focus
            on user experience and clean architecture.
          </p>
          <div className="grid max-w-xl grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 sm:p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/55"
              >
                <span className="block text-lg sm:text-xl md:text-2xl font-black text-text-primary">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[9px] sm:text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-4">
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group text-sm sm:text-base"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary text-sm sm:text-base">
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
            >
              <FaDownload size={15} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 md:order-2 mt-4 md:mt-0 animate-float-soft"
        >
          <div className="relative w-full aspect-square max-w-[13rem] sm:max-w-[18rem] md:max-w-sm lg:max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full border border-primary/25 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-accent/20 animate-spin-reverse-slow" />
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/16 via-transparent to-accent/12 blur-xl" />

            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/90 dark:border-slate-900 shadow-2xl shadow-primary/20">
              <img
                src="/profile.png"
                alt={`${profile.name} profile`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-emerald-500/20 bg-white/85 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/5 backdrop-blur dark:bg-slate-950/75 dark:text-emerald-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
