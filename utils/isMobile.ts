import { useWindowDimensions } from "./getWindowDimensions";

export const useIsMobile = () => useWindowDimensions().width <= 900;
