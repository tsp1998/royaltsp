const screenSizes = {
  xs: '',
  md: '37.5em',
  lg: ''
}

const screens = Object.keys(screenSizes).reduce((acc, key) => ({
  ...acc, [key]: (...styles) => `@media (max-width: ${screenSizes[key]}) { ${styles} }`
}), {})

export default screens;