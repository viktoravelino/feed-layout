import styles from './Header.module.css';

import logo from '../assets/images/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="Logo" />
       */}
      <h4>Feed Layout</h4>
    </header>
  );
}
