import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

function Navbar() {
  return (
    <motion.nav
      className={styles.nav}
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <div className={styles.inner}>

        <motion.div className={styles.logo} variants={itemVariants}>
          Jithin<span>.</span>
        </motion.div>

        <motion.div className={styles.links}>
          
          <motion.a href="#projects" variants={itemVariants}>
            Projects
          </motion.a>

          <motion.a href="#skills" variants={itemVariants}>
            Skills
          </motion.a>

          <motion.a href="#education" variants={itemVariants}>
            Education
          </motion.a>

          <motion.a href="#contact" variants={itemVariants}>
            Contact
          </motion.a>
        </motion.div>


      </div>
    </motion.nav>
  );
}

export default Navbar;