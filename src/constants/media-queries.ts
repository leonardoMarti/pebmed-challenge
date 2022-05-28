export const BREAKPOINTS = {
  SM: 720,
  MD: 960,
  LG: 1280,
  XL: 1920,
};
export const MEDIA_QUERIES = {
  smDown: `@media (max-width: ${BREAKPOINTS.SM - 1}px)`,
  mdDown: `@media (max-width: ${BREAKPOINTS.MD - 1}px)`,
  lgDown: `@media (max-width: ${BREAKPOINTS.LG - 1}px)`,
  xlDown: `@media (max-width: ${BREAKPOINTS.XL - 1}px)`,
};
