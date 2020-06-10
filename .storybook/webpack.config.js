module.exports = ({ config }) => {
  config.module.rules = config.module.rules.map(rule => {
    // Removes svgs from the file loader so that svg-inline-loader works
    let test = rule.test.toString().replace('svg|', '')
    test = test.substring(1, test.length - 1)
    rule.test = new RegExp(test)
    return rule
  })

  config.module.rules = config.module.rules.filter(rule => {
    return rule.test.toString() !== /\.(mjs|jsx?)$/.toString()
  })

  config.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['postcss-loader']
  })

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  })

  config.module.rules.push({
    test: /\.mdx$/,
    use: ['babel-loader', '@mdx-js/loader']
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
