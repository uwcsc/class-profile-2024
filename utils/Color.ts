type ColorName =
  | `${"primary" | "secondary" | "tertiary"}Background`
  | `${"primary" | "secondary"}Accent${"" | "Light" | "Lighter"}`
  | `primaryAccent${"Dark" | "Darker"}`
  | `${"primary" | "secondary"}Heading`
  | "link"
  | "linkHover"
  | "primaryText"
  | "cardBackground"
  | "label"
  | `chart${"Blue" | "Yellow" | "Green" | "Pink"}${"Light" | "Heavy"}`;

export const Color: Record<ColorName, string> = {
  primaryBackground: "var(--primary-background)",
  secondaryBackground: "var(--secondary-background)",
  tertiaryBackground: "var(--tertiary-background)",
  primaryAccent: "var(--primary-accent)",
  primaryAccentLight: "var(--primary-accent-light)",
  primaryAccentLighter: "var(--primary-accent-lighter)",
  primaryAccentDark: "var(--primary-accent-dark)",
  primaryAccentDarker: "var(--primary-accent-darker)",
  secondaryAccent: "var(--secondary-accent)",
  secondaryAccentLight: "var(--secondary-accent-light)",
  secondaryAccentLighter: "var(--secondary-accent-lighter)",
  primaryHeading: "var(--primary-heading)",
  secondaryHeading: "var(--secondary-heading)",
  link: "var(--link)",
  linkHover: "var(--link-hover)",
  primaryText: "var(--primary-text)",
  cardBackground: "var(--card-background)",
  label: "var(--label)",
  chartBlueLight: "var(--chart-blue-light)",
  chartBlueHeavy: "var(--chart-blue-heavy)",
  chartYellowLight: "var(--chart-yellow-light)",
  chartYellowHeavy: "var(--chart-yellow-heavy)",
  chartGreenLight: "var(--chart-green-light)",
  chartGreenHeavy: "var(--chart-green-heavy)",
  chartPinkLight: "var(--chart-pink-light)",
  chartPinkHeavy: "var(--chart-pink-heavy)",
};
