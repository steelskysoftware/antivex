export async function wait(t = 1000) {
  return new Promise(resolve => setTimeout(resolve, t))
}