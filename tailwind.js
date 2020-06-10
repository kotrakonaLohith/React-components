/*
View the full documentation at https://tailwindcss.com.
*/

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
*/

let colors = {
  transparent: 'transparent',

  // Bright Blues
  'bright-blue-600': '#019fcb',
  'bright-blue-500': '#20bbe6',
  'bright-blue-400': '#bbefff',
  'bright-blue-300': '#88d6f1',
  'bright-blue-200': '#d1f2fc',
  'bright-blue-100': '#f1fcff',
  // Dark Blues
  'dark-blue-600': '#0c3266',
  'dark-blue-500': '#0c3c7c',
  'dark-blue-400': '#19519c',
  'dark-blue-300': '#177a97',
  'dark-blue-200': '#8ca8ce',
  // Neturals
  black: '#000',
  'gray-600': '#39424a',
  'gray-500': '#5e717d',
  'gray-400': '#878d90',
  'gray-300': '#bec4c9',
  'gray-200': '#edeeef',
  'gray-100': '#f7f7f7',
  white: '#fff',
  // Purple
  'purple-600': '#872175',
  'purple-100': '#f4dcef',
  // Green
  'green-600': '#017474',
  'green-300': '#99cc72',
  'green-100': '#f0f7ea',
  // Red
  'red-600': '#b82216',
  'red-200': '#db908b',
  'red-100': '#fae1de',
  // Gold
  'gold-600': '#f8a431',
  'gold-500': '#f6be5a',
  // Overlay
  'opaque-white': 'rgba(255, 255, 255, 0.5)'
}

