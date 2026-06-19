import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo} onClick={() => handleClick('home')}>
        SDB<span className={styles.dot}>.</span>
      </a>

      <nav className={styles.links}>
        {LINKS.map((link) => (
          <button
            key={link.id}
            className={`${styles.link} ${active === link.id ? styles.active : ''}`}
            onClick={() => handleClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <a
        className={styles.cta}
        href="mailto:srikrushna.dev@gmail.com"
      >
        Say hello
      </a>

      <button
        className={styles.burger}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => handleClick(link.id)}>
              {link.label}
            </button>
          ))}
          <a href="mailto:srikrushna.dev@gmail.com">Say hello</a>
        </div>
      )}
    </header>
  );
}
