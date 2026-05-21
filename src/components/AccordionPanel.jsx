import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionPanel = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:cursor-default flex w-full items-center justify-between gap-2 p-5 sm:p-6"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {title}
        </h2>
        <FaChevronDown
          className={`text-text-secondary transition-transform duration-300 lg:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={14}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[2000px] lg:opacity-100'
        }`}
      >
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionPanel;
