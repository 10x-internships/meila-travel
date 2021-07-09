import Image from 'next/image';

import Container from '@components/Container';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';

import styles from './Destinations.module.css';
import europe from 'public/images/europe.jpg';
import { ArrowRight } from '@components/Icons';

const Destinations = () => {
  return (
    <section className={styles.destinations}>
      <Container>
        <Typography tagName={TypographyTag.H2} variant={TypographyVariants.SubHeading}>
          Destinations
        </Typography>
        <div className={styles.slider}>
          <div className={styles['slider-wrapper']}>
            <div className={styles['slider-item']}>
              <Image src={europe} alt="Europe" objectFit="cover" layout="responsive" />
              <div className={styles['slider-info']}>
                <h3>Europe</h3>
                <span>
                  Read more <ArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles['slider-category-a']}>
        <ul className={styles['slider-category']}>
          <li>Australia</li>
          <li>Asia</li>
          <li className={styles.active}>Europe</li>
          <li>Africa</li>
          <li>South Africa</li>
        </ul>
      </div>
    </section>
  );
};

export default Destinations;
