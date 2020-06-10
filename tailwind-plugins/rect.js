module.exports = rem => ({ addUtilities }) => {
  const rect = {
    '.rect-logo': {
      width: rem(106),
      height: rem(40)
    },
    '.rect-avatar-md': {
      width: rem(84),
      height: rem(84)
    },
    '.rect-icon-3xs': {
      width: rem(8),
      height: rem(8)
    },
    '.rect-icon-xxs': {
      width: rem(12),
      height: rem(12)
    },
    '.rect-icon-xs': {
      width: rem(14),
      height: rem(14)
    },
    '.rect-icon-sm': {
      width: rem(16),
      height: rem(16)
    },
    '.rect-icon': {
      width: rem(20),
      height: rem(20)
    },
    '.rect-icon-md': {
      width: rem(24),
      height: rem(24)
    },
    '.rect-icon-lg': {
      width: rem(34),
      height: rem(34)
    },
    '.rect-icon-xl': {
      width: rem(44),
      height: rem(44)
    },
    '.rect-icon-2xl': {
      width: rem(60),
      height: rem(60)
    },
    '.rect-icon-3xl': {
      width: rem(100),
      height: rem(100)
    },
    '.rect-icon-4xl': {
      width: rem(126),
      height: rem(126)
    },
    '.rect-profile': {
      width: rem(120),
      height: rem(120)
    },
    '.rect-profile-lg': {
      width: rem(180),
      height: rem(180)
    }
  }

  addUtilities(rect, {
    variants: ['responsive']
  })
}
