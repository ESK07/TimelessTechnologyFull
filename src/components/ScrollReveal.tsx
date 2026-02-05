import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { scrollReveal } from '../utils/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ children, delay = 0, className = '' }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={scrollReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
