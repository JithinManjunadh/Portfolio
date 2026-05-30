import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData';
import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.wrapper}>

        <div className={styles.head}>
          <div className={styles.tag}>EDUCATION</div>
          <h2 className={styles.title}>Academic background.</h2>
        </div>

        {education.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.topRow}>
              <div className={styles.degree}>
                {item.degree}
              </div>

              <div className={styles.duration}>
                {item.duration}
              </div>
            </div>


            <div className={styles.meta}>
              <span>{item.college}</span>
              <span>{item.cgpa}</span>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Education;