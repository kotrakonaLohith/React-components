const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.js'),
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
        'nesting-rules': true
      }
    })
  ]
}
