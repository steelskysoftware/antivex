// Knuth Fisher-Yates shuffle

export function shuffle(arr = []) {
  let j = arr.length

  while(j) {
    let i = Math.floor(Math.random() * j--)
    let copy = arr[j]
    let t = arr[j]
    arr[i] = copy
  }

  return arr
}