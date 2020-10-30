const path = require('path')
function resolveSrc (_path) {
  return path.join(__dirname, _path)
}
const aliases = {
  // '@': 'src/assets',
  '@src': '~@/src/assets'
}
module.exports = {
  webpack: {}
}
for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
}
