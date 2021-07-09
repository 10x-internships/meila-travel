import { AllHTMLAttributes } from 'react';
import Typography, { TypographyVariants } from '@components/Typography';
import { Search } from '@components/Icons';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Nav.module.css';

interface NavProps extends AllHTMLAttributes<HTMLElement> {
  navData: { name: string; route: string }[];
  haveSearch?: boolean;
}

const Nav = ({ navData, haveSearch, className, ...others }: NavProps) => {
  return (
    <nav className={clsx(styles.nav, className)} {...others}>
      <ul className={styles['nav-list']}>
        {navData.map((navItem) => (
          <li className={styles['nav-item']} key={navItem.name}>
            <Link href={navItem.route}>
              <a className={styles['nav-link']}>
                <Typography variant={TypographyVariants.Caption}>{navItem.name}</Typography>
              </a>
            </Link>
          </li>
        ))}
        {haveSearch && (
          <li className={styles['nav-item']}>
            <div className={styles['nav-search']}>
              <Search />
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
