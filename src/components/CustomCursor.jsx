import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const mouseX = useMotionValue(-120);
  const mouseY = useMotionValue(-120);
  const springX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return undefined;

    const handlePointerMove = (event) => {
      setIsActive(true);
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handlePointerLeave = () => setIsActive(false);

    window.addEventListener('pointermove', handlePointerMove);
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden md:block" aria-hidden="true">
      <motion.div
        className="cursor-backflow"
        style={{ x: springX, y: springY }}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: springX, y: springY }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.7 }}
      />
      <motion.div
        className="cursor-core"
        style={{ x: mouseX, y: mouseY }}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </div>
  );
};

export default CustomCursor;
