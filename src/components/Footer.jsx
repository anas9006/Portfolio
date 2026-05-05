import { FaChevronUp } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/80 dark:bg-slate-950/85 border-t border-primary/10 py-12 backdrop-blur">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-black text-primary">
              Anas<span className="text-slate-900 dark:text-white">.Dev</span>
            </a>
            <p className="mt-4 text-text-secondary max-w-xs">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          <div className="flex gap-8">
            <ul className="flex flex-col gap-2">
              <li className="font-bold mb-2">Quick Links</li>
              <li><a href="#home" className="text-text-secondary hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-secondary hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-text-secondary hover:text-primary transition-colors">Projects</a></li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-bold mb-2">Services</li>
              <li className="text-text-secondary">Web Development</li>
              <li className="text-text-secondary">UI/UX Design</li>
              <li className="text-text-secondary">Consultancy</li>
            </ul>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-4 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all group"
          >
            <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
