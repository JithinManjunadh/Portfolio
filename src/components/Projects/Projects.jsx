import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

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

function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.wrapper}>

        <motion.div
          className={styles.head}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.tagtext}>FEATURED WORK</div>
          <h2 className={styles.title}>Projects I’ve built.</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;