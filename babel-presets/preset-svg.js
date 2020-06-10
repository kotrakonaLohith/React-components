/**
 * This preset exists because the inline-react-svg plugin needs to run
 * after the paths have been resolved by the babel-plugin-module-resolver
 */
module.exports = () => ({
  plugins: [
    [
      require('babel-plugin-inline-react-svg'),
      {
        svgo: {
          plugins: [
            {
              removeAttrs: false
            }
          ]
        }
      }
    ]
  ]
})
