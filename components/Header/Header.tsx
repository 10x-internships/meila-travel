import { useState } from 'react';
import clsx from 'clsx';
import Nav from '@components/Nav';
import Container from '@components/Container';
import Image from 'next/image';
import Link from 'next/link';
import navData from '@components/Nav/navData';

import styles from './Header.module.css';
import logo from 'public/images/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={clsx(styles.header, isNavOpen && styles.active)}>
      <Container className={styles['header-container']}>
        {/* Left nav */}
        <Nav navData={navData.navLeft} />
        <Link href="/">
          <a className={styles['header-logo']}>
            <Image src={logo} alt="Meila travel" />
          </a>
        </Link>
        {/* Right nav */}
        <Nav navData={navData.navRight} haveSearch />
        {/* Mobile nav */}
        <Nav navData={[...navData.navRight, ...navData.navLeft]} className={styles['header-nav-mobile']} />
        <div className={styles['header-overlay']} onClick={() => setIsNavOpen(false)}></div>
        <div className={styles['header-toggle']} onClick={() => setIsNavOpen(true)}>
          <span></span>
          <span></span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
