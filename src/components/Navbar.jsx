import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiMoon, HiSun } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/75 dark:bg-slate-950/75 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-white/50 dark:border-white/10 py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="text-2xl font-black text-primary">
            Anas<span className="text-slate-900 dark:text-white">.Dev</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHome ? (
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
                    className="relative font-semibold hover:text-primary transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          ) : (
            <Link to="/" className="relative font-semibold hover:text-primary transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-primary after:to-accent">
              Back to Home
            </Link>
          )}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 border border-primary/15"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white border border-primary/15"
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
        {isOpen && <MobileMenu setIsOpen={setIsOpen} links={navLinks} isHome={isHome} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
