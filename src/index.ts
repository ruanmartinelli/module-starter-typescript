/**
 * Returns the sum of two numbers
 * @param a
 * @param b
 */
export default function sum(a: number = 0, b: number = 0) {
  if (!Number.isFinite(a)) {
    throw new TypeError(`Expected "number" but got: ${typeof a}`)
  }

  if (!Number.isFinite(b)) {
    throw new TypeError(`Expected "number" but got: ${typeof b}`)
  }

  return a + b
}
