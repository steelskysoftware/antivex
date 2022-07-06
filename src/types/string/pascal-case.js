import { wordSplit } from './word-split.js'
import { upperFirst } from './upper-first.js'

export function pascalCase(str = '') {
  return wordSplit(str)
    .map(s => s.toLowerCase())
    .map(upperFirst)
    .join('')
}