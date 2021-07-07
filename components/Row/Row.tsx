import clsx from 'clsx';
import styles from './Row.module.css';

enum AlignPosition {
  Center = 'center',
  Start = 'start',
  End = 'end',
  Baseline = 'baseline',
}

enum JustifyPosition {
  Between = 'between',
  Center = 'center',
}

type RowProps = {
  alignItem?: AlignPosition;
  justifyContent?: JustifyPosition;
  noWrap?: boolean;
  className?: string;
};

const Row: React.FC<RowProps> = (props) => {
  const { alignItem, justifyContent, noWrap, className, children } = props;
  return (
    <div
      className={clsx(
        styles.row,
        alignItem && styles[`align-${alignItem}`],
        justifyContent && styles[`justify-${justifyContent}`],
        noWrap && styles.nowrap,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Row;
export { AlignPosition, JustifyPosition };
