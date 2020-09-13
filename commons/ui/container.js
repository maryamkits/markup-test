const corePlugins = {
  container: false,
}

const plugins = [
  function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '1531px',
        '@screen xxl': {
          maxWidth: '1400px',
        },
        '@screen veryxl': {
          maxWidth: '1160px',
        },
        '@screen xl': {
          maxWidth: '1000px',
        },
        '@screen lg': {
          maxWidth: '768px',
        },
        '@screen md': {
          maxWidth: '688px',
        },
        '@screen xs': {
          maxWidth: '280px',
        },
      },
    })
  },
]

module.exports = {
  corePlugins,
  plugins,
}
