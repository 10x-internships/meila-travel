import { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { ArrowRight, ArrowLeft } from '@components/Icons';

import styles from './styles/DestinationsSlider.module.css';
import sliderData from './sliderData';

const sliderPaging = ['Asia', 'Europe', 'Africa', 'Asia', 'Europe', 'Africa'];

const DestinationsSlider = () => {
  const sliderSettings = {
    className: 'center',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // eslint-disable-next-line react/display-name
    appendDots: (dots: HTMLLIElement) => <ul>{dots}</ul>,
    // eslint-disable-next-line react/display-name
    customPaging: (i: number) => <span>{sliderPaging[i]}</span>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: true,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: true,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider>(null);
  const nextSlide = () => sliderRef.current?.slickNext();
  const preSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...sliderSettings} className={styles.DestinationSlider} ref={sliderRef}>
        {sliderData.map((slider) => (
          <div key={slider.name} className={styles.sliderItem}>
            <Image src={slider.image} alt="Africa" objectFit="cover" layout="fill" placeholder="blur" />
            <div className={styles.sliderInfo}>
              <h3>{slider.name}</h3>
              <span>
                Read more <ArrowRight />
              </span>
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.sliderButton}>
        <button onClick={preSlide}>
          <ArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DestinationsSlider;
