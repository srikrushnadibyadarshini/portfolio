import { motion } from 'framer-motion';
import styles from './About.module.css';

const INTERESTS = ['Problem-solving', 'Badminton', 'Speed cubing'];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.p>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className={styles.lead}>
          <h2 className={styles.heading}>
            Hello! I'm Srikrushna Dibyadarshini Behera, a Frontend Developer and
            engineering student at NIT Rourkela.
          </h2>
        </div>

        <div className={styles.body}>
          <p>
            I enjoy transforming ideas into interactive web experiences using
            modern frontend technologies. My interests extend beyond coding to
            problem-solving, badminton, and speed cubing, all of which have
            helped me develop analytical thinking, persistence, and attention
            to detail.
          </p>
          <p>
            I am constantly learning new technologies and building projects
            that improve my development skills while solving practical problems.
          </p>

          <div className={styles.tags}>
            {INTERESTS.map((item) => (
              <span key={item} className={styles.tag}>{item}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
