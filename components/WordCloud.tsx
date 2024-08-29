"use client";

import { Color } from "@/utils/Color";
import { inDevEnvironment } from "@/utils/inDevEnviroment";
import { useIsMobile } from "@/utils/isMobile";
import { scaleLog } from "@visx/scale";
import { Text } from "@visx/text";
import { useTooltip, withTooltip } from "@visx/tooltip";
import { Wordcloud as VisxWordcloud } from "@visx/wordcloud";
import React from "react";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

interface WordCloudProps {
  data: Array<WordData>;
  /** Width of the graph, in px */
  width?: number;
  /** The minimum width of the graph */
  minWidth?: number;
  /** Height of the graph, in px */
  height?: number;
  /** Minimum padding between words, in px */
  wordPadding?: number;
  /** Weight of the font of the words */
  fontWeight?: number;
  /** The desired font size of the smallest word on desktop, in px.*/
  desktopMinFontSize?: number;
  /** The desired font size of the smallest word on mobile, in px.*/
  mobileMinFontSize?: number;
  /** The desired font size of the largest word on desktop, in px. */
  desktopMaxFontSize?: number;
  /** The desired font size of the largest word on mobile, in px. */
  mobileMaxFontSize?: number;
  /** A random seed in the range [0, 1) used for placing the words, change this value to get an alternate placement of words */
  randomSeed?: number;
  /** Type of spiral used for rendering the words, either rectangular or archimedean */
  spiral?: "rectangular" | "archimedean";
  /** ClassName of the wrapper of the wordcloud */
  className?: string;
  /** Items that show up less frequently than this will be hidden */
  minFrequency?: number;
  /** Has a Background block or not */
  background?: boolean;
}

interface WordData {
  text: string;
  value: number;
}

const TOOLTIP_HORIZONTAL_SHIFT_SCALER = 12.0;

export const WordCloud = withTooltip(
  ({
    data,
    width,
    height,
    wordPadding,
    fontWeight,
    desktopMinFontSize,
    mobileMinFontSize,
    desktopMaxFontSize,
    mobileMaxFontSize,
    randomSeed,
    spiral,
    className,
    minWidth,
    minFrequency,
    background = false,
  }: WordCloudProps) => {
    const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = useTooltip<WordData>();

    return (
      <div className={className}>
        <WordCloudWordsMemoized
          width={width}
          height={height}
          data={minFrequency ? data.filter((x) => x.value >= minFrequency) : data}
          wordPadding={wordPadding}
          fontWeight={fontWeight}
          desktopMinFontSize={desktopMinFontSize}
          mobileMinFontSize={mobileMinFontSize}
          desktopMaxFontSize={desktopMaxFontSize}
          mobileMaxFontSize={mobileMaxFontSize}
          showTooltip={(data, left, top) => {
            showTooltip({
              tooltipData: data,
              tooltipLeft: left,
              tooltipTop: top,
            });
          }}
          hideTooltip={hideTooltip}
          tooltipLeft={tooltipLeft}
          tooltipTop={tooltipTop}
          randomSeed={randomSeed}
          spiral={spiral}
          isMobile={useIsMobile()}
          minWidth={minWidth}
          background={background}
        />

        {tooltipOpen && tooltipData ? (
          <TooltipWrapper
            // set this to random so it correctly updates with parent bounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
            header={`${tooltipData.text} (${tooltipData.value})`}></TooltipWrapper>
        ) : null}
      </div>
    );
  },
);

