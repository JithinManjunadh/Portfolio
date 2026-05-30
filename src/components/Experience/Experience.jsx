import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.wrapper}>

        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.tag}>EXPERIENCE</div>
          <h2 className={styles.title}>Internship</h2>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.6, 1],}, }}
          >

          <div className={styles.top}>
            <div className={styles.role}>
              Front-End Web Development Intern
            </div>

            <div className={styles.time}>
              Aug 2025 – Sept 2025
            </div>
          </div>

          <div className={styles.company}>
            Edunet Foundation (AICTE SkillsBuild Program)
          </div>

          <p className={styles.desc}>
            Completed a 6-week structured internship focused on front-end development.
            Built a project under mentor guidance, followed weekly milestones,
            and strengthened practical web development skills through hands-on execution.
          </p>

          <div className={styles.tags}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;