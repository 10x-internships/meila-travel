import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './Col.module.css';

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  col?: number; // column for mobile device
  md?: number; // column for tablet portrait device
  lg?: number; // column for tablet landscape device
  xl?: number; // column for desktop device
}

const Col: React.FC<ColProps> = ({ col, md, lg, xl, className, children, ...others }) => {
  return (
    <div
      className={clsx(
        styles.col,
        col && styles[`col-${col}`],
        md && styles[`col-md-${md}`],
        lg && styles[`col-lg-${lg}`],
        xl && styles[`col-xl-${xl}`],
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Col;
