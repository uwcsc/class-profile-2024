import { Color } from "@/utils/Color";
import { useState } from "react";

import styles from "./QuotationCarousel.module.css";

interface QuotationCarouselProps {
  data: string[];
  /** Width of the entire carousel including the buttons, in px. */
  width?: number;
  /** Minimum height of the carousel, in px. */
  height?: number;
  /** Diameter of the background circles, in px. Set to 0 for no circles. */
  circleDiameter?: number;
  className?: string;
  /** Minimum width of the graph. */
  minWidth?: number;
}

interface CarouselButtonProps {
  onClick: () => void;
  isPrevious?: boolean;
}

export function QuotationCarousel(props: QuotationCarouselProps) {
  const { data, width = 600, height = 100, circleDiameter = 120, minWidth = 600, className } = props;
  const actualWidth = width < minWidth ? minWidth : width;
  const [activeIdx, setActiveIdx] = useState(0);

  function showNextCard() {
    setActiveIdx((activeIdx + 1) % data.length);
  }

  function showPreviousCard() {
    setActiveIdx((activeIdx - 1 + data.length) % data.length);
  }

  return (
    <section
      className={className ? `${className} ${styles.carousel}` : styles.carousel}
      style={{
        width: `${actualWidth / 16}rem`,
        minHeight: `${height / 16}rem`,
      }}>
      <Circle className={styles.circle} diameter={circleDiameter} />
      <Circle className={`${styles.right} ${styles.circle}`} diameter={circleDiameter} />
      <CarouselButton onClick={showPreviousCard} isPrevious />
      <div className={styles.card}>
        <QuotationMark className={styles.quotationMark} />
        <ul>
          {data.map((quote, idx) => (
            <li key={idx} className={idx !== activeIdx ? styles.hidden : ""}>
              <p>{quote}</p>
            </li>
          ))}
        </ul>
        <div className={styles.bottomRow}>
          <span>
            {activeIdx + 1}/{data.length}
          </span>
          <QuotationMark className={`${styles.right} ${styles.quotationMark}`} />
        </div>
      </div>
      <CarouselButton onClick={showNextCard} />
    </section>
  );
}

function Circle({ className, diameter }: { className: string; diameter: number }) {
  return (
    <div
      className={className}
      aria-hidden
      style={{
        width: `${diameter / 16}rem`,
        height: `${diameter / 16}rem`,
      }}
    />
  );
}

function CarouselButton({ isPrevious, onClick }: CarouselButtonProps) {
  return (
    <button className={styles.carouselButton} onClick={onClick}>
      <svg
        className={isPrevious ? `${styles.previous} ${styles.arrow}` : styles.arrow}
        width="39"
        height="72"
        viewBox="0 0 39 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4L34.4206 35.804C35.2926 36.7157 35.2597 38.1619 34.3471 39.0329L4 68"
          stroke={Color.primaryAccentLighter}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

function QuotationMark({ className }: { className: string }) {
  return (
    <svg className={className} aria-hidden width="68" height="56" viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.34 0.855375L31.1131 9.91768C28.9808 11.9315 27.0262 13.9454 25.2492 15.9592C23.5908 17.9731 22.2877 19.9869 21.34 22.0008C20.3923 24.0146 19.9185 25.9692 19.9185 27.8646C19.9185 29.4046 20.3331 30.7077 21.1623 31.7738C21.9915 32.84 22.9392 33.8469 24.0054 34.7946C25.0715 35.7423 26.0192 36.8677 26.8485 38.1708C27.6777 39.4738 28.0923 41.1323 28.0923 43.1461C28.0923 46.5815 26.8485 49.5431 24.3608 52.0308C21.9915 54.5185 18.8523 55.7623 14.9431 55.7623C11.1523 55.7623 7.71693 54.2223 4.63693 51.1423C1.67539 48.0623 0.194616 44.1531 0.194616 39.4146C0.194616 35.6238 0.964617 31.7146 2.50462 27.6869C4.16308 23.5408 6.53231 19.2169 9.61231 14.7154C12.6923 10.2138 16.6015 5.59383 21.34 0.855375ZM57.7669 0.855375L67.54 9.91768C65.4077 11.9315 63.4531 13.9454 61.6762 15.9592C60.0177 17.9731 58.7146 19.9869 57.7669 22.0008C56.8192 24.0146 56.3454 25.9692 56.3454 27.8646C56.3454 29.4046 56.76 30.7077 57.5892 31.7738C58.4185 32.84 59.3662 33.8469 60.4323 34.7946C61.4985 35.7423 62.4462 36.8677 63.2754 38.1708C64.1046 39.4738 64.5192 41.1323 64.5192 43.1461C64.5192 46.5815 63.2754 49.5431 60.7877 52.0308C58.4185 54.5185 55.2792 55.7623 51.37 55.7623C47.5792 55.7623 44.1439 54.2223 41.0639 51.1423C38.1023 48.0623 36.6215 44.1531 36.6215 39.4146C36.6215 35.6238 37.3915 31.7146 38.9315 27.6869C40.59 23.5408 42.9592 19.2169 46.0392 14.7154C49.1192 10.2138 53.0285 5.59383 57.7669 0.855375Z"
        fill={Color.primaryText}
      />
    </svg>
  );
}
