import { FaChevronUp } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/80 dark:bg-slate-950/85 border-t border-primary/10 py-8 md:py-12 backdrop-blur">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl md:text-2xl font-black text-primary">
              Anas<span className="text-slate-900 dark:text-white">.Dev</span>
            </a>
            <p className="mt-2 md:mt-4 text-xs md:text-sm text-text-secondary max-w-xs">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          <div className="flex gap-6 md:gap-8">
            <ul className="flex flex-col gap-1 md:gap-2">
              <li className="font-bold text-sm md:text-base mb-1 md:mb-2">Quick Links</li>
              <li><a href="#about" className="text-xs md:text-sm text-text-secondary hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-xs md:text-sm text-text-secondary hover:text-primary transition-colors">Projects</a></li>
            </ul>
            <ul className="flex flex-col gap-1 md:gap-2">
              <li className="font-bold text-sm md:text-base mb-1 md:mb-2">Services</li>
              <li className="text-xs md:text-sm text-text-secondary">Web Development</li>
              <li className="text-xs md:text-sm text-text-secondary">UI/UX Design</li>
              <li className="text-xs md:text-sm text-text-secondary">Consultancy</li>
            </ul>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 md:p-4 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all group"
          >
            <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/10 text-center text-text-secondary text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
