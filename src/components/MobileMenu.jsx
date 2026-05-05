import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { socialLinks } from '../data/profile';

const MobileMenu = ({ setIsOpen, links }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      role="dialog"
      aria-modal="true"
      className="md:hidden"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        width: '100vw',
        minHeight: '100dvh',
        overflowY: 'auto',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
      }}
    >
      <div className="flex min-h-dvh flex-col px-8 py-10 bg-[linear-gradient(135deg,rgba(6,182,212,0.14),transparent_42%,rgba(244,63,94,0.12))]">
        <div className="flex justify-between items-center mb-10">
          <span className="text-2xl font-black text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="rounded-full p-2 text-slate-900 transition-colors hover:bg-white/70 dark:text-white dark:hover:bg-slate-900 border border-primary/10"
          >
            <HiX size={32} />
          </button>
        </div>

        <ul className="flex flex-col gap-5">
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
                className="block rounded-lg py-2 text-2xl font-bold leading-tight hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-10 border-t border-primary/10">
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
