'use strict'

/**
 * Returns the big 5
 * @return Array  The 5 main traits
 */
const big5 = origin => {
  origin = typeof origin === 'string' ? JSON.parse(origin) : origin
  // var origin_big5 = origin.tree.children[0].children[0].children,
  var originBig5 = origin.personality

  var ret = []

  originBig5.forEach(trait => {
    ret.push({ name: trait.name, percentile: trait.percentile })
  })
  // console.log(ret)
  return ret
}

module.exports = big5
