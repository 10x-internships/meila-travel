import Link from 'next/link';

import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';
import { ArrowRight } from '@components/Icons';

import styles from './styles/HeroTopic.module.css';

type HeroTopicProps = {
  title: string;
  author: string;
  link: string;
};

const HeroTopic = ({ title, author, link }: HeroTopicProps) => {
  return (
    <article className={styles['hero-topic']}>
      <Link href={link} passHref>
        <a className={styles['hero-topic-link']}>
          <span>
            <Typography tagName={TypographyTag.H3} variant={TypographyVariants.Title}>
              {title}
            </Typography>
            <Typography tagName={TypographyTag.Paragraph} className={styles['hero-topic-author']}>
              by {author}
            </Typography>
          </span>
          <span>
            <ArrowRight />
          </span>
        </a>
      </Link>
    </article>
  );
};

export default HeroTopic;
