import { Color } from "@/utils/Color";
import { useState } from "react";
import Star from "./Star";

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
  const { data, width = 600, height = 300, minWidth = 600, className } = props;
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
      className={`${className || ""} relative flex justify-between items-center gap-2 m-auto py-8 pr-2 z-30 max-w-[calc(min(40vw,512px))]`}
      style={{
        width: `${actualWidth / 16}rem`,
        minHeight: `${height / 26}rem`,
      }}>
      <CarouselButton onClick={showPreviousCard} isPrevious />
      <img
        src="/images/shooting-star.svg"
        alt="Shooting star"
        className="absolute pointer-events-none end-[-2rem] top-[-1.3rem] w-[calc(30rem/2)] h-[calc(8rem)] z-[inherit]"
        aria-hidden="true"
      />
      <div
        className="flex flex-col justify-between items-stretch gap-4 min-h-[inherit] h-full w-full p-[calc(30rem/16)] border border-solid border-white/20 rounded-[calc(12rem/16)] bg-response"
        style={{ filter: "box-shadow(0 calc(1rem / 16) calc(10rem / 16)" }}>
        <QuotationMark className="w-[calc(20rem/12)] h-[calc(20rem/12)] z-30" />
        <ul className="flex flex-col justify-center items-center relative w-full m-0 p-0 grow z-50">
          {data.map((quote, idx) => (
            <li
              key={idx}
              className={`absolute inset-0 p-0 list-none flex h-full overflow-y-auto transition-all ${idx !== activeIdx ? "invisible opacity-0" : "visible opacity-100"} ${(idx + 1) % data.length === activeIdx ? "-translate-x-8" : (idx + data.length - 1) % data.length === activeIdx ? "translate-x-8" : ""}`}>
              <p className="mx-4 my-auto h-max w-full text-center lg:text-lg xl:text-xl">{quote}</p>
            </li>
          ))}
        </ul>
        <div className="flex justify-end w-full z-30">
          <QuotationMark className="w-[calc(20rem/12)] h-[calc(20rem/12)] rotate-180" />
        </div>
        <Star className="absolute -bottom-5 w-[calc(20rem/5)] h-[calc(20rem/5)] z-30" colour="rgba(255, 255, 243, 1)" />
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
          {activeIdx + 1} / {data.length}
        </div>
      </div>
      <CarouselButton onClick={showNextCard} />
    </section>
  );
}

function CarouselButton({ isPrevious, onClick }: CarouselButtonProps) {
  return (
    <button className="p-0 group" onClick={onClick}>
      <svg
        className={`relative w-[calc(10rem/16)] h-[calc(20rem/16)] transition-transform duration-200 ${isPrevious ? "group-hover:-translate-x-[calc(4rem/16)]" : "group-hover:translate-x-[calc(4rem/16)]"} group-hover:drop-shadow-[0_0_2px_rgba(204,195,255,1)]`}
        width={20}
        height={40}
        viewBox="0 0 20 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d={isPrevious ? "M 20 40 L 3 23 C 1 21 1 19 3 17 L 20 0" : "M 0 40 L 17 23 C 19 21 19 19 17 17 L 0 0"}
          strokeWidth="3"
          stroke={Color.lighterPink} // TODO: change colour palette
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

function QuotationMark({ className }: { className: string }) {
  return (
    <svg className={className} aria-hidden width="68" height="56" viewBox="0 0 68 56" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.34 0.855375L31.1131 9.91768C28.9808 11.9315 27.0262 13.9454 25.2492 15.9592C23.5908 17.9731 22.2877 19.9869 21.34 22.0008C20.3923 24.0146 19.9185 25.9692 19.9185 27.8646C19.9185 29.4046 20.3331 30.7077 21.1623 31.7738C21.9915 32.84 22.9392 33.8469 24.0054 34.7946C25.0715 35.7423 26.0192 36.8677 26.8485 38.1708C27.6777 39.4738 28.0923 41.1323 28.0923 43.1461C28.0923 46.5815 26.8485 49.5431 24.3608 52.0308C21.9915 54.5185 18.8523 55.7623 14.9431 55.7623C11.1523 55.7623 7.71693 54.2223 4.63693 51.1423C1.67539 48.0623 0.194616 44.1531 0.194616 39.4146C0.194616 35.6238 0.964617 31.7146 2.50462 27.6869C4.16308 23.5408 6.53231 19.2169 9.61231 14.7154C12.6923 10.2138 16.6015 5.59383 21.34 0.855375ZM57.7669 0.855375L67.54 9.91768C65.4077 11.9315 63.4531 13.9454 61.6762 15.9592C60.0177 17.9731 58.7146 19.9869 57.7669 22.0008C56.8192 24.0146 56.3454 25.9692 56.3454 27.8646C56.3454 29.4046 56.76 30.7077 57.5892 31.7738C58.4185 32.84 59.3662 33.8469 60.4323 34.7946C61.4985 35.7423 62.4462 36.8677 63.2754 38.1708C64.1046 39.4738 64.5192 41.1323 64.5192 43.1461C64.5192 46.5815 63.2754 49.5431 60.7877 52.0308C58.4185 54.5185 55.2792 55.7623 51.37 55.7623C47.5792 55.7623 44.1439 54.2223 41.0639 51.1423C38.1023 48.0623 36.6215 44.1531 36.6215 39.4146C36.6215 35.6238 37.3915 31.7146 38.9315 27.6869C40.59 23.5408 42.9592 19.2169 46.0392 14.7154C49.1192 10.2138 53.0285 5.59383 57.7669 0.855375Z"
        fill={Color.primaryText}
      />
    </svg>
  );
}
