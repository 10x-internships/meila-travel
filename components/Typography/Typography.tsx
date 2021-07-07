import clsx from 'clsx';
import React from 'react';
import styles from './Typography.module.css';

enum TypographyTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Paragraph = 'p',
  Span = 'span',
}

enum TypographyVariants {
  Heading = 'heading',
  SubHeading = 'sub-heading',
  Body = 'body',
  Title = 'title',
  Caption = 'caption',
}

type TypographyProps = {
  tagName?: TypographyTag;
  variant?: TypographyVariants;
  className?: string;
};

const Typography: React.FC<TypographyProps> = (props) => {
  const { tagName: Tag = 'span', variant = 'body', className, children } = props;
  return <Tag className={clsx(styles[variant], className)}>{children}</Tag>;
};

export { TypographyVariants, TypographyTag };
export default Typography;
