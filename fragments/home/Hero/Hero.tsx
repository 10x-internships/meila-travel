import Image from 'next/image';

import Container from '@components/Container';
import Col from '@components/Col';
import Row from '@components/Row';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';
import { ArrowDown } from '@components/Icons';
import HeroTopic from './HeroTopic';

import styles from './styles/Hero.module.css';
import heroImage from 'public/images/hero-image.jpg';
import heroCTA from 'public/images/hero-cta.png';
import topicData from './topicData';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles['hero-container']}>
        <Row className={styles['hero-row']}>
          <Col className={styles['hero-info']} lg={4}>
            <Typography tagName={TypographyTag.H1} variant={TypographyVariants.Heading}>
              <span>Explore Banff & </span>
              <br />
              <span>Lake Louise,</span> <br />
              <span>Canada</span>
            </Typography>
            <Typography tagName={TypographyTag.Paragraph} className={styles['hero-description']}>
              Standing at the edge of Lake Louise - the soaring Victoria Glacier, canoes gliding through turquoise water
              - it’s easy to see why Lake Louise is one of the most popular stops in North America.
            </Typography>
            <div className={styles['hero-arrow-down']}>
              <ArrowDown />
            </div>
          </Col>
          <Col className={styles['hero-image']} col={8} md={6} lg={4}>
            <div>
              <Image src={heroImage} alt="A man standing on a rock" placeholder="blur" />
            </div>
            <div className={styles['hero-cta']}>
              <Image src={heroCTA} alt="Hero CTA" />
            </div>
          </Col>
          <Col className={styles['hero-topics']} md={12} lg={4}>
            <h2>Related topics</h2>
            {topicData.map((topic) => (
              <HeroTopic key={topic.id} {...topic} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
