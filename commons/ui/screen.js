const screen = {
  xxl: { max: '1600px' },
  veryxl: { max: '1440px' },
  xl: { max: '1200px' },
  // => @media (max-width: 1279px) { ... }
  lg: { max: '1024px' },
  // => @media (max-width: 1023px) { ... }
  md: { max: '769px' },
  // => @media (max-width: 767px) { ... }
  sm: { max: '576px' },
  // => @media (max-width: 639px) { ... }
  xs: { max: '320px' },
}

module.exports = screen
