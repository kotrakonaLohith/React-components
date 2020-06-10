module.exports = () => ({ addUtilities, config }) => {
  const margin = config('margin', {})

  const childMarginBottom = {
    '.c-mb-32 > *': {
      marginBottom: margin['32']
    },
    '.c-mb-20 > *': {
      marginBottom: margin['20']
    },
    '.c-mb-12 > *': {
      marginBottom: margin['12']
    }
  }

  addUtilities(childMarginBottom)
}
