import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { socialLinks } from '../data/profile';

const MobileMenu = ({ setIsOpen, links }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-white dark:bg-slate-900 md:hidden"
    >
      <div className="flex flex-col h-full p-8">
        <div className="flex justify-between items-center mb-12">
          <span className="text-2xl font-bold text-primary">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close navigation menu" className="text-slate-900 dark:text-white">
            <HiX size={32} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 mb-4">Let's connect</p>
          <div className="flex space-x-6 text-xl">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
