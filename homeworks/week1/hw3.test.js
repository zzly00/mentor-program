import {isPrime} from './hw3'

describe("hw3", () => {
  it("should return correct answer when n = 1", () => {
    expect(isPrime(1)).toBe(false)
  })
})
describe("hw3", () => {
  it("should return correct answer when n = 37", () => {
    expect(isPrime(37)).toBe(true)
  })
})
describe("hw3", () => {
  it("should return correct answer when n = ", () => {
    expect(isPrime("")).toBe(false)
  })
})
describe("hw3", () => {
  it("should return correct answer when n = 0", () => {
    expect(isPrime(0)).toBe(false)
  })
})
describe("hw3", () => {
  it("should return correct answer when n = 50", () => {
    expect(isPrime(50)).toBe(false)
  })
})