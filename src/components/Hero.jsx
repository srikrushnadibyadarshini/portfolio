import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);
  const [pos, setPos] = useState(null);

  const handleMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="home"
      className={styles.hero}
      ref={heroRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
    >
      {pos && (
        <>
          <div className={styles.gridLineX} style={{ top: pos.y }} />
          <div className={styles.gridLineY} style={{ left: pos.x }} />
        </>
      )}

      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>// frontend developer</p>
          <h1 className={styles.name}>
            Srikrushna<br />Dibyadarshini<br />Behera
          </h1>
          <p className={styles.role}>React Developer</p>
          <p className={styles.bio}>
            Building responsive, modern, and user-friendly web applications with
            React and JavaScript. Passionate about creating clean user experiences
            and solving real-world problems through technology. Currently pursuing
            B.Tech in Electronics &amp; Instrumentation Engineering at NIT Rourkela.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>View projects</a>
            <a href="#contact" className={styles.secondaryBtn}>Get in touch</a>
          </div>
        </motion.div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className={styles.photoFrame}>
            <img src={profile} alt="Srikrushna Dibyadarshini Behera" className={styles.photo} />
          </div>
          <div className={styles.cornerTag}>NIT Rourkela</div>
        </motion.div>
      </div>
    </section>
  );
}
