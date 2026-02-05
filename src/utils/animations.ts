import { Variants } from 'framer-motion';

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Card hover animation
export const cardHover = {
  scale: 1.02,
  y: -5
};

// Button tap animation
export const buttonTap = {
  scale: 0.98
};

// Button hover animation
export const buttonHover = {
  scale: 1.05
};

// Image zoom on hover
export const imageZoom = {
  scale: 1.1
};

// Scroll-triggered animation variants
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.5 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};
