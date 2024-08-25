// Only static number props are included for this list
const propNames = ["graphHeight", "labelSize", "labelWidth"] as const;

// This type is needed for smart autocomplete
type PropName = (typeof propNames)[number];

const mobileBarGraphFactor = 1.25;
const desktopBarGraphFactor = 2;
export const barGraphWidth = (isMobile: boolean, pageWidth: number) => (isMobile ? pageWidth / mobileBarGraphFactor : pageWidth / desktopBarGraphFactor);

const mobilePieChartFactor = 1.25;
const desktopPieChartFactor = 3;
export const pieChartWidth = (isMobile: boolean, pageWidth: number) => (isMobile ? pageWidth / mobilePieChartFactor : pageWidth / desktopPieChartFactor);

const desktopWordCloudFactor = 1.5;
const mobileWordCloudWidth = 800;
export const wordCloudWidth = (isMobile: boolean, pageWidth: number) => (isMobile ? pageWidth / desktopWordCloudFactor : mobileWordCloudWidth);

export const barGraphMargin = {
  top: 20,
  bottom: 80,
  left: 60,
  right: 20,
};
export const DefaultProp: { [key in PropName]: number } = {
  graphHeight: 500,
  labelSize: 24,
  labelWidth: 120,
};

export const barGraphProps = (isMobile: boolean, pageWidth: number, background: boolean = false) => {
  return {
    width: barGraphWidth(isMobile, pageWidth),
    height: DefaultProp.graphHeight,
    margin: barGraphMargin,
    background: background,
  };
};

export const pieChartProps = (isMobile: boolean, pageWidth: number, background: boolean = false) => {
  return {
    width: pieChartWidth(isMobile, pageWidth),
    labelWidth: DefaultProp.labelWidth,
    labelTextSize: DefaultProp.labelSize,
    background: background,
  };
};

export const termsList = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"];
