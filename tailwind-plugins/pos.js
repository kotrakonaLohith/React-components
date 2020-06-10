module.exports = () => ({ addUtilities }) => {
  const pos = {
    '.pos-vertical-center': {
      top: '50%',
      transform: 'translate(0, -50%)'
    },
    '.pos-center': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '.pos-after': {
      top: '100%'
    },
    '.pos-before': {
      bottom: '100%'
    }
  }

  addUtilities(pos, {
    variants: ['responsive']
  })
}
