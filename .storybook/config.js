import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import 'what-input'
import '../src/css/main.css'

addParameters({
  options: {
    brandTitle: 'My Rotary',
    showPanel: false,
    theme: Object.assign({}, themes.dark, { appContentBg: 'white', appBorderRadius: 0 }),
    brandUrl: 'https://rotary.org'
  }
})

const req = require.context('../src/js/stories', true, /\.stories\.(js|tsx)$/)

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => {
      if (filename !== './_template/story_template.stories.tsx') {
        req(filename)
      }
    })
}

configure(loadStories, module)
