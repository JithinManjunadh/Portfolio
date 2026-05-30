import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

function SectionHeader({ tag, title }) {
  return (
    <motion.div
      className={styles.head}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.tag}>
        {tag}
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionHeader;