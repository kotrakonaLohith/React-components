import React, { FC } from 'react'
import TailwindConfig from '#tailwind'

interface ColorDataProps {
  name: string
  hex: string
  bg: boolean
  border: boolean
  borderDefault: boolean
  text: boolean
}

const { colors, backgroundColors, textColors, borderColors } = TailwindConfig
const colorData: ColorDataProps[] = []

for (const color in colors) {
  if (colors.hasOwnProperty(color)) {
    colorData.push({
      name: color,
      hex: colors[color],
      bg: !!backgroundColors[color],
      border: !!borderColors[color] || colors[color] === borderColors.default,
      borderDefault: colors[color] === borderColors.default,
      text: !!textColors[color]
    })
  }
}

const Feature = (name: string) => (
  <p className="text-3xs text-gray-400">
    <strong>{name}</strong>
  </p>
)

const ColorBox: FC<ColorDataProps> = ({
  name,
  hex,
  bg,
  border,
  borderDefault,
  text
}) => (
  <div key={hex} className="max-w-sm w-full mr-12 mb-20 shadow">
    <div className="relative" style={{ background: hex, height: '6rem' }}>
      <p className="absolute pin-t pin-l bg-white text-3xs text-gray-500 font-bold font-mono rounded-full m-8 px-4">
        {hex}
      </p>
    </div>

    <div className="p-16">
      <p className="text-gray-500 text-xs">{name}</p>
      <hr className="border-b border-gray-200" />
      {bg && Feature('Background')}
      {border && Feature('Border')}
      {borderDefault && Feature('Border (Default)')}
      {text && Feature('Text')}
    </div>
  </div>
)

const ColorSet: FC<{ type: string, className: string }> = ({ type, className }) => {
  let colorBoxes = colorData
  if (type) {
    colorBoxes = colorData.filter(c => {
      return !!c[type]
    })
  }

  return (
    <section className="py-20 flex flex-wrap">
      {colorBoxes.map(ColorBox)}
    </section>
  )
}

export default ColorSet