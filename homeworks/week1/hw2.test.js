import {capitalize} from './hw2'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
})
describe("hw2", () => {
  it("should return correct answer when str = aaa", () => {
    expect(capitalize('aaa')).toBe('Aaa')
  })
})
describe("hw2", () => {
  it("should return correct answer when str = AAA", () => {
    expect(capitalize('AAA')).toBe('AAA')
  })
})
describe("hw2", () => {
  it("should return correct answer when str = ", () => {
    expect(capitalize('')).toBe('')
  })
})
describe("hw2", () => {
  it("should return correct answer when str = 0aa", () => {
    expect(capitalize('0aa')).toBe('0aa')
  })
})
describe("hw2", () => {
  it("should return correct answer when str = ,aaa", () => {
    expect(capitalize(',aaa')).toBe(',aaa')
  })
})