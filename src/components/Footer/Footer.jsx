import { motion } from 'framer-motion';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.copy}>
            © 2026 Jithin Manjunadh
          </div>
        </motion.div>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="mailto:jithinmanjunadh2003@gmail.com">Email</a>
          <a href="https://github.com/JithinManjunadh" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jithin-manjunadh-narra-32631233b/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/JithinManjunadh/" target="_blank" rel="noreferrer">LeetCode</a>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;