import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './Container.module.css';

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...others }) => {
  return (
    <div className={clsx(styles.container, className)} {...others}>
      {children}
    </div>
  );
};

export default Container;
