import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { skillGroups } from '../../data/portfolioData';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const skillHover = {
  y: -3,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 22,
  },
};

function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.wrapper}>

        <motion.div
          className={styles.head}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.tag}>STACK & TOOLS</div>
          <h2 className={styles.title}>What I work with.</h2>
        </motion.div>

        <motion.div
          className={styles.layout}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>

              <div className={styles.groupTitle}>
                {group.title}
              </div>

              <motion.div
                className={styles.grid}
                variants={cardStagger}
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.value}
                    className={styles.skill}
                    variants={card}
                    whileHover={skillHover}
                  >
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;