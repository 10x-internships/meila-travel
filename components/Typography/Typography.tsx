import clsx from 'clsx';
import React from 'react';

import { TypographyTag, TypographyVariants } from './types';

import styles from './Typography.module.css';

type TypographyProps = {
  tagName?: TypographyTag;
  variant?: TypographyVariants;
  className?: string;
};

const Typography: React.FC<TypographyProps> = (props) => {
  const { tagName: Tag = 'span', variant = 'body', className, children, ...others } = props;

  return (
    <Tag className={clsx(styles[variant], className)} {...others}>
      {children}
    </Tag>
  );
};

export default Typography;
