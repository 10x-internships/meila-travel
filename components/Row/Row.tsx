import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { AlignPosition, JustifyPosition } from './types';

import styles from './Row.module.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  alignItem?: AlignPosition;
  justifyContent?: JustifyPosition;
  noWrap?: boolean;
}

const Row: React.FC<RowProps> = ({ alignItem, justifyContent, noWrap, className, children, ...others }) => {
  return (
    <div
      className={clsx(
        styles.row,
        alignItem && styles[`align-${alignItem}`],
        justifyContent && styles[`justify-${justifyContent}`],
        noWrap && styles.nowrap,
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Row;
export { AlignPosition, JustifyPosition };
