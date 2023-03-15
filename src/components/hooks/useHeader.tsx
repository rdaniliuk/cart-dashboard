import { useEffect, useRef } from 'react';
import styles from '../Header/Header.module.css';

export function useHeader() {
  const headerWrapper = useRef<HTMLDivElement | null>(null);

  const scroll = () => {
    if (headerWrapper.current) {
      window.pageYOffset > 0
        ? headerWrapper.current.classList.add(`${styles.sticky}`)
        : headerWrapper.current.classList.remove(`${styles.sticky}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
  }, []);

  return headerWrapper;
}
