import clsx from 'clsx';
import styles from './Container.module.css';

const Container: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
