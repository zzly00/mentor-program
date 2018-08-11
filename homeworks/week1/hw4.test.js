import {isPalindromes} from './hw4'

describe("hw4", () => {
  it("should return correct answer when str = abcdcba", () => {
    expect(isPalindromes('abcdcba')).toBe(true)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = ", () => {
    expect(isPalindromes('')).toBe(true)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = apple", () => {
    expect(isPalindromes('apple')).toBe(false)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = aaaaa", () => {
    expect(isPalindromes('aaaaa')).toBe(true)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = aaaaaa", () => {
    expect(isPalindromes('aaaaaa')).toBe(true)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = applppa", () => {
    expect(isPalindromes('applppa')).toBe(true)
  })
})
describe("hw4", () => {
  it("should return correct answer when str = applpa", () => {
    expect(isPalindromes('applpa')).toBe(false)
  })
})