/** The internal wordcloud component that actually lays out the word needs to be separate from the tooltip to prevent extra rerendering. */
type WordCloudWordsProps = Omit<WordCloudProps, "className"> & {
  showTooltip: (data: WordData, tooltipLeft: number, tooltipTop: number) => void;
  hideTooltip: () => void;
  // tooltipLeft and tooltipTop are used for preventing unnessary renders
  tooltipLeft?: number;
  tooltipTop?: number;
  isMobile: boolean; // passing in isMobile as a prop so we can rerender if this changes
  background?: boolean;
};
const WordCloudWords: React.FC<WordCloudWordsProps> = ({
  data,
  width = 1000,
  minWidth = 500,
  height = 500,
  wordPadding = 20,
  fontWeight = 400,
  desktopMinFontSize = 15,
  desktopMaxFontSize = 100,
  mobileMinFontSize = 15,
  mobileMaxFontSize = 60,
  randomSeed = 0.5,
  spiral = "rectangular",
  showTooltip,
  hideTooltip,
  isMobile,
  background = false,
}) => {
  width = width < minWidth ? minWidth : width;

  // In Block : Green
  // Outside Block : Yellow
  const wordColors = background ? [Color.chartGreenHeavy, Color.chartGreenLight] : [Color.chartYellowHeavy, Color.chartYellowLight];

  const minFontSize = isMobile ? mobileMinFontSize : desktopMinFontSize;
  const maxFontSize = isMobile ? mobileMaxFontSize : desktopMaxFontSize;

  const maxVal = Math.max(...data.map((w) => w.value));
  const minVal = Math.min(...data.map((w) => w.value));

  const fontScale = scaleLog({
    domain: [minVal, maxVal],
    range: [minFontSize, maxFontSize],
  });

  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);
  const fixedValueGenerator = () => randomSeed;

  return (
    <VisxWordcloud
      words={data}
      width={width}
      height={height}
      fontSize={fontSizeSetter}
      font="Inconsolata, monospace"
      padding={wordPadding}
      spiral={spiral}
      rotate={0}
      random={fixedValueGenerator}>
      {(cloudWords) => {
        if (
          inDevEnvironment &&
          cloudWords.length != 0 && // since on initial load the length is 0, but thats not an error
          cloudWords.length != data.length
        ) {
          console.error(
            `Not all words rendered for wordcloud! (${
              data.length - cloudWords.length
            } words missing) Please try adjusting the min/max font size, the random seed, and the wordPadding`,
          );
        }
        return cloudWords.map((word, index) => {
          return (
            <Text
              key={`wordcloud-word-${word.text ?? ""}-${index}`}
              fill={wordColors[index % wordColors.length]}
              transform={`translate(${word.x ?? 0}, ${word.y ?? 0})`}
              fontSize={word.size}
              fontFamily={word.font}
              fontWeight={fontWeight}
              className={`cursor-default ${background ? "chart-green" : "chart-yellow"}`}
              textAnchor="middle"
              onMouseMove={
                ((e: React.MouseEvent<SVGTextElement | SVGLineElement, MouseEvent>) => {
                  const tooltipPos = getTooltipPosition(e);
                  if (word.text) {
                    showTooltip(
                      {
                        text: word.text,
                        value: (cloudWords[index] as WordData).value,
                      },
                      tooltipPos.x - word.text.length * TOOLTIP_HORIZONTAL_SHIFT_SCALER,
                      tooltipPos.y,
                    );
                  }
                }) as React.MouseEventHandler<SVGTextElement>
              }
              onMouseLeave={() => hideTooltip()}>
              {word.text}
            </Text>
          );
        });
      }}
    </VisxWordcloud>
  );
};

const shouldNotRerender = (prevProps: WordCloudWordsProps, nextProps: WordCloudWordsProps) => {
  if (
    // if width changes, rerender, else don't rerender for a tooltip change
    prevProps.width === nextProps.width &&
    prevProps.isMobile === nextProps.isMobile &&
    prevProps.background === nextProps.background &&
    (prevProps.tooltipLeft !== nextProps.tooltipLeft ||
      prevProps.tooltipTop !== nextProps.tooltipTop ||
      nextProps.tooltipLeft === undefined ||
      nextProps.tooltipTop === undefined)
  ) {
    return true; // do not re-render
  }
  return false; // will re-render
};

const WordCloudWordsMemoized = React.memo(WordCloudWords, shouldNotRerender);
