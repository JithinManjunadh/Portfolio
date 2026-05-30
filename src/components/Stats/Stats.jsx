import { motion } from 'framer-motion';
import { stats } from '../../data/portfolioData';
import styles from './Stats.module.css';

function Stats() {
  return (
    <section className={styles.stats}>
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className={styles.card}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.10,
          }}
          whileHover={{ y: -4 }}
        >
          <div className={styles.number}>
            {item.number}
          </div>

          <div className={styles.label}>
            {item.label}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;