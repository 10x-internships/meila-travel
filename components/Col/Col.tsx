import clsx from 'clsx';
import styles from './Col.module.css';

export enum ColNum {
  ONE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
}

type ColProps = {
  col?: ColNum; // column for mobile device
  md?: ColNum; // column for tablet portrait device
  lg?: ColNum; // column for tablet landscape device
  xl?: ColNum; // column for desktop device
  className?: string;
};

const Col: React.FC<ColProps> = (props) => {
  const { col, md, lg, xl, className, children } = props;
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
    >
      {children}
    </div>
  );
};

export default Col;
