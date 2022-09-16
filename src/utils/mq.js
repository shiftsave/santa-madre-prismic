
const breakpoints = [420,640, 940]

export const Above = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)