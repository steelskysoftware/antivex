export function wordSplit(str = '') {
  return str
    .replace(/([A-Z])/g, ' $1')
    .split(/[-_]|(?=[A-Z])\b/g)
}