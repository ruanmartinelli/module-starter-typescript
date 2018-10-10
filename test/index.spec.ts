import m from '../src'

it('should return the sum of two numbers', () => {
  const result = m(40, 2)

  expect(result).toBe(42)
})

it('should return zero if no params are passed', () => {
  const result = m()

  expect(result).toBe(0)
})

it('should return input if only one param is passed', () => {
  const result = m(-42)

  expect(result).toBe(-42)
})

it('should return input if only one param is passed', () => {
  const result = m(-42)

  expect(result).toBe(-42)
})

it('should throw TypeError for non-Number values of `a`', () => {
  const fn = () => m('40' as any, 2)

  expect(fn).toThrow(TypeError)
})

it('should throw TypeError for non-Number values of `b`', () => {
  const fn = () => m(40, '2' as any)

  expect(fn).toThrow(TypeError)
})
