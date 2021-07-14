import Container from '@components/Container';
import { ArrowRight } from '@components/Icons';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <a href="#" className={styles.footerNews}>
          <Typography tagName={TypographyTag.Span} variant={TypographyVariants.Caption}>
            Join the newsletter
          </Typography>
          <ArrowRight />
        </a>
        <div className={styles.footerSocial}>
          <a href="#">
            <Typography tagName={TypographyTag.Span} variant={TypographyVariants.Caption}>
              Social Media
            </Typography>
          </a>
          <a href="#">
            <Typography tagName={TypographyTag.Span} variant={TypographyVariants.Caption}>
              Facebook
            </Typography>
          </a>
          <a href="#">
            <Typography tagName={TypographyTag.Span} variant={TypographyVariants.Caption}>
              Instagram
            </Typography>
          </a>
          <a href="#">
            <Typography tagName={TypographyTag.Span} variant={TypographyVariants.Caption}>
              Twitter
            </Typography>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
