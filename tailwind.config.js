/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: require('./commons/ui/colors'),
    screens: require('./commons/ui/screen'),
    spacing: require('./commons/ui/spacing'),
    inset: require('./commons/ui/spacing'),
    borderWidth: require('./commons/ui/borderWidth'),
    fontSize: require('./commons/ui/fontSize'),
    borderRadius: require('./commons/ui/borderRadius'),
    zIndex: require('./commons/ui/zIndex'),
    opacity: require('./commons/ui/opacity'),
    scale: require('./commons/ui/scale'),
  },
  corePlugins: require('./commons/ui/container').corePlugins,
  plugins: require('./commons/ui/container').plugins,
  variants: require('./commons/ui/variants'),
}
