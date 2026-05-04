import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiMoon, HiSun } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary"
        >
          Anas<span className="text-slate-900 dark:text-white">.Dev</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-all hover:scale-110"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="text-slate-900 dark:text-white"
          >
            <HiMenuAlt3 size={30} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} links={navLinks} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
