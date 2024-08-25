import React from "react";

import styles from "./Timeline.module.css";

interface TimelineData {
  time: string;
  text: string;
}

interface TimelineProps {
  data: TimelineData[];
  /** Whether the time is transformed to uppercase. */
  isTimeUppercase?: boolean;
  /** Width of the middle timeline line, in pixels */
  lineWidth?: number;
  /** Width of the outer circles on the timeline, in pixels. */
  outerCircleWidth?: number;
  /** Width of the inner circles on the timeline, in pixels. */
  innerCircleWidth?: number;
  /** Width of text label, in pixels. */
  textWidth?: number;
  /** Distance between the time label AND the text label to middle line, in pixels. */
  gap?: number;
  className?: string;
}

export function Timeline({
  data,
  isTimeUppercase = true,
  lineWidth = 5,
  outerCircleWidth = 30,
  innerCircleWidth = 15,
  textWidth = 500,
  gap = 50,
  className,
}: TimelineProps) {
  const largerMiddleElement = outerCircleWidth > lineWidth ? outerCircleWidth : lineWidth;
  if (innerCircleWidth > outerCircleWidth) {
    throw new Error(`<Timeline /> - innerCircleWidth (${innerCircleWidth}) is larger than outerCircleWidth (${outerCircleWidth})`);
  }

  return (
    <div className={className ? `${className} ${styles.wrapper}` : `${styles.wrapper}`}>
      <div
        className={styles.line}
        style={{
          width: lineWidth,
          right: textWidth + gap + largerMiddleElement / 2 - lineWidth / 2,
        }}
      />
      <div className={styles.timelineSections}>
        {data.map((datum) => (
          <TimelineSection
            key={datum.time}
            datum={datum}
            isTimeUppercase={isTimeUppercase}
            outerCircleWidth={outerCircleWidth}
            innerCircleWidth={innerCircleWidth}
            textWidth={textWidth}
            gap={gap}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineSectionProps {
  datum: TimelineData;
  isTimeUppercase: boolean;
  outerCircleWidth: number;
  innerCircleWidth: number;
  textWidth: number;
  gap: number;
}

function TimelineSection({ datum, isTimeUppercase, outerCircleWidth, innerCircleWidth, textWidth, gap }: TimelineSectionProps) {
  return (
    <div className={styles.timelineSection} style={{ gap: gap }}>
      <div className={styles.time}>{isTimeUppercase ? datum.time.toUpperCase() : datum.time}</div>
      <div
        className={styles.outerCircle}
        style={{
          width: outerCircleWidth,
          height: outerCircleWidth,
          borderRadius: outerCircleWidth,
          flex: `0 0 calc(${outerCircleWidth}rem / 16)`,
        }}>
        <div
          className={styles.innerCircle}
          style={{
            width: innerCircleWidth,
            height: innerCircleWidth,
            borderRadius: innerCircleWidth,
          }}
        />
      </div>
      <div
        className={styles.text}
        style={{
          width: textWidth,
          flex: `0 0 calc(${textWidth}rem / 16)`,
        }}>
        <div className={styles.timeText}>{datum.time}</div>
        {datum.text}
      </div>
    </div>
  );
}