let rem = px => {
  return px / 16 + 'rem'
}

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  | .error { color: config('colors.red') }
  */

  colors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  | Class name: .{screen}:{utility}
  */

  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  | Class name: .font-{name}
  */

  fonts: {
    sans: ['Open Sans', 'Helvetica Neue', 'sans-serif'],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ]
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  | Class name: .text-{size}
  */

  textSizes: {
    '3xs': rem(12),
    '2xs': rem(13),
    xs: rem(14),
    sm: rem(15),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(36),
    '3xl': rem(66)
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  | Class name: .font-{weight}
  */

  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  | Class name: .leading-{size}
  */

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 1.75
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  | Class name: .tracking-{size}
  */

  tracking: {
    tight: '-0.05em',
    normal: '0',
    loose: '0.01em',
    wide: '0.05em'
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  | Class name: .text-{color}
  */

  textColors: {
    'bright-blue-300': colors['bright-blue-300'],
    'bright-blue-400': colors['bright-blue-400'],
    'bright-blue-500': colors['bright-blue-500'],
    'bright-blue-600': colors['bright-blue-600'],
    'dark-blue-200': colors['dark-blue-200'],
    'dark-blue-300': colors['dark-blue-300'],
    'dark-blue-400': colors['dark-blue-400'],
    'dark-blue-600': colors['dark-blue-600'],
    'gray-300': colors['gray-300'],
    'gray-400': colors['gray-400'],
    'gray-500': colors['gray-500'],
    'gray-600': colors['gray-600'], // Body Copy
    'green-600': colors['green-600'],
    'red-600': colors['red-600'],
    'gold-500': colors['gold-500'],
    white: colors['white']
  },

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  | Class name: .bg-{color}
  */

  backgroundColors: {
    'bright-blue-100': colors['bright-blue-100'],
    'bright-blue-200': colors['bright-blue-200'],
    'bright-blue-400': colors['bright-blue-400'],
    'bright-blue-500': colors['bright-blue-500'],
    'bright-blue-600': colors['bright-blue-600'],
    'dark-blue-400': colors['dark-blue-400'],
    'dark-blue-500': colors['dark-blue-500'],
    'dark-blue-600': colors['dark-blue-600'],
    'gray-100': colors['gray-100'],
    'gray-300': colors['gray-300'],
    'gray-600': colors['gray-600'],
    'green-100': colors['green-100'],
    'purple-100': colors['purple-100'],
    'purple-600': colors['purple-600'],
    'red-100': colors['red-100'],
    'red-200': colors['red-200'],
    'red-600': colors['red-600'],
    white: colors['white'],
    'opaque-white': colors['opaque-white'],
    none: 'transparent'
  },

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  | Class name: .bg-{size}
  */

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  },

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  | Class name: .border{-side?}{-width?}
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '3': '3px',
    '6': '6px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  | Class name: .border-{color}
  */

  borderColors: {
    transparent: colors['transparent'],
    default: colors['gray-300'],
    'bright-blue-400': colors['bright-blue-400'],
    'bright-blue-500': colors['bright-blue-500'],
    'bright-blue-600': colors['bright-blue-600'],
    'dark-blue-400': colors['dark-blue-400'],
    'gray-200': colors['gray-200'],
    'gray-400': colors['gray-400'],
    'gray-600': colors['gray-600'],
    'green-300': colors['green-300'],
    'red-600': colors['red-600'],
    'gold-600': colors['gold-600'],
    white: colors['white']
  },

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  | Class name: .rounded{-side?}{-size?}
  */

  borderRadius: {
    none: '0',
    px: '1px',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  | Class name: .w-{size}
  */

  width: {
    auto: 'auto',
    px: '1px',
    '4': rem(4),
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw',
    tooltip: rem(360)
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  | Class name: .h-{size}
  */

  height: {
    auto: 'auto',
    px: '1px',
    '4': rem(4), // ul bullet
    full: '100%',
    screen: '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  | Class name: .min-w-{size}
  */

  minWidth: {
    '0': '0',
    full: '100%',
    small: rem(300),
    button: rem(100),
    'button-md': rem(230),
    'form-content': rem(480)
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  | Class name: .min-h-{size}
  */

  // minHeight: {
  //   '0':    '0',
  //   full:   '100%',
  //   screen: '100vh'
  // },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  | Class name: .max-w-{size}
  */

  maxWidth: {
    sm: rem(184),
    btn: rem(258),
    'datepicker-input': rem(355),
    'form-sm': rem(335),
    'form-md': rem(477),
    narrow: rem(800),
    container: rem(1200),
    none: 'none'
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  | Class name: .max-h-{size}
  */

  maxHeight: {
    full: '100%',
    screen: '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  | Class name: .p{side?}-{size}
  */

  padding: {
    '0': '0',
    '4': rem(4),
    '6': rem(6),
    '7': rem(7),
    '8': rem(8),
    '11': rem(11),
    '12': rem(12),
    '15': rem(15),
    '16': rem(16),
    '20': rem(20),
    '21': rem(21),
    '24': rem(24),
    '28': rem(28),
    '32': rem(32),
    '36': rem(36),
    '40': rem(40),
    '50': rem(50),
    '60': rem(60),
    '70': rem(70),
    '80': rem(80),
    '90': rem(90),
    '100': rem(100)
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  | Class name: .m{side?}-{size}
  */

  margin: {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '2': rem(2),
    '4': rem(4),
    '8': rem(8),
    '12': rem(12),
    '16': rem(16),
    '20': rem(20),
    '24': rem(24),
    '32': rem(32),
    '40': rem(40),
    '48': rem(48),
    '64': rem(64),
    // Base10
    '10': rem(10)
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  | Class name: .-m{side?}-{size}
  */

  negativeMargin: {
    px: '1px',
    '4': rem(4),
    '6': rem(6)
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  | Class name: .shadow-{size?}
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none'
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  | Class name: .z-{index}
  */

  zIndex: {
    auto: 'auto',
    '0': 0,
    bottom: 10,
    middle: 500,
    screen: 999,
    top: 1000
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  | Class name: .opacity-{name}
  */

  // opacity: {
  //   '0':   '0',
  //   '25':  '.25',
  //   '50':  '.5',
  //   '75':  '.75',
  //   '100': '1'
  // },

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  | Class name: .fill-{name}
  */

  svgFill: {
    current: 'currentColor',
    neutral: colors['gray-600'],
    icon: colors['bright-blue-500'],
    purple: colors['purple-600'],
    dark: colors['dark-blue-500'],
    white: colors['white']
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  | Class name: .stroke-{name}
  */

  // svgStroke: {
  //   current: 'currentColor'
  // },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  | variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  */

  modules: {
    appearance: [],
    backgroundAttachment: false,
    backgroundColors: ['hover', 'focus', 'responsive'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: false,
    borderColors: ['focus', 'group-hover', 'responsive'],
    borderRadius: [],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: [],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: false,
    fonts: [],
    fontWeights: ['hover', 'focus'],
    height: [],
    leading: [],
    lists: [],
    margin: ['responsive'],
    maxHeight: false,
    maxWidth: ['responsive'],
    minHeight: false,
    minWidth: ['responsive'],
    negativeMargin: [],
    opacity: false,
    outline: false,
    overflow: [],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    resize: [],
    shadows: ['focus', 'responsive'],
    svgFill: ['group-hover'],
    svgStroke: false,
    tableLayout: false,
    textAlign: [],
    textColors: ['hover', 'focus', 'group-hover'],
    textSizes: [],
    textStyle: ['hover', 'focus', 'group-hover'],
    tracking: [],
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: [],
    width: ['responsive'],
    zIndex: []
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('./tailwind-plugins/rect')(rem),
    require('./tailwind-plugins/child-margin-bottom')(),
    require('./tailwind-plugins/pos')(),
    require('./tailwind-plugins/sr')(),
    ({ addUtilities }) => {
      const misc = {
        '.break-all': {
          wordBreak: 'break-all'
        },
        '.text-overflow-ellipsis': {
          textOverflow: 'ellipsis'
        }
      }
      addUtilities(misc, {
        variants: ['responsive']
      })
    }
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
}